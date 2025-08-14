// backend/src/routes/ordenes.mesero.routes.js
const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const { rebalanceAssignments } = require("../services/cocina.assigner");

const prisma = new PrismaClient();
const router = express.Router();

/** Listado (excluye finalizadas) */
router.get("/", async (_req, res) => {
  try {
    const ordenes = await prisma.orden.findMany({
      where: { finishedAt: null },
      orderBy: { fecha: "desc" },
      include: {
        mesero: { select: { id: true, nombre: true } },
        items: true,
      },
    });
    res.json(ordenes);
  } catch (e) {
    console.error("GET /ordenes", e);
    res.status(500).json({ error: "Error al obtener órdenes" });
  }
});

/** Sólo pendientes de orden (si sigues usando esto) */
router.get("/pendientes", async (_req, res) => {
  try {
    const ordenes = await prisma.orden.findMany({
      where: { finishedAt: null, estado: "En espera" },
      orderBy: { fecha: "desc" },
      include: {
        mesero: { select: { nombre: true } },
        items: { where: { estado: "PENDIENTE" } },
      },
    });
    res.json(ordenes);
  } catch (e) {
    console.error("GET /pendientes", e);
    res.status(500).json({ error: "Error al obtener pendientes" });
  }
});

/** Crear orden + items */
router.post("/", async (req, res) => {
  const { mesa, meseroId, items } = req.body;
  if (!mesa || !meseroId || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Datos incompletos" });
  }
  try {
    const orden = await prisma.orden.create({
      data: {
        mesa: Number(mesa),
        mesero: { connect: { id: Number(meseroId) } },
        items: {
          create: items.map((it) => ({
            nombre: it.nombre,
            precio: it.precio,
            nota: it.nota || null,
            tipo: it.tipo === "BEBIDA" ? "BEBIDA" : "PLATILLO",
            estado: "PENDIENTE",
          })),
        },
        estado: "En espera",
      },
      include: { items: true },
    });

    await rebalanceAssignments(); // reparto inmediato
    res.status(201).json({ mensaje: "Orden registrada", orden });
  } catch (e) {
    console.error("POST /ordenes", e);
    res.status(500).json({ error: "Error al registrar la orden" });
  }
});

/** Obtener detalle de una orden (para modo edición) */
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ error: "ID inválido" });
  try {
    const orden = await prisma.orden.findUnique({
      where: { id },
      include: {
        mesero: { select: { id: true, nombre: true } },
        items: {
          select: {
            id: true,
            nombre: true,
            precio: true,
            nota: true,
            tipo: true,
            estado: true,
            chefId: true,
          },
          orderBy: { id: "asc" },
        },
      },
    });
    if (!orden) return res.status(404).json({ error: "Orden no encontrada" });
    res.json(orden);
  } catch (e) {
    console.error("GET /ordenes/:id", e);
    res.status(500).json({ error: "Error al obtener la orden" });
  }
});

/**
 * Aplicar cambios a una orden existente:
 *  - add: array de items nuevos [{nombre, precio, nota, tipo}]
 *  - deleteIds: array de IDs de OrdenItem a eliminar
 *  - update: array de { id, nota } para actualizar notas de ítems existentes
 *
 * Reglas:
 *  - Eliminar / Editar nota:
 *      PLATILLO: sólo si estado=PENDIENTE y chefId=null
 *      BEBIDA:   sólo si estado!=LISTO
 */
router.post("/:id/apply", async (req, res) => {
  const id = Number(req.params.id);
  const { add = [], deleteIds = [], update = [] } = req.body || {};
  if (!id) return res.status(400).json({ error: "ID inválido" });

  try {
    const orden = await prisma.orden.findUnique({ where: { id }, select: { id: true } });
    if (!orden) return res.status(404).json({ error: "Orden no encontrada" });

    await prisma.$transaction(async (tx) => {
      // === 1) Updates de nota permitidos ===
      if (Array.isArray(update) && update.length) {
        const idsUpd = update.map((u) => Number(u.id)).filter(Boolean);
        if (idsUpd.length) {
          const cand = await tx.ordenItem.findMany({
            where: { id: { in: idsUpd }, ordenId: id },
            select: { id: true, tipo: true, estado: true, chefId: true },
          });

          const permitidos = new Set(
            cand
              .filter(
                (it) =>
                  (it.tipo === "PLATILLO" && it.estado === "PENDIENTE" && it.chefId == null) ||
                  (it.tipo === "BEBIDA" && it.estado !== "LISTO")
              )
              .map((x) => x.id)
          );

          for (const u of update) {
            const uid = Number(u.id);
            if (!uid || !permitidos.has(uid)) continue;
            await tx.ordenItem.update({
              where: { id: uid },
              data: { nota: (u.nota ?? "") === "" ? null : String(u.nota) },
            });
          }
        }
      }

      // === 2) Eliminaciones permitidas ===
      let allowedDeleteIds = [];
      if (Array.isArray(deleteIds) && deleteIds.length) {
        const candidatos = await tx.ordenItem.findMany({
          where: { id: { in: deleteIds.map(Number) }, ordenId: id },
          select: { id: true, tipo: true, estado: true, chefId: true },
        });

        allowedDeleteIds = candidatos
          .filter(
            (it) =>
              (it.tipo === "PLATILLO" && it.estado === "PENDIENTE" && it.chefId == null) ||
              (it.tipo === "BEBIDA" && it.estado !== "LISTO")
          )
          .map((it) => it.id);

        if (allowedDeleteIds.length) {
          await tx.ordenItem.deleteMany({
            where: { id: { in: allowedDeleteIds }, ordenId: id },
          });
        }
      }

      // === 3) Altas ===
      if (Array.isArray(add) && add.length) {
        await tx.ordenItem.createMany({
          data: add.map((it) => ({
            ordenId: id,
            nombre: it.nombre,
            precio: it.precio,
            nota: it.nota || null,
            tipo: it.tipo === "BEBIDA" ? "BEBIDA" : "PLATILLO",
            estado: "PENDIENTE",
          })),
        });
      }
    });

    // Rebalancear por si cambió la cantidad de PLATILLOS
    await rebalanceAssignments();

    const ordenActualizada = await prisma.orden.findUnique({
      where: { id },
      include: {
        mesero: { select: { nombre: true } },
        items: true,
      },
    });

    res.json({
      mensaje: "Cambios aplicados",
      orden: ordenActualizada,
    });
  } catch (e) {
    console.error("POST /ordenes/:id/apply", e);
    res.status(500).json({ error: "No se pudieron aplicar los cambios" });
  }
});

/** (Sigue disponible) Anexar items a orden existente */
router.post("/:id/items", async (req, res) => {
  const id = Number(req.params.id);
  const { items } = req.body;
  if (!id || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Datos incompletos" });
  }
  try {
    const exists = await prisma.orden.findUnique({ where: { id } });
    if (!exists) return res.status(404).json({ error: "Orden no encontrada" });

    await prisma.ordenItem.createMany({
      data: items.map((it) => ({
        ordenId: id,
        nombre: it.nombre,
        precio: it.precio,
        nota: it.nota || null,
        tipo: it.tipo === "BEBIDA" ? "BEBIDA" : "PLATILLO",
        estado: "PENDIENTE",
      })),
    });

    await rebalanceAssignments();

    const ordenActualizada = await prisma.orden.findUnique({
      where: { id },
      include: {
        mesero: { select: { nombre: true } },
        items: true,
      },
    });

    res.json({ mensaje: "Items anexados", orden: ordenActualizada });
  } catch (e) {
    console.error("POST /:id/items", e);
    res.status(500).json({ error: "Error al anexar items" });
  }
});

/** Eliminar orden */
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.ordenItem.deleteMany({ where: { ordenId: id } });
    await prisma.orden.delete({ where: { id } });
    res.json({ mensaje: "Orden eliminada" });
  } catch (e) {
    console.error("DELETE /:id", e);
    res.status(500).json({ error: "Error al eliminar la orden" });
  }
});

/** Finalizar orden (todos los PLATILLOS en LISTO) */
router.patch("/:id/finalizar", async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ error: "ordenId inválido" });

  try {
    const orden = await prisma.orden.findUnique({
      where: { id },
      include: { items: true },
    });
    if (!orden) return res.status(404).json({ error: "Orden no existe" });
    if (orden.finishedAt) {
      return res.status(400).json({ error: "La orden ya está finalizada" });
    }

    const platillos = orden.items.filter((it) => (it.tipo || "").toUpperCase() !== "BEBIDA");
    const ok =
      platillos.length > 0 &&
      platillos.every((it) => (it.estado || "").toUpperCase() === "LISTO");
    if (!ok) return res.status(409).json({ error: "Aún hay platillos sin terminar" });

    const now = new Date();
    const durationSec = Math.max(0, Math.round((now - new Date(orden.fecha)) / 1000));

    const updated = await prisma.orden.update({
      where: { id },
      data: {
        finishedAt: now,
        durationSec,
        estado: "Terminada",
      },
      include: {
        items: true,
        mesero: { select: { id: true, nombre: true } },
      },
    });

    res.json(updated);
  } catch (e) {
    console.error("PATCH /:id/finalizar", e);
    res.status(500).json({ error: "Error al finalizar la orden" });
  }
});

module.exports = router;

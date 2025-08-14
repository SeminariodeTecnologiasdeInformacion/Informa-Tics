// backend/src/routes/ordenes.cocina.routes.js
const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const {
  rebalanceAssignments,
  promoteNextForChef,
  reassignItemToAnotherChef, // 👈 import clave
} = require("../services/cocina.assigner");

const prisma = new PrismaClient();
const router = express.Router();

const withWait = (it) => {
  if (!it) return null;
  const desde = it.asignadoEn ?? it.creadoEn;
  const minutos = Math.max(0, Math.floor((Date.now() - new Date(desde).getTime()) / 60000));
  return { ...it, esperaMin: minutos };
};

// ===== Heartbeat / Activar
router.post("/heartbeat", async (req, res) => {
  const chefId = Number(req.body?.chefId);
  if (!chefId) return res.status(400).json({ error: "chefId requerido" });

  await prisma.cocinaChef.upsert({
    where: { chefId },
    update: { activo: true, lastSeen: new Date() },
    create: { chefId, activo: true, lastSeen: new Date() }
  });

  await rebalanceAssignments();
  await promoteNextForChef(chefId); // auto: si no tiene actual y hay cola, arranca el primero
  res.json({ ok: true });
});

// ===== Desactivar
router.post("/desactivar", async (req, res) => {
  const chefId = Number(req.body?.chefId);
  if (!chefId) return res.status(400).json({ error: "chefId requerido" });

  await prisma.cocinaChef.updateMany({
    where: { chefId },
    data: { activo: false, lastSeen: new Date() }
  });

  await rebalanceAssignments();
  res.json({ ok: true });
});

// ===== Mis asignaciones (actual + cola)
router.get("/mis", async (req, res) => {
  try {
    const chefId = Number(req.query?.chefId ?? req.headers["x-chef-id"]);
    if (!chefId) return res.status(400).json({ error: "chefId requerido" });

    // Renovar actividad y equilibrar
    await prisma.cocinaChef.upsert({
      where: { chefId },
      update: { activo: true, lastSeen: new Date() },
      create: { chefId, activo: true, lastSeen: new Date() }
    });
    await rebalanceAssignments();
    await promoteNextForChef(chefId);

    const [actual, cola] = await Promise.all([
      prisma.ordenItem.findFirst({
        where: { chefId, tipo: "PLATILLO", estado: "PREPARANDO" },
        orderBy: { asignadoEn: "asc" },
        include: { orden: { select: { codigo: true, mesa: true } } }
      }),
      prisma.ordenItem.findMany({
        where: { chefId, tipo: "PLATILLO", estado: "ASIGNADO" },
        orderBy: { asignadoEn: "asc" },
        include: { orden: { select: { codigo: true, mesa: true } } },
        take: 50
      })
    ]);

    res.json({ actual: withWait(actual), cola: cola.map(withWait) });
  } catch (e) {
    console.error("GET /cocina/mis ->", e?.message, e?.stack);
    res.status(500).json({ error: "No se pudo cargar" });
  }
});

// ===== Aceptar (llevar a PREPARANDO manualmente si quiere)
router.post("/items/:itemId/aceptar", async (req, res) => {
  const itemId = Number(req.params.itemId);
  const chefId = Number(req.body?.chefId);
  if (!itemId || !chefId) return res.status(400).json({ error: "Datos incompletos" });

  try {
    const item = await prisma.ordenItem.findUnique({ where: { id: itemId } });
    if (!item) return res.status(404).json({ error: "Ítem no encontrado" });
    if (item.tipo !== "PLATILLO") return res.status(400).json({ error: "Solo PLATILLO se cocina" });
    if (item.chefId && item.chefId !== chefId) return res.status(409).json({ error: "Ítem de otro chef" });
    if (item.estado !== "ASIGNADO") return res.status(400).json({ error: "El ítem no está en tu cola" });

    const ya = await prisma.ordenItem.count({ where: { chefId, estado: "PREPARANDO" } });
    if (ya > 0) return res.status(400).json({ error: "Ya estás preparando un platillo" });

    const upd = await prisma.ordenItem.update({
      where: { id: itemId },
      data: { chefId, estado: "PREPARANDO", asignadoEn: item.asignadoEn ?? new Date() }
    });

    res.json({ mensaje: "En preparación", item: upd });
  } catch (e) {
    console.error("POST /items/:id/aceptar ->", e?.message);
    res.status(500).json({ error: "No se pudo aceptar" });
  }
});

// ===== Rechazar (enviar a OTRO chef o dejar pendiente)
router.post("/items/:itemId/rechazar", async (req, res) => {
  const itemId = Number(req.params.itemId);
  const chefId = Number(req.body?.chefId);
  if (!itemId || !chefId) return res.status(400).json({ error: "Datos incompletos" });

  try {
    const item = await prisma.ordenItem.findUnique({ where: { id: itemId } });
    if (!item) return res.status(404).json({ error: "Ítem no encontrado" });
    if (item.chefId && item.chefId !== chefId) return res.status(409).json({ error: "Ítem de otro chef" });

    // 1) Liberar: vuelve a pool (PENDIENTE, sin chef)
    await prisma.ordenItem.update({
      where: { id: itemId },
      data: { chefId: null, estado: "PENDIENTE", asignadoEn: null }
    });

    // 2) Intentar reasignar a OTRO chef (nunca al que rechazó)
    const reasignado = await reassignItemToAnotherChef(itemId, chefId);

    // 3) Asegurar que el chef que rechazó siga fluido (si no tiene PREPARANDO, promover de su cola)
    await promoteNextForChef(chefId);

    // 👇 No forzamos rebalance inmediato para evitar que el ítem regrese al mismo chef si no hubo cupo.
    // El rebalance normal ocurrirá en heartbeat / mis / listo.
    // Si quieres, puedes descomentar la siguiente línea para reequilibrar el resto del pool:
    // await rebalanceAssignments();

    res.json({
      mensaje: reasignado
        ? "Rechazado y enviado a otro cocinero"
        : "Rechazado: queda en espera hasta que otro cocinero tenga espacio"
    });
  } catch (e) {
    console.error("POST /items/:id/rechazar ->", e?.message);
    res.status(500).json({ error: "No se pudo rechazar" });
  }
});

// ===== Listo (y encadenar siguiente automáticamente)
router.patch("/items/:itemId/listo", async (req, res) => {
  const itemId = Number(req.params.itemId);
  if (!itemId) return res.status(400).json({ error: "itemId requerido" });

  try {
    const upd = await prisma.ordenItem.update({
      where: { id: itemId },
      data: { estado: "LISTO", finalizadoEn: new Date() }
    });

    // Si la orden quedó completa, marcar orden como "Listo"
    const restantes = await prisma.ordenItem.count({
      where: { ordenId: upd.ordenId, estado: { not: "LISTO" } }
    });
    if (restantes === 0) {
      await prisma.orden.update({ where: { id: upd.ordenId }, data: { estado: "Listo" } });
    }

    // Auto-encadenar: si hay cola para el mismo chef, promueve el siguiente
    if (upd.chefId) {
      await promoteNextForChef(upd.chefId);
    }
    await rebalanceAssignments();

    res.json({ mensaje: "Ítem listo", item: upd });
  } catch (e) {
    console.error("PATCH /items/:id/listo ->", e?.message);
    res.status(500).json({ error: "No se pudo marcar listo" });
  }
});

// ===== Historial
router.get('/historial', async (req, res) => {
  const chefId = Number(req.query.chefId || req.headers['x-chef-id']);
  if (!chefId) return res.status(400).json({ error: 'chefId requerido' });

  try {
    const items = await prisma.ordenItem.findMany({
      where: { chefId, estado: 'LISTO' },
      orderBy: { finalizadoEn: 'desc' },
      include: {
        orden: {
          select: {
            id: true,
            codigo: true,
            mesa: true,
            finishedAt: true,
            durationSec: true,
          },
        },
      },
    });

    res.json(items);
  } catch (e) {
    console.error('GET /cocina/historial', e);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});

module.exports = router;

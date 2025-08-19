// src/routes/ordenes.barra.routes.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ─────────────────────────────────────────────────────────────
// Helpers
const isBebida = (it) => String(it?.tipo || '').toUpperCase() === 'BEBIDA';
const now = () => new Date();

// ─────────────────────────────────────────────────────────────
// No guardamos presencia aún (para simplificar), solo OK
router.post('/heartbeat', (_req, res) => res.json({ ok: true }));
router.post('/desactivar', (_req, res) => res.json({ ok: true }));

// GET /barra/mis?bartenderId=#
router.get('/mis', async (req, res) => {
  const bartenderId = parseInt(req.query.bartenderId || req.headers['x-chef-id']); // reuso header del front
  if (!bartenderId) return res.status(400).json({ error: 'Falta bartenderId' });

  try {
    // Item actual en preparación por este bartender
    const actual = await prisma.ordenItem.findFirst({
      where: { chefId: bartenderId, estado: 'PREPARANDO', tipo: 'BEBIDA' },
      orderBy: { asignadoEn: 'desc' },
      include: { orden: { select: { id: true, codigo: true, mesa: true } } }
    });

    // Cola global de bebidas pendientes
    const cola = await prisma.ordenItem.findMany({
      where: { estado: 'PENDIENTE', tipo: 'BEBIDA' },
      orderBy: { creadoEn: 'asc' },
      take: 30,
      include: { orden: { select: { id: true, codigo: true, mesa: true } } }
    });

    res.json({ actual, cola });
  } catch (e) {
    console.error('[BARRA/mis]', e);
    res.status(500).json({ error: 'No se pudo cargar datos de barra' });
  }
});

// POST /barra/items/:id/aceptar
router.post('/items/:id/aceptar', async (req, res) => {
  const id = parseInt(req.params.id);
  const bartenderId = parseInt(req.body.chefId || req.body.bartenderId);
  if (!bartenderId) return res.status(400).json({ error: 'Falta bartenderId' });

  try {
    const it = await prisma.ordenItem.findUnique({ where: { id } });
    if (!it || !isBebida(it)) return res.status(404).json({ error: 'Bebida no encontrada' });
    if (!['PENDIENTE', 'ASIGNADO'].includes(it.estado)) {
      return res.status(400).json({ error: 'La bebida no está disponible para aceptar' });
    }

    const updated = await prisma.ordenItem.update({
      where: { id },
      data: { chefId: bartenderId, estado: 'PREPARANDO', asignadoEn: now() },
      include: { orden: { select: { id: true, codigo: true, mesa: true } } }
    });
    res.json(updated);
  } catch (e) {
    console.error('[BARRA/aceptar]', e);
    res.status(500).json({ error: 'No se pudo aceptar la bebida' });
  }
});

// POST /barra/items/:id/rechazar
router.post('/items/:id/rechazar', async (req, res) => {
  const id = parseInt(req.params.id);
  const bartenderId = parseInt(req.body.chefId || req.body.bartenderId);
  if (!bartenderId) return res.status(400).json({ error: 'Falta bartenderId' });

  try {
    const it = await prisma.ordenItem.findUnique({ where: { id } });
    if (!it || !isBebida(it)) return res.status(404).json({ error: 'Bebida no encontrada' });
    if (it.chefId !== bartenderId) {
      return res.status(403).json({ error: 'No puedes rechazar una bebida que no está asignada a ti' });
    }

    await prisma.ordenItem.update({
      where: { id },
      data: { chefId: null, estado: 'PENDIENTE', asignadoEn: null }
    });
    res.json({ ok: true });
  } catch (e) {
    console.error('[BARRA/rechazar]', e);
    res.status(500).json({ error: 'No se pudo rechazar la bebida' });
  }
});

// PATCH /barra/items/:id/listo
router.patch('/items/:id/listo', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const it = await prisma.ordenItem.findUnique({ where: { id }, include: { orden: true } });
    if (!it || !isBebida(it)) return res.status(404).json({ error: 'Bebida no encontrada' });

    const updated = await prisma.ordenItem.update({
      where: { id },
      data: { estado: 'LISTO', finalizadoEn: now() }
    });

    // Si TODOS los items de la orden están LISTO, marcamos la orden como finalizada (opcional)
    const restantes = await prisma.ordenItem.count({
      where: { ordenId: it.ordenId, estado: { in: ['PENDIENTE', 'ASIGNADO', 'PREPARANDO'] } }
    });
    if (restantes === 0) {
      const end = now();
      const dur =
        it.orden?.fecha ? Math.max(0, Math.floor((end - it.orden.fecha) / 1000)) : null;
      await prisma.orden.update({
        where: { id: it.ordenId },
        data: { finishedAt: end, durationSec: dur, estado: 'Completado' }
      });
    }

    res.json(updated);
  } catch (e) {
    console.error('[BARRA/listo]', e);
    res.status(500).json({ error: 'No se pudo marcar la bebida como lista' });
  }
});

// GET /barra/historial?bartenderId=#
router.get('/historial', async (req, res) => {
  const bartenderId = parseInt(req.query.bartenderId);
  if (!bartenderId) return res.status(400).json({ error: 'Falta bartenderId' });

  try {
    const items = await prisma.ordenItem.findMany({
      where: { chefId: bartenderId, tipo: 'BEBIDA', estado: 'LISTO' },
      orderBy: { finalizadoEn: 'desc' },
      include: {
        orden: {
          select: { id: true, codigo: true, mesa: true, finishedAt: true, durationSec: true }
        }
      }
    });
    res.json(items);
  } catch (e) {
    console.error('[BARRA/historial]', e);
    res.status(500).json({ error: 'No se pudo cargar el historial' });
  }
});

module.exports = router;

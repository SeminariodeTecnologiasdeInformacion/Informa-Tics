// src/routes/auth.change.routes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * POST /auth/change-password
 * body: { userId, actual, nueva }
 */
router.post('/auth/change-password', async (req, res) => {
  try {
    const { userId, actual, nueva } = req.body;

    const u = await prisma.usuario.findUnique({ where: { id: Number(userId) } });
    if (!u || !u.contrasena) return res.status(400).json({ ok: false, error: 'Usuario inválido' });

    const ok = await bcrypt.compare(actual, u.contrasena);
    if (!ok) return res.status(401).json({ ok: false, error: 'Contraseña actual incorrecta' });

    if (!nueva || nueva.length < 8) {
      return res.status(400).json({ ok: false, error: 'La nueva contraseña debe tener al menos 8 caracteres' });
    }

    const hash = await bcrypt.hash(nueva, 12);
    await prisma.usuario.update({
      where: { id: u.id },
      data: { contrasena: hash, debeCambiarPassword: false }
    });

    res.json({ ok: true, message: 'Contraseña actualizada' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: 'No se pudo cambiar la contraseña' });
  }
});

module.exports = router;

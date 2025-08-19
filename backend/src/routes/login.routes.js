// routes/login.routes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Normaliza "ver menu" -> "VER_MENU"
function normPermKey(s) {
  return String(s || '').trim().toUpperCase().replace(/\s+/g, '_');
}

// Convierte lista (strings u objetos) a array de strings normalizados
function normalizePerms(list) {
  if (!Array.isArray(list)) return [];
  return list
    .map(p => (typeof p === 'string' ? p : (p?.nombre || p?.key || '')))
    .filter(Boolean)
    .map(normPermKey);
}

router.post('/', async (req, res) => {
  const { usuario, contrasena } = req.body;
  if (!usuario || !contrasena) {
    return res.status(400).json({ error: 'Usuario y contraseña son requeridos.' });
  }

  try {
    const user = await prisma.usuario.findFirst({
      where: { estado: true, OR: [{ usuario }, { correo: usuario }] },
      include: { rol: true }, // rol con { id, nombre }
    });

    // Verificación con HASH (bcrypt)
    if (!user || !user.contrasena) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }
    const ok = await bcrypt.compare(contrasena, user.contrasena);
    if (!ok) return res.status(401).json({ error: 'Credenciales incorrectas.' });

    const rolNombre = String(user.rol?.nombre || '').trim().toLowerCase();
    const isAdmin = rolNombre === 'administrador' || rolNombre === 'admin';

    let permisosStr = [];
    if (isAdmin) {
      const allPerms = await prisma.permiso.findMany({ select: { nombre: true } });
      permisosStr = normalizePerms(allPerms);
    } else {
      const rolId = user.rolId || user.rol?.id;
      const links = await prisma.permisoPorRol.findMany({
        where: { rolId },
        select: { permiso: { select: { nombre: true } } },
      });
      permisosStr = normalizePerms(links.map(l => l.permiso));
    }

    const { contrasena: _omit, ...usuarioSinClave } = user;

    return res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      mustChange: Boolean(user.debeCambiarPassword), // <- para redirigir a /cambiar-password
      usuario: {
        ...usuarioSinClave,
        permisos: permisosStr,
      },
    });
  } catch (error) {
    console.error('Error en /login:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

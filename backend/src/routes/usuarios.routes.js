// src/routes/usuarios.routes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const { sendEmail } = require('../services/email');
const { genTempPassword } = require('../utils/passwords');

// =========================
// GET /usuarios  (activos o inactivos)
// =========================
router.get('/', async (req, res) => {
  try {
    const inactivos = req.query.inactivos === '1';
    const usuarios = await prisma.usuario.findMany({
      where: { estado: inactivos ? false : true },
      select: {
        id: true,
        nombre: true,
        usuario: true,
        correo: true,
        rol: { select: { nombre: true } }
      },
      orderBy: { id: 'asc' }
    });
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios.' });
  }
});

// =========================
// POST /usuarios  (crear con contraseña temporal por correo)
//   - Valida duplicados case-insensitive
//   - Si existe inactivo -> 409 con {existeInactivo, usuarioId, ...}
// =========================
router.post('/', async (req, res) => {
  let { nombre, usuario, correo, rolId, responsableId } = req.body;

  // normalizar
  nombre = String(nombre || '').trim();
  usuario = String(usuario || '').trim();
  correo  = String(correo  || '').trim().toLowerCase();
  rolId = parseInt(rolId);
  responsableId = parseInt(responsableId);

  if (!nombre || !usuario || !correo || !rolId || !responsableId) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    const rol = await prisma.rol.findUnique({ where: { id: rolId } });
    if (!rol) return res.status(404).json({ error: 'Rol no encontrado.' });
    if (rol.nombre.toLowerCase() === 'administrador') {
      return res.status(403).json({ error: 'No se permite crear usuarios con rol de Administrador.' });
    }

    // ¿ya existe por usuario o correo? (insensible a mayúsculas)
    const duplicado = await prisma.usuario.findFirst({
      where: {
        OR: [
          { usuario: { equals: usuario, mode: 'insensitive' } },
          { correo:  { equals: correo,  mode: 'insensitive' } },
        ]
      },
      select: { id: true, estado: true, nombre: true, usuario: true, correo: true }
    });

    if (duplicado) {
      if (duplicado.estado === true) {
        return res.status(409).json({ error: 'El usuario o correo ya está en uso.' });
      }
      // Existe ELIMINADO -> que el front decida restaurar
      return res.status(409).json({
        error: 'Existe un usuario eliminado con ese usuario/correo. Puedes restaurarlo.',
        existeInactivo: true,
        usuarioId: duplicado.id,
        nombre: duplicado.nombre,
        usuarioDup: duplicado.usuario,
        correoDup: duplicado.correo
      });
    }

    // Crear nuevo con temporal
    const temp = genTempPassword();
    const hash = await bcrypt.hash(temp, 12);

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        usuario,
        correo, // ya en minúsculas
        rolId,
        contrasena: hash,
        debeCambiarPassword: true,
        estado: true
      }
    });

    await prisma.historialModificacion.create({
      data: {
        usuarioId: nuevoUsuario.id,
        campo: 'usuario',
        valorAnterior: null,
        valorNuevo: `${nuevoUsuario.nombre} (${nuevoUsuario.usuario})`,
        accion: 'creación',
        responsableId
      }
    });

    // Enviar correo (no bloquear si falla)
    let emailSent = true;
    try {
      await sendEmail({
        to: correo,
        subject: 'Usuario creado correctamente',
        html: `
          <h2>¡Bienvenido/a, ${nombre}!</h2>
          <p>Rol: <b>${rol.nombre}</b></p>
          <p>Contraseña temporal: <code style="font-size:16px">${temp}</code></p>
          <p>Ingresa y cámbiala: <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/login">Ingresar</a></p>
        `
      });
    } catch (e) {
      emailSent = false;
      console.error('✉️ Error correo (creación):', e.message);
    }

    return res.status(201).json({
      mensaje: emailSent ? 'Usuario creado y correo enviado' : 'Usuario creado. No se pudo enviar el correo.',
      emailSent,
      usuario: nuevoUsuario
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear el usuario.' });
  }
});

// =========================
// PUT /usuarios/:id (actualizar — sin obligar contraseña)
// =========================
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  let { nombre, usuario, correo, contrasena, rolId, responsableId } = req.body;

  if (!nombre || !usuario || !correo || !rolId || !responsableId) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  // normalizar
  nombre = String(nombre || '').trim();
  usuario = String(usuario || '').trim();
  correo  = String(correo  || '').trim().toLowerCase();
  rolId = parseInt(rolId);
  responsableId = parseInt(responsableId);

  try {
    const anterior = await prisma.usuario.findUnique({ where: { id } });
    if (!anterior) return res.status(404).json({ error: 'Usuario no encontrado.' });

    // duplicados SOLO entre activos distintos del actual
    const existente = await prisma.usuario.findFirst({
      where: {
        estado: true,
        AND: [
          { id: { not: id } },
          {
            OR: [
              { usuario: { equals: usuario, mode: 'insensitive' } },
              { correo:  { equals: correo,  mode: 'insensitive' } },
            ]
          }
        ]
      }
    });
    if (existente) {
      return res.status(409).json({ error: 'El usuario o correo ya existe.' });
    }

    // Actualizar
    const updateData = { nombre, usuario, correo, rolId };
    if (contrasena && contrasena.trim()) {
      updateData.contrasena = await bcrypt.hash(contrasena.trim(), 12);
      updateData.debeCambiarPassword = false;
    }

    const actualizado = await prisma.usuario.update({
      where: { id },
      data: updateData
    });

    // Historial
    const cambios = [];
    if (anterior.nombre !== nombre) cambios.push({ campo: 'nombre', valorAnterior: anterior.nombre, valorNuevo: nombre });
    if (anterior.usuario !== usuario) cambios.push({ campo: 'usuario', valorAnterior: anterior.usuario, valorNuevo: usuario });
    if (anterior.correo !== correo) cambios.push({ campo: 'correo', valorAnterior: anterior.correo, valorNuevo: correo });
    if (contrasena && contrasena.trim()) cambios.push({ campo: 'contrasena', valorAnterior: '****', valorNuevo: '****' });
    if (anterior.rolId !== rolId) {
      const nuevoRol = await prisma.rol.findUnique({ where: { id: rolId } });
      const anteriorRol = await prisma.rol.findUnique({ where: { id: anterior.rolId } });
      cambios.push({ campo: 'rol', valorAnterior: anteriorRol?.nombre, valorNuevo: nuevoRol?.nombre });
    }

    for (const c of cambios) {
      const accion =
        c.campo === 'rol'
          ? `Cambio de rol de ${actualizado.nombre} (${actualizado.usuario}): ${c.valorAnterior} → ${c.valorNuevo}`
          : c.campo === 'contrasena'
          ? `Cambio de contraseña de ${actualizado.nombre} (${actualizado.usuario})`
          : `Cambio en ${c.campo} de ${actualizado.nombre} (${actualizado.usuario}): ${c.valorAnterior || '—'} → ${c.valorNuevo || '—'}`;
      await prisma.historialModificacion.create({
        data: { usuarioId: id, campo: c.campo, valorAnterior: c.valorAnterior, valorNuevo: c.valorNuevo, accion, responsableId }
      });
    }

    const usuarioConRol = await prisma.usuario.findUnique({
      where: { id: actualizado.id },
      select: {
        id: true, nombre: true, usuario: true, correo: true,
        rol: { select: { nombre: true } }
      }
    });

    res.json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioConRol });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el usuario.' });
  }
});

// =========================
// DELETE /usuarios/:id  (borrado lógico)
// =========================
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const responsableId = 1;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado.' });

    await prisma.usuario.update({ where: { id }, data: { estado: false } });

    await prisma.historialModificacion.create({
      data: {
        usuarioId: id,
        campo: 'estado',
        valorAnterior: 'activo',
        valorNuevo: 'eliminado',
        accion: `eliminación de ${usuario.nombre} (${usuario.usuario})`,
        responsableId
      }
    });

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar usuario.' });
  }
});

// =========================
// PUT /usuarios/:id/restaurar  (reactivar)
// =========================
router.put('/:id/restaurar', async (req, res) => {
  const id = parseInt(req.params.id);
  const { responsableId } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado.' });
    if (usuario.estado === true) return res.status(400).json({ error: 'El usuario ya está activo.' });

    const reactivado = await prisma.usuario.update({
      where: { id },
      data: { estado: true }
    });

    await prisma.historialModificacion.create({
      data: {
        usuarioId: id,
        campo: 'estado',
        valorAnterior: 'eliminado',
        valorNuevo: 'activo',
        accion: `restauración de ${reactivado.nombre} (${reactivado.usuario})`,
        responsableId: parseInt(responsableId) || 1
      }
    });

    res.json({ mensaje: 'Usuario restaurado', usuario: reactivado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al restaurar usuario.' });
  }
});

// =========================
// POST /usuarios/:id/reset-password  (regenera temporal y envía correo)
// =========================
router.post('/:id/reset-password', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await prisma.usuario.findUnique({ where: { id }, include: { rol: true } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });

    const temp = genTempPassword();
    const hash = await bcrypt.hash(temp, 12);

    await prisma.usuario.update({
      where: { id },
      data: { contrasena: hash, debeCambiarPassword: true }
    });

    await sendEmail({
      to: user.correo,
      subject: 'Nueva contraseña temporal',
      html: `
        <p>Hola ${user.nombre},</p>
        <p>Se generó una <b>contraseña temporal</b> para tu cuenta:</p>
        <p><code style="font-size:16px">${temp}</code></p>
        <p>Ingresa y cámbiala de inmediato: <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/login">Ingresar</a></p>
      `
    });

    res.json({ ok: true, message: 'Contraseña temporal enviada' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: 'No se pudo reenviar la temporal' });
  }
});

module.exports = router;

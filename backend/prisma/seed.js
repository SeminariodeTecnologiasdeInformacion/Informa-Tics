// prisma/seed.js
const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function hash(p) { return bcrypt.hash(p, 12); }

const PERMISOS = [
  // Administración
  { nombre: 'CONFIGURAR_USUARIOS', descripcion: 'Gestionar usuarios' },
  { nombre: 'CONFIGURAR_PLATILLOS', descripcion: 'Gestionar platillos' },
  { nombre: 'GESTIONAR_CATEGORIAS', descripcion: 'Gestionar categorías' },
  { nombre: 'GESTIONAR_ROLES', descripcion: 'Gestionar roles y permisos' },
  { nombre: 'VER_MENU', descripcion: 'Ver menú' },
  { nombre: 'VER_HISTORIAL', descripcion: 'Ver historial' },

  // Mesero / Órdenes
  { nombre: 'GENERAR_ORDEN', descripcion: 'Crear órdenes' },
  { nombre: 'VER_ORDENES', descripcion: 'Ver historial de órdenes' },

  // 👨‍🍳 Cocina
  { nombre: 'COCINA_VIEW', descripcion: 'Acceso a vista de cocina' },

  // 🍹 Barra
  { nombre: 'BARRA_VIEW', descripcion: 'Acceso a vista de barra' },
];

async function main() {
  // ---- Permisos
  for (const p of PERMISOS) {
    await prisma.permiso.upsert({
      where: { nombre: p.nombre },
      update: { descripcion: p.descripcion },
      create: { nombre: p.nombre, descripcion: p.descripcion },
    });
  }

  // ---- Roles
  const admin = await prisma.rol.upsert({ where: { nombre: 'Administrador' }, update: {}, create: { nombre: 'Administrador' } });
  const mesero = await prisma.rol.upsert({ where: { nombre: 'Mesero' }, update: {}, create: { nombre: 'Mesero' } });
  const cocinero = await prisma.rol.upsert({ where: { nombre: 'Cocinero' }, update: {}, create: { nombre: 'Cocinero' } });
  const bartender = await prisma.rol.upsert({ where: { nombre: 'Bartender' }, update: {}, create: { nombre: 'Bartender' } });

  // ---- Vincular permisos
  const todosPermisos = await prisma.permiso.findMany();
  const mapPerm = Object.fromEntries(todosPermisos.map(p => [p.nombre, p.id]));

  // Admin -> todos
  for (const p of todosPermisos) {
    await prisma.permisoPorRol.upsert({
      where: { permisoId_rolId: { permisoId: p.id, rolId: admin.id } },
      update: {},
      create: { permisoId: p.id, rolId: admin.id },
    });
  }

  // Mesero -> órdenes
  for (const nombre of ['GENERAR_ORDEN', 'VER_ORDENES']) {
    const pid = mapPerm[nombre];
    if (!pid) continue;
    await prisma.permisoPorRol.upsert({
      where: { permisoId_rolId: { permisoId: pid, rolId: mesero.id } },
      update: {},
      create: { permisoId: pid, rolId: mesero.id },
    });
  }

  // Cocinero -> cocina
  for (const nombre of ['COCINA_VIEW']) {
    const pid = mapPerm[nombre];
    if (!pid) continue;
    await prisma.permisoPorRol.upsert({
      where: { permisoId_rolId: { permisoId: pid, rolId: cocinero.id } },
      update: {},
      create: { permisoId: pid, rolId: cocinero.id },
    });
  }

  // Bartender -> barra
  for (const nombre of ['BARRA_VIEW']) {
    const pid = mapPerm[nombre];
    if (!pid) continue;
    await prisma.permisoPorRol.upsert({
      where: { permisoId_rolId: { permisoId: pid, rolId: bartender.id } },
      update: {},
      create: { permisoId: pid, rolId: bartender.id },
    });
  }

  // ---- Usuarios demo (con hash)
  await prisma.usuario.upsert({
    where: { usuario: 'admin' },
    update: { estado: true, rolId: admin.id },
    create: {
      nombre: 'Admin',
      usuario: 'admin',
      correo: 'admin@demo.com',
      contrasena: await hash('admin123'),
      rolId: admin.id,
      estado: true,
      debeCambiarPassword: false,
    },
  });

  await prisma.usuario.upsert({
    where: { usuario: 'mesero1' },
    update: { estado: true, rolId: mesero.id },
    create: {
      nombre: 'Mesero Demo',
      usuario: 'mesero1',
      correo: 'mesero1@demo.com',
      contrasena: await hash('mesero123'),
      rolId: mesero.id,
      estado: true,
      debeCambiarPassword: false,
    },
  });

  await prisma.usuario.upsert({
    where: { usuario: 'cocinero1' },
    update: { estado: true, rolId: cocinero.id },
    create: {
      nombre: 'Cocinero Demo',
      usuario: 'cocinero1',
      correo: 'cocinero1@demo.com',
      contrasena: await hash('cocina123'),
      rolId: cocinero.id,
      estado: true,
      debeCambiarPassword: false,
    },
  });

  await prisma.usuario.upsert({
    where: { usuario: 'bart1' },
    update: { estado: true, rolId: bartender.id },
    create: {
      nombre: 'Bartender Demo',
      usuario: 'bart1',
      correo: 'bart1@demo.com',
      contrasena: await hash('barra123'),
      rolId: bartender.id,
      estado: true,
      debeCambiarPassword: false,
    },
  });

  console.log('✅ Seed con Bartender listo.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});

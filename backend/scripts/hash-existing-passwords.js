// scripts/hash-existing-passwords.js
const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

(async () => {
  try {
    const usuarios = await prisma.usuario.findMany({
      where: { contrasena: { not: null } },
      select: { id: true, contrasena: true }
    });

    let count = 0;
    for (const u of usuarios) {
      const val = String(u.contrasena || '');
      // si ya parece hash de bcrypt, saltamos
      if (val.startsWith('$2a$') || val.startsWith('$2b$') || val.startsWith('$2y$')) continue;

      const hash = await bcrypt.hash(val, 12);
      await prisma.usuario.update({
        where: { id: u.id },
        data: { contrasena: hash }
      });
      count++;
    }
    console.log(`✅ Hasheadas ${count} contraseñas en texto plano.`);
  } catch (e) {
    console.error('Error hasheando contraseñas:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

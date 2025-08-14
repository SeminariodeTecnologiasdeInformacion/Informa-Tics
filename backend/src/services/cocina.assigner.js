// backend/src/services/cocina.assigner.js
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const CAPACIDAD_POR_CHEF = 4;

// Promueve el ítem más antiguo ASIGNADO a PREPARANDO si el chef no tiene ninguno preparando
async function promoteNextForChef(chefId) {
  const enPrep = await prisma.ordenItem.count({
    where: { chefId, estado: "PREPARANDO" }
  });
  if (enPrep > 0) return;

  const siguiente = await prisma.ordenItem.findFirst({
    where: { chefId, estado: "ASIGNADO", tipo: "PLATILLO" },
    orderBy: { asignadoEn: "asc" }
  });
  if (!siguiente) return;

  await prisma.ordenItem.update({
    where: { id: siguiente.id },
    data: { estado: "PREPARANDO", asignadoEn: siguiente.asignadoEn ?? new Date() }
  });
}

// 👉 Nuevo: reasignar un ítem rechazado a OTRO chef (no al que lo rechazó)
async function reassignItemToAnotherChef(itemId, excludeChefId) {
  // Asegúrate que sigue libre y aplica a PLATILLO
  const item = await prisma.ordenItem.findUnique({ where: { id: itemId } });
  if (!item || item.estado !== "PENDIENTE" || item.chefId !== null || item.tipo !== "PLATILLO") {
    return false; // ya lo tomó alguien o no aplica
  }

  // Chefs activos (excluyendo al que rechazó); si no hay, fallback a cocineros habilitados
  let chefIds = (await prisma.cocinaChef.findMany({ where: { activo: true } }))
    .map(c => c.chefId)
    .filter(id => id !== excludeChefId);

  if (!chefIds.length) {
    const cocineros = await prisma.usuario.findMany({
      where: { rol: { nombre: "COCINERO" }, estado: true, NOT: { id: excludeChefId } },
      select: { id: true }
    });
    chefIds = cocineros.map(c => c.id);
  }
  if (!chefIds.length) return false;

  // Ordena por menor carga (ASIGNADO|PREPARANDO)
  const cargas = await Promise.all(
    chefIds.map(async id => ({
      id,
      abiertos: await prisma.ordenItem.count({
        where: { chefId: id, estado: { in: ["ASIGNADO", "PREPARANDO"] } }
      })
    }))
  );
  cargas.sort((a, b) => a.abiertos - b.abiertos);

  const candidato = cargas.find(c => c.abiertos < CAPACIDAD_POR_CHEF);
  if (!candidato) return false;

  await prisma.ordenItem.update({
    where: { id: itemId },
    data: { chefId: candidato.id, estado: "ASIGNADO", asignadoEn: new Date() }
  });

  // Si ese chef no prepara nada, arranca el primero automáticamente
  await promoteNextForChef(candidato.id);
  return true;
}

// Reparte PENDIENTES (PLATILLO) priorizando antiguos y balanceando por carga.
// Luego garantiza 1 en PREPARANDO por chef si tiene cola.
async function rebalanceAssignments() {
  console.log("[REB] start");

  // 1) Chefs activos o fallback a cocineros habilitados
  let chefIds = (await prisma.cocinaChef.findMany({ where: { activo: true } }))
    .map(c => c.chefId);

  if (!chefIds.length) {
    const cocineros = await prisma.usuario.findMany({
      where: { rol: { nombre: "COCINERO" }, estado: true },
      select: { id: true }
    });
    chefIds = cocineros.map(c => c.id);
    console.log("[REB] sin activos, usando cocineros:", chefIds);
  }
  if (!chefIds.length) {
    console.log("[REB] no hay cocineros disponibles");
    return;
  }

  // 2) Pool PENDIENTE sin chef
  const pool = await prisma.ordenItem.findMany({
    where: { estado: "PENDIENTE", chefId: null, tipo: "PLATILLO" },
    orderBy: { creadoEn: "asc" }
  });
  console.log("[REB] pendientes sin chef:", pool.length);

  // 3) Balancea asignación por carga actual (menor primero)
  const cargas = await Promise.all(
    chefIds.map(async id => ({
      id,
      abiertos: await prisma.ordenItem.count({
        where: { chefId: id, estado: { in: ["ASIGNADO", "PREPARANDO"] } }
      })
    }))
  );
  cargas.sort((a, b) => a.abiertos - b.abiertos);

  for (const chef of cargas) {
    const capacidad = Math.max(0, CAPACIDAD_POR_CHEF - chef.abiertos);
    console.log(`[REB] chef ${chef.id} abiertos=${chef.abiertos} cap=${capacidad}`);
    if (capacidad <= 0) continue;

    const aAsignar = pool.splice(0, capacidad);
    for (const item of aAsignar) {
      await prisma.ordenItem.update({
        where: { id: item.id },
        data: { chefId: chef.id, estado: "ASIGNADO", asignadoEn: new Date() }
      });
      console.log("[REB] asignado item", item.id, "-> chef", chef.id);
    }
  }

  // 4) Auto-promoción para cada chef
  for (const chef of cargas) {
    await promoteNextForChef(chef.id);
  }

  console.log("[REB] end");
}

module.exports = { rebalanceAssignments, promoteNextForChef, reassignItemToAnotherChef };

// backend/src/index.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// ===== Middlewares =====
app.use(cors());
app.use(express.json());

// ===== Rutas =====
const loginRoutes          = require("./routes/login.routes");
const usuarioRoutes        = require("./routes/usuarios.routes");
const rolesRoutes          = require("./routes/rol.routes");
const historialRoutes      = require("./routes/historial.routes");
const platillosRoutes      = require("./routes/platillos.routes");
const categoriaRoutes      = require("./routes/categoria.routes");
const permisosRoutes       = require("./routes/permisos.routes");
const ordenesMeseroRoutes  = require("./routes/ordenes.mesero.routes");
const ordenesBarraRoutes   = require("./routes/ordenes.barra.routes");
// Router de cocina (SIN prefijo interno)
const ordenesCocinaRoutes  = require("./routes/ordenes.cocina.routes");

// ⬇️ NEW: ruta para cambio de contraseña (POST /auth/change-password)
const changePwdRoutes      = require("./routes/auth.change.routes");

// Prefijos “oficiales”
app.use("/login", loginRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/roles", rolesRoutes);
app.use("/historial", historialRoutes);
app.use("/platillos", platillosRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/permisos", permisosRoutes);

app.use("/ordenes", ordenesMeseroRoutes);

// Cocina: nuevo prefijo y alias para compatibilidad
app.use("/cocina", ordenesCocinaRoutes);         // para el front actualizado
app.use("/ordenes/cocina", ordenesCocinaRoutes); // alias para llamadas antiguas

// Bartender
app.use("/barra", ordenesBarraRoutes);           // front nuevo
app.use("/ordenes/barra", ordenesBarraRoutes);   // alias si algo antiguo apunta aquí


// ⬇️ NEW: monta sin prefijo porque adentro ya define /auth/change-password
app.use(changePwdRoutes);

// ===== Healthcheck =====
app.get("/", (_req, res) => res.send("Backend corriendo 🚀"));

// ===== 404 =====
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// ===== Error handler =====
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
});
const { sendEmail } = require('./services/email');

// ...después de tus app.use(...)
app.get('/test-mail', async (_req, res) => {
  try {
    await sendEmail({
      to: process.env.SMTP_USER, // o el correo al que quieras que llegue
      subject: 'Prueba SMTP Gmail',
      html: '<h3>Hola 👋</h3><p>Correo de prueba desde el backend.</p>',
    });
    res.send('OK: correo enviado');
  } catch (e) {
    console.error('❌ Error test-mail:', e);
    res.status(500).send(e.message);
  }
});

app.get('/test-mail', async (_req, res) => {
  try {
    await sendEmail({
      to: process.env.SMTP_USER, // o cualquier destino de prueba
      subject: 'Prueba SMTP Gmail',
      html: '<h3>Hola 👋</h3><p>Esto es un test desde el backend.</p>',
    });
    res.send('OK: correo enviado');
  } catch (e) {
    console.error('❌ Error test-mail:', e);
    res.status(500).send(e.message);
  }
});


// ===== Start =====
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});

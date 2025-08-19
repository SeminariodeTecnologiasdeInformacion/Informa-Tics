// src/services/email.js (CommonJS)
const nodemailer = require('nodemailer');

const port = Number(process.env.SMTP_PORT || 465); // 465 = SSL, 587 = STARTTLS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port,
  secure: port === 465, // true para 465 (SSL), false para 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER, // ej. mirestaurantegt502@gmail.com
    pass: process.env.SMTP_PASS, // App Password de 16 caracteres
  },
});

async function sendEmail({ to, subject, html, replyTo }) {
  const from = `"Restaurante" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;
  const info = await transporter.sendMail({ from, to, subject, html, replyTo });
  console.log(`📧 Gmail OK: ${info.messageId} -> ${to}`);
  return info;
}

module.exports = { sendEmail };

// src/utils/passwords.js
const crypto = require('crypto');

// genera algo tipo "a1f9-Xk7B"
function genTempPassword() {
  const p1 = crypto.randomBytes(2).toString('hex');
  const p2 = crypto.randomBytes(3).toString('base64url').slice(0, 4);
  return `${p1}-${p2}`;
}

module.exports = { genTempPassword };

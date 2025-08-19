import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/* === Helpers de normalización === */
function normalizePermKeys(list) {
  if (!Array.isArray(list)) return [];
  const toKey = (p) => {
    if (typeof p === 'string') return p;
    return p?.clave || p?.nombre || p?.key || '';
  };
  return list
    .map(toKey)
    .filter(Boolean)
    .map((s) => String(s).trim().toUpperCase().replace(/\s+/g, '_'));
}

function normalizeUserForStorage(u) {
  if (!u || typeof u !== 'object') return null;
  const srcPerms = Array.isArray(u?.permisos) && u.permisos.length
    ? u.permisos
    : (Array.isArray(u?.rol?.permisos) ? u.rol.permisos : []);
  const perms = normalizePermKeys(srcPerms);
  return { ...u, permisos: perms };
}

/* ======================= Componente ======================= */
function Login() {
  const [credenciales, setCredenciales] = useState({ usuario: '', contrasena: '' });
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      const res = await axios.post('http://localhost:3001/login', credenciales);

      const usuarioSrv = res?.data?.usuario;
      if (!usuarioSrv) throw new Error('Respuesta inválida del servidor (sin usuario).');

      // Guarda usuario normalizado (incluye debeCambiarPassword si viene)
      const usuarioOK = normalizeUserForStorage(usuarioSrv);
      if (!usuarioOK) throw new Error('No fue posible normalizar los datos de usuario.');
      localStorage.setItem('usuario', JSON.stringify(usuarioOK));

      // ⬇️ Cambio clave: si debe cambiar la contraseña, redirige a /cambiar-password
      const mustChange = Boolean(res?.data?.mustChange ?? usuarioSrv?.debeCambiarPassword);
      if (mustChange) {
        navigate('/cambiar-password', { replace: true });
        return;
      }

      // Si no, al panel
      navigate('/panel', { replace: true });
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.error || err?.message || 'Error al iniciar sesión';
      setError(msg);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #006666, #009999)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2.5rem',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '400px',
        animation: 'fadeIn 0.4s ease-in-out'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#006666' }}>🔐</div>
          <h2 style={{ margin: 0, color: '#333' }}>Iniciar Sesión</h2>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="usuario"
            placeholder="Usuario o correo"
            value={credenciales.usuario}
            onChange={handleChange}
            required
            style={inputStyle}
            autoComplete="username"
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={credenciales.contrasena}
            onChange={handleChange}
            required
            style={inputStyle}
            autoComplete="current-password"
          />

          <button type="submit" style={buttonStyle} disabled={cargando}>
            {cargando ? 'Ingresando…' : 'Ingresar'}
          </button>

          {error && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '.25rem' }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s',
  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
};

const buttonStyle = {
  padding: '0.75rem',
  backgroundColor: '#006666',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.1s ease',
};

export default Login;

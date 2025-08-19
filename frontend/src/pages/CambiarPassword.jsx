// src/pages/CambiarPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:3001';

export default function CambiarPassword() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  const [actual, setActual] = useState('');
  const [nueva, setNueva] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  if (!usuario) {
    navigate('/login', { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ type: '', text: '' });

    if (nueva.length < 8) {
      setMsg({ type: 'error', text: 'La nueva contraseña debe tener al menos 8 caracteres.' });
      return;
    }
    if (nueva !== confirm) {
      setMsg({ type: 'error', text: 'Las contraseñas no coinciden.' });
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/auth/change-password`, {
        userId: usuario.id,
        actual,
        nueva,
      });

      if (!data?.ok) throw new Error(data?.error || 'No se pudo cambiar la contraseña');

      // Actualiza el flag en localStorage
      const actualizado = { ...usuario, debeCambiarPassword: false };
      localStorage.setItem('usuario', JSON.stringify(actualizado));

      setMsg({ type: 'ok', text: 'Contraseña actualizada. Redirigiendo…' });
      setTimeout(() => navigate('/panel', { replace: true }), 800);
    } catch (err) {
      const text = err?.response?.data?.error || err.message || 'Error al cambiar la contraseña';
      setMsg({ type: 'error', text });
    } finally {
      setLoading(false);
    }
  };

  const box = {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#f3f6f7', fontFamily: 'Segoe UI, sans-serif',
  };

  return (
    <div style={box}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,.08)', width: 420 }}>
        <h2 style={{ marginTop: 0, marginBottom: 12 }}>Cambiar contraseña</h2>
        <p style={{ marginTop: 0, color: '#64748b' }}>
          Usuario: <b>{usuario.usuario}</b> — {usuario.correo}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <input
            type="password"
            placeholder="Contraseña actual"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
            required
            style={input}
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="Nueva contraseña (mín. 8)"
            value={nueva}
            onChange={(e) => setNueva(e.target.value)}
            required
            style={input}
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Confirmar nueva contraseña"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            style={input}
            autoComplete="new-password"
          />

          <button type="submit" style={btn} disabled={loading}>
            {loading ? 'Guardando…' : 'Guardar'}
          </button>
          <button
            type="button"
            style={btnSecondary}
            onClick={() => navigate('/panel')}
            disabled={loading}
          >
            Cancelar
          </button>

          {msg.text && (
            <div style={{
              background: msg.type === 'ok' ? '#e7f8ef' : '#fde7e9',
              color: msg.type === 'ok' ? '#0f8a51' : '#b4232e',
              border: `1px solid ${msg.type === 'ok' ? '#a6e3c3' : '#f2b8be'}`,
              padding: '10px 12px', borderRadius: 8
            }}>
              {msg.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

const input = {
  padding: '0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none',
  background: '#f9fafb', fontSize: 15,
};
const btn = {
  padding: '0.75rem', borderRadius: 10, border: 'none', background: '#0f766e',
  color: '#fff', fontWeight: 700, cursor: 'pointer'
};
const btnSecondary = {
  padding: '0.75rem', borderRadius: 10, border: '1px solid #d1d5db',
  background: '#fff', color: '#111827', fontWeight: 600, cursor: 'pointer'
};

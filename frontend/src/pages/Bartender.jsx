// src/pages/Bartender.jsx
import React, { useEffect, useMemo, useState, useRef } from 'react';
import axios from 'axios';
import PageTopBar from '../components/PageTopBar';
import ToastMessage from '../components/ToastMessage';

const API = 'http://localhost:3001';
const REFRESH_MS = 5000;

export default function Bartender() {
  const usuario = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const usuarioId = usuario?.id;

  const [pendientes, setPendientes] = useState([]);
  const [mios, setMios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [enviandoId, setEnviandoId] = useState(null);

  // confirmación para rechazar
  const [confirm, setConfirm] = useState({ open: false, id: null, nombre: '' });

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const showToast = (m, t = 'success') => {
    setToast({ show: true, message: m, type: t });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 2800);
  };

  const timerRef = useRef(null);

  const cargar = async (background = false) => {
    if (!usuarioId) return;
    try {
      if (!background) setCargando(true);
      const [pRes, mRes] = await Promise.all([
        axios.get(`${API}/barra/pendientes`),
        axios.get(`${API}/barra/mis`, { params: { usuarioId } }),
      ]);
      setPendientes(Array.isArray(pRes.data) ? pRes.data : []);
      setMios(Array.isArray(mRes.data) ? mRes.data : []);
    } catch (e) {
      showToast('No se pudo cargar la barra', 'danger');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    if (!usuarioId) return;
    cargar(false);

    // polling
    timerRef.current = setInterval(() => cargar(true), REFRESH_MS);

    // refrescar al volver a la pestaña
    const onVis = () => {
      if (document.visibilityState === 'visible') cargar(true);
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      clearInterval(timerRef.current);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [usuarioId]);

  const act = async (path, id, okMsg) => {
    try {
      setEnviandoId(id);
      await axios.post(`${API}/barra/items/${id}/${path}`, { usuarioId });
      await cargar(true);
      showToast(okMsg);
    } catch (e) {
      showToast(e?.response?.data?.error || 'Operación no permitida', 'danger');
    } finally {
      setEnviandoId(null);
    }
  };

  const abrirConfirmRechazo = (item) => setConfirm({ open: true, id: item.id, nombre: item.nombre });
  const cerrarConfirm = () => setConfirm({ open: false, id: null, nombre: '' });
  const confirmarRechazo = async () => {
    if (!confirm.id) return;
    await act('rechazar', confirm.id, 'Liberado');
    cerrarConfirm();
  };

  /* ===== estilos ===== */
  const page = { minHeight: '100vh', background: '#fff', fontFamily: 'Segoe UI, sans-serif' };
  const wrap = { padding: '0 1rem 1rem', display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' };
  const card = { background: '#fff', borderRadius: 14, padding: 16, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,.04)' };
  const empty = { background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: 12, padding: '14px', color: '#64748b' };
  const row = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eef2f7' };
  const tag = (estado) => {
    const s = String(estado || '').toUpperCase();
    const base = { padding: '4px 10px', borderRadius: 999, fontWeight: 800, fontSize: 12, color: '#fff' };
    if (s === 'ASIGNADO') return { ...base, background: '#d97706' };
    if (s === 'PREPARANDO') return { ...base, background: '#0ea5e9' };
    if (s === 'LISTO') return { ...base, background: '#16a34a' };
    return { ...base, background: '#6b7280' };
  };
  const btn = (bg, color = '#fff') => ({
    background: bg,
    color,
    border: 'none',
    padding: '8px 12px',
    borderRadius: 8,
    fontWeight: 800,
    cursor: 'pointer',
  });
  const btnGhost = { ...btn('#e5e7eb', '#111827') };
  const btnPrimary = btn('#0f766e');
  const btnWarn = btn('#f59e0b');
  const btnDanger = btn('#dc2626');
  const btnSuccess = btn('#16a34a');

  return (
    <div style={page}>
      <PageTopBar title="Barra" backTo="/panel" />

      <div style={wrap}>
        {/* En cola */}
        <section style={card}>
          <h2 style={{ margin: 0, marginBottom: 12 }}>En cola</h2>
          {cargando ? (
            <div style={empty}>Cargando…</div>
          ) : pendientes.length === 0 ? (
            <div style={empty}>No hay bebidas en espera.</div>
          ) : (
            pendientes.map((it) => (
              <div key={it.id} style={row}>
                <div>
                  <div style={{ fontWeight: 800 }}>{it.nombre}</div>
                  <div style={{ color: '#334155' }}>Orden <b>{it?.orden?.codigo}</b> • Mesa <b>{it?.orden?.mesa}</b></div>
                  {it.nota && <div style={{ color: '#92400e' }}>Nota: {it.nota}</div>}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    style={btnPrimary}
                    disabled={enviandoId === it.id}
                    onClick={() => act('aceptar', it.id, 'Asignado')}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Mis bebidas */}
        <section style={card}>
          <h2 style={{ margin: 0, marginBottom: 12 }}>Mis bebidas</h2>
          {cargando ? (
            <div style={empty}>Cargando…</div>
          ) : mios.length === 0 ? (
            <div style={empty}>No tienes bebidas asignadas.</div>
          ) : (
            mios.map((it) => (
              <div key={it.id} style={row}>
                <div>
                  <div style={{ fontWeight: 800 }}>{it.nombre}</div>
                  <div style={{ color: '#334155' }}>Orden <b>{it?.orden?.codigo}</b> • Mesa <b>{it?.orden?.mesa}</b></div>
                  <div style={{ marginTop: 6, display: 'inline-block' }}>
                    <span style={tag(it.estado)}>{String(it.estado || '').toUpperCase()}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {String(it.estado || '').toUpperCase() === 'ASIGNADO' && (
                    <button
                      style={btnWarn}
                      disabled={enviandoId === it.id}
                      onClick={() => act('preparando', it.id, 'Preparando…')}
                    >
                      Preparando
                    </button>
                  )}
                  <button
                    style={btnDanger}
                    disabled={enviandoId === it.id}
                    onClick={() => abrirConfirmRechazo(it)}
                  >
                    Rechazar
                  </button>
                  <button
                    style={btnSuccess}
                    disabled={enviandoId === it.id}
                    onClick={() => act('listo', it.id, 'Listo ✅')}
                  >
                    Listo
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>

      {/* Toast */}
      <ToastMessage
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      {/* Modal confirmación */}
      {confirm.open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999
        }}>
          <div style={{
            background: '#fff', width: 520, maxWidth: '92vw', padding: 20,
            borderRadius: 12, boxShadow: '0 12px 32px rgba(0,0,0,.2)', fontFamily: 'Segoe UI, sans-serif'
          }}>
            <h3 style={{ marginTop: 0 }}>Rechazar bebida</h3>
            <p>¿Rechazar <b>{confirm.nombre}</b> y liberarla de tu lista?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={cerrarConfirm} style={btnGhost}>Cancelar</button>
              <button onClick={confirmarRechazo} style={btnDanger}>Rechazar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

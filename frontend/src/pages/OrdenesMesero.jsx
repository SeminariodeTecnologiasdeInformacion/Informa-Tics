// frontend/src/pages/OrdenesMesero.jsx
import React, { useEffect, useState, useMemo, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageTopBar from '../components/PageTopBar';
import ToastMessage from '../components/ToastMessage';

const API = 'http://localhost:3001';

export default function OrdenesMesero() {
  const [ordenes, setOrdenes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [confirm, setConfirm] = useState({ open: false, id: null, codigo: '' });
  const [finishingId, setFinishingId] = useState(null);

  const navigate = useNavigate();
  const usuario = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const intervalRef = useRef(null);
  const firstLoadRef = useRef(true);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((p) => ({ ...p, show: false })), 2800);
  };

  // ===== firma profunda para detectar cambios de estados =====
  const orderSig = (o) => {
    const items = (o.items || [])
      .map((it) => ({ id: it.id, tipo: String(it.tipo || ''), estado: String(it.estado || '') }))
      .sort((a, b) => a.id - b.id);
    return JSON.stringify({
      id: o.id,
      mesa: o.mesa,
      fin: !!o.finishedAt,
      items,
    });
  };
  const listSig = (arr) => (arr || []).map(orderSig).sort().join('|');

  useEffect(() => {
    cargar({ background: false });

    // polling más rápido
    intervalRef.current = setInterval(() => cargar({ background: true }), 5000);

    // refrescar cuando la pestaña vuelve a foco
    const onFocus = () => cargar({ background: true });
    window.addEventListener('visibilitychange', onFocus);
    window.addEventListener('focus', onFocus);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('visibilitychange', onFocus);
      window.removeEventListener('focus', onFocus);
    };
  }, [navigate]);

  async function cargar({ background = false } = {}) {
    try {
      if (!background && firstLoadRef.current) setCargando(true);
      const { data } = await axios.get(`${API}/ordenes`);
      const next = Array.isArray(data) ? data : [];

      // ⬇️ compara profundo: si cambia un estado/tipo/id de ítem, actualiza
      setOrdenes((prev) => (listSig(prev) === listSig(next) ? prev : next));

      setError('');
    } catch (e) {
      console.error(e);
      setError('No se pudo cargar órdenes');
    } finally {
      if (firstLoadRef.current) {
        firstLoadRef.current = false;
        setCargando(false);
      }
    }
  }

  const norm = (s) => String(s || '').trim().toUpperCase();

  const ordenBloqueada = (orden) =>
    (Array.isArray(orden?.items) ? orden.items : []).some((it) =>
      ['PREPARANDO', 'EN_PREPARACION', 'LISTO'].includes(norm(it.estado))
    );

  const abrirConfirm = (orden) => {
    if (ordenBloqueada(orden)) {
      showToast('No se puede cancelar: la orden ya fue tomada por cocina.', 'danger');
      return;
    }
    setConfirm({ open: true, id: orden.id, codigo: orden.codigo || `#${orden.id}` });
  };
  const cerrarConfirm = () => setConfirm({ open: false, id: null, codigo: '' });

  const cancelarOrden = async () => {
    if (!confirm.id) return;
    try {
      // Optimista: quitarla de la lista ya
      setOrdenes((prev) => prev.filter((o) => o.id !== confirm.id));
      await axios.delete(`${API}/ordenes/${confirm.id}`);
      cargar({ background: true });
      showToast('Orden cancelada correctamente', 'success');
    } catch (error) {
      console.error('Error al cancelar orden:', error);
      showToast('Error al cancelar la orden', 'danger');
      cargar({ background: true });
    } finally {
      cerrarConfirm();
    }
  };

  const editarOrden = (orden) => {
    if (ordenBloqueada(orden)) {
      showToast('No se puede editar: la orden ya fue tomada por cocina.', 'danger');
      return;
    }
    localStorage.setItem(
      'ordenEnEdicion',
      JSON.stringify({
        id: orden.id,
        codigo: orden.codigo,
        mesa: orden.mesa,
        items: (orden.items || []).map((it) => ({
          id: it.platilloId || it.id,
          nombre: it.nombre,
          precio: it.precio,
          nota: it.nota,
          tipo: it.tipo || 'PLATILLO',
          existente: true,
          estado: it.estado || 'PENDIENTE',
        })),
      })
    );
    navigate('/mesero');
  };

  // ---- Finalizar ----
  // Permite finalizar:
  //  - si hay platillos y TODOS están LISTO (regla original)
  //  - si NO hay platillos, pero sí bebidas y TODAS están LISTO (órdenes solo de bebidas)
  const puedeFinalizar = (orden) => {
    if (orden.finishedAt) return false;
    const items = Array.isArray(orden.items) ? orden.items : [];

    const platillos = items.filter((it) => norm(it.tipo) === 'PLATILLO');
    const bebidas   = items.filter((it) => norm(it.tipo) === 'BEBIDA');

    if (platillos.length > 0) {
      return platillos.every((it) => norm(it.estado) === 'LISTO');
    }
    return bebidas.length > 0 && bebidas.every((it) => norm(it.estado) === 'LISTO');
  };

  const finalizarOrden = async (orden) => {
    try {
      setFinishingId(orden.id);
      await axios.patch(`${API}/ordenes/${orden.id}/finalizar`);
      // Optimista: quitar de la lista
      setOrdenes((prev) => prev.filter((o) => o.id !== orden.id));
      cargar({ background: true });
      showToast(`Orden ${orden.codigo} finalizada`, 'success');
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.error || 'Error al finalizar la orden';
      showToast(msg, 'danger');
      cargar({ background: true });
    } finally {
      setFinishingId(null);
    }
  };

  // ===== estilos =====
  const chipStyle = (estado) => {
    const base = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6px 10px',
      borderRadius: 999,
      fontSize: '.85rem',
      color: '#fff',
      fontWeight: 700,
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      textAlign: 'center',
      width: '8rem',
      boxSizing: 'border-box',
    };
    const s = norm(estado || 'PENDIENTE');
    if (s === 'PENDIENTE') return { ...base, background: '#a68b00' };
    if (s === 'ASIGNADO') return { ...base, background: '#0d9488' };
    if (s === 'PREPARANDO' || s === 'EN_PREPARACION') return { ...base, background: '#006666' };
    return { ...base, background: '#2e7d32' }; // LISTO
  };

  const RowGrid = ({ left, right, isHeader = false }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 14rem',
        columnGap: 16,
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: isHeader ? 700 : 400 }}>{left}</div>
      <div>{right}</div>
    </div>
  );

  const tdActions = {
    padding: '0.9rem',
    borderBottom: '1px solid #ddd',
    verticalAlign: 'middle',
  };

  const actionsWrap = {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', // ✅ permite que los botones salten de línea
    maxWidth: '100%', // por si acaso
  };

  const accionBtn = {
    padding: '.5rem 1rem',
    border: 'none',
    borderRadius: 6,
    background: '#004d4d',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 700,
    flex: '1 1 auto', // ✅ se ajustan
    minWidth: '90px', // ancho mínimo
    textAlign: 'center',
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: 'Segoe UI, sans-serif' }}>
      <PageTopBar title="Órdenes enviadas" backTo="/panel" />

      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', boxSizing: 'border-box' }}>
        <h2>📄 Órdenes enviadas</h2>

        {cargando ? (
          <p>Cargando…</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ background: '#006666', color: '#fff' }}>
                <th style={{ ...th, width: '12rem' }}>Código</th>
                <th style={{ ...th, width: '6rem' }}>Mesa</th>
                <th style={{ ...th, width: '14rem' }}>Mesero</th>
                <th style={th}>Detalle (platillos y bebidas)</th>
                <th style={{ ...th, width: '14rem' }}>Estado(s)</th>
                <th style={{ ...th, width: '18rem' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ordenes.map((orden, i) => {
                const items = Array.isArray(orden.items) ? orden.items : [];
                // ✅ filtrado robusto usando norm()
                const platillos = items.filter((it) => norm(it.tipo) !== 'BEBIDA');
                const bebidas   = items.filter((it) => norm(it.tipo) === 'BEBIDA');

                const rows = [];
                if (platillos.length) {
                  rows.push({ type: 'header', label: '🍽️ Platillos' });
                  platillos.forEach((it, idx) =>
                    rows.push({ type: 'item', key: `p-${idx}-${it.id || idx}`, item: it })
                  );
                }
                if (bebidas.length) {
                  rows.push({ type: 'header', label: '🥤 Bebidas' });
                  bebidas.forEach((it, idx) =>
                    rows.push({ type: 'item', key: `b-${idx}-${it.id || idx}`, item: it })
                  );
                }

                return (
                  <tr key={orden.id} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                    <td style={td}>{orden.codigo || `#${orden.id}`}</td>
                    <td style={td}>{orden.mesa}</td>
                    <td style={td}>{orden.mesero?.nombre || usuario?.nombre}</td>

                    {/* Detalle + Estado */}
                    <td style={td} colSpan={2}>
                      <div style={{ display: 'grid', rowGap: 8 }}>
                        {rows.map((r, idx) =>
                          r.type === 'header' ? (
                            <RowGrid key={`h-${idx}`} isHeader left={<span>{r.label}</span>} right={null} />
                          ) : (
                            <RowGrid
                              key={r.key || `i-${idx}`}
                              left={
                                <div style={{ display: 'flex', gap: 6, whiteSpace: 'normal', wordBreak: 'break-word' }}>
                                  <span>•</span>
                                  <span>
                                    <strong>{r.item.nombre}</strong> – Q{Number(r.item.precio).toFixed(2)}
                                    {r.item.nota ? <em> ({r.item.nota})</em> : null}
                                  </span>
                                </div>
                              }
                              right={<span style={chipStyle(r.item.estado)}>{norm(r.item.estado || 'PENDIENTE')}</span>}
                            />
                          )
                        )}
                      </div>
                    </td>

                    {/* Acciones */}
                    <td style={tdActions}>
                      <div style={actionsWrap}>
                        <button onClick={() => editarOrden(orden)} style={accionBtn}>Editar</button>
                        <button onClick={() => abrirConfirm(orden)} style={{ ...accionBtn, background: '#e60000' }}>Cancelar</button>
                        {puedeFinalizar(orden) && (
                          <button
                            onClick={() => finalizarOrden(orden)}
                            style={{ ...accionBtn, background: '#2563eb', minWidth: 110 }}
                            disabled={finishingId === orden.id}
                            title="Terminar orden (items listos)"
                          >
                            {finishingId === orden.id ? 'Terminando…' : 'Terminar'}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <ToastMessage
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast((p) => ({ ...p, show: false }))}
      />

      {confirm.open && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h3 style={{ marginTop: 0, marginBottom: 10 }}>Cancelar orden</h3>
            <p style={{ marginTop: 0 }}>
              ¿Deseas cancelar la orden <b>{confirm.codigo}</b>? Esta acción no se puede deshacer.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button onClick={cerrarConfirm} style={btnGhost}>Cerrar</button>
              <button onClick={cancelarOrden} style={btnDanger}>Cancelar orden</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const th = { padding: '0.9rem', textAlign: 'left', borderBottom: '2px solid #ccc' };
const td = { padding: '0.9rem', borderBottom: '1px solid #ddd', verticalAlign: 'top' };

const modalOverlay = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
};
const modalBox = {
  background: '#fff',
  width: 520,
  maxWidth: '92vw',
  padding: 20,
  borderRadius: 12,
  boxShadow: '0 12px 32px rgba(0,0,0,.2)',
  fontFamily: 'Segoe UI, sans-serif',
};
const btnGhost = {
  padding: '.55rem 1rem',
  background: '#e5e7eb',
  color: '#111827',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  cursor: 'pointer',
};
const btnDanger = {
  padding: '.55rem 1rem',
  background: '#dc2626',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  cursor: 'pointer',
};

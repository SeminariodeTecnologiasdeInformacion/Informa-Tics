// frontend/src/pages/VistaMesero.jsx
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageTopBar from '../components/PageTopBar';
import ToastMessage from '../components/ToastMessage';

const API = 'http://localhost:3001';
const FALLBACK_IMG = '/no-image.png';

function makeUid() {
  return `${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

export default function VistaMesero() {
  const [categorias, setCategorias] = useState([]);
  const [platillos, setPlatillos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // EXISTENTES (de la orden en edición) + marcados para borrar
  const [existentes, setExistentes] = useState([]);           // [{id, nombre, precio, nota, tipo, estado, chefId}]
  const [deleteIds, setDeleteIds] = useState(new Set());      // ids marcados para eliminar

  // Cambios de nota en EXISTENTES (sin guardar aún)
  const [updatesNota, setUpdatesNota] = useState(new Map());  // id -> nota (string|null)
  const [editNotaModal, setEditNotaModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null);         // { id, nombre }
  const [notaExistenteTemporal, setNotaExistenteTemporal] = useState('');

  // NUEVOS a agregar
  const [carrito, setCarrito] = useState([]);
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [platilloActual, setPlatilloActual] = useState(null);
  const [notaTemporal, setNotaTemporal] = useState('');

  const [mostrarMesaModal, setMostrarMesaModal] = useState(false);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const [ordenEditId, setOrdenEditId] = useState(null);
  const [ordenEditCodigo, setOrdenEditCodigo] = useState(null);

  const navigate = useNavigate();
  const usuario = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);

  // Toast
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3000);
  };

  useEffect(() => {
    obtenerCategoriasVisibles();
    obtenerPlatillosFiltrados();

    // Si vengo a editar
    const raw = localStorage.getItem('ordenEnEdicion');
    if (raw) {
      try {
        const ord = JSON.parse(raw);
        setOrdenEditId(ord.id);
        setOrdenEditCodigo(ord.codigo || `#${ord.id}`);
        setMesaSeleccionada(ord.mesa || null);
        cargarOrdenExistente(ord.id);
      } catch {}
    }
  }, []);

  const cargarOrdenExistente = async (id) => {
    try {
      const { data } = await axios.get(`${API}/ordenes/${id}`);
      const items = (data?.items || []).map(it => ({
        id: it.id,
        nombre: it.nombre,
        precio: it.precio,
        nota: it.nota || '',
        tipo: it.tipo === 'BEBIDA' ? 'BEBIDA' : 'PLATILLO',
        estado: it.estado,
        chefId: it.chefId || null,
      }));
      setExistentes(items);
      setDeleteIds(new Set());
      setUpdatesNota(new Map());
      setCarrito([]);
    } catch (e) {
      console.error('cargarOrdenExistente', e);
      showToast('No se pudieron cargar los ítems de la orden', 'danger');
    }
  };

  const obtenerCategoriasVisibles = async () => {
    try {
      const res = await axios.get(`${API}/categorias/visibles`);
      const cats = res.data || [];
      setCategorias(cats);
      if (cats.length) setCategoriaSeleccionada(cats[0].id);
    } catch (error) {
      console.error('categorias visibles', error);
      showToast('Error al cargar categorías', 'danger');
    }
  };

  const obtenerPlatillosFiltrados = async () => {
    try {
      const res = await axios.get(`${API}/platillos?soloDisponibles=1&soloActivas=1`);
      setPlatillos(res.data || []);
    } catch (error) {
      console.error('platillos filtrados', error);
      showToast('Error al cargar platillos', 'danger');
    }
  };

  // ===== Agregar rápido o con nota (NUEVOS) =====
  const agregarDirecto = (p, tipo = 'PLATILLO') => {
    setCarrito((prev) => {
      const idx = prev.findIndex(
        (it) => it.id === p.id && (it.nota || '') === '' && it.tipo === tipo
      );
      if (idx >= 0) {
        const copia = [...prev];
        copia[idx] = { ...copia[idx], cantidad: (copia[idx].cantidad || 1) + 1 };
        return copia;
      }
      return [
        ...prev,
        {
          uid: makeUid(),
          id: p.id,
          nombre: p.nombre,
          precio: p.precio,
          nota: '',
          cantidad: 1,
          tipo,
        },
      ];
    });
  };

  const agregarConNota = (p, tipo = 'PLATILLO') => {
    setPlatilloActual({ ...p, tipo });
    setNotaTemporal('');
    setMostrarNotas(true);
  };

  const confirmarNota = () => {
    if (!platilloActual) return;
    const notaLimpia = (notaTemporal || '').trim();
    setCarrito((prev) => [
      ...prev,
      {
        uid: makeUid(),
        id: platilloActual.id,
        nombre: platilloActual.nombre,
        precio: platilloActual.precio,
        nota: notaLimpia,
        cantidad: 1,
        tipo: platilloActual.tipo || 'PLATILLO',
      },
    ]);
    setMostrarNotas(false);
    setPlatilloActual(null);
    setNotaTemporal('');
  };

  // ===== Handlers por UID (solo NUEVOS) =====
  const eliminarPorUid = (uid) => setCarrito((prev) => prev.filter((x) => x.uid !== uid));
  const incPorUid = (uid) =>
    setCarrito((prev) =>
      prev.map((x) => (x.uid === uid ? { ...x, cantidad: (x.cantidad || 1) + 1 } : x))
    );
  const decPorUid = (uid) =>
    setCarrito((prev) =>
      prev.map((x) =>
        x.uid === uid ? { ...x, cantidad: Math.max(1, (x.cantidad || 1) - 1) } : x
      )
    );
  const moverATipo = (uid, nuevoTipo) =>
    setCarrito((prev) => prev.map((x) => (x.uid === uid ? { ...x, tipo: nuevoTipo } : x)));

  // ===== Marcar/Desmarcar para eliminar (existentes) =====
  const toggleEliminarExistente = (id) => {
    setDeleteIds((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  // ===== Editar nota en EXISTENTES =====
  const puedeEditarNota = (it) => {
    if (it.tipo === 'PLATILLO') {
      return it.estado === 'PENDIENTE' && !it.chefId;
    }
    // BEBIDA
    return it.estado !== 'LISTO';
  };

  const abrirEditarNota = (it) => {
    setEditTarget({ id: it.id, nombre: it.nombre });
    setNotaExistenteTemporal(it.nota || '');
    setEditNotaModal(true);
  };

  const confirmarEditarNota = () => {
    if (!editTarget) return;
    const cleaned = (notaExistenteTemporal || '').trim();
    setUpdatesNota((prev) => {
      const m = new Map(prev);
      m.set(editTarget.id, cleaned === '' ? null : cleaned);
      return m;
    });
    // Reflejar en UI local
    setExistentes((prev) =>
      prev.map((x) => (x.id === editTarget.id ? { ...x, nota: cleaned } : x))
    );
    setEditNotaModal(false);
    setEditTarget(null);
    setNotaExistenteTemporal('');
  };

  // ===== Drag & Drop =====
  const onDragStart = (p, tipoDefault = 'PLATILLO') => (e) => {
    e.dataTransfer.setData('app/pizza', JSON.stringify({ ...p, tipo: tipoDefault }));
  };
  const allowDrop = (e) => e.preventDefault();
  const onDropEn = (tipo) => (e) => {
    e.preventDefault();
    try {
      const p = JSON.parse(e.dataTransfer.getData('app/pizza'));
      if (!p) return;
      agregarDirecto(p, tipo);
    } catch {}
  };

  // ===== Totales =====
  const total = useMemo(
    () =>
      [...existentes, ...carrito].reduce((s, it) => s + it.precio * (it.cantidad || 1), 0),
    [existentes, carrito]
  );

  // ===== Guardar / Enviar =====
  const guardarCambios = async () => {
    // Altas
    const addPlano = carrito.flatMap((item) => {
      const cantidad = item.cantidad || 1;
      const nota = (item.nota || '').trim();
      return Array.from({ length: cantidad }).map(() => ({
        nombre: item.nombre,
        precio: item.precio,
        nota: nota === '' ? null : nota,
        tipo: item.tipo === 'BEBIDA' ? 'BEBIDA' : 'PLATILLO',
      }));
    });
    // Bajas
    const delIds = Array.from(deleteIds);
    // Updates de nota
    const upd = Array.from(updatesNota.entries()).map(([id, nota]) => ({
      id,
      nota,
    }));

    // Si no hay cambios, permite salir
    if (addPlano.length === 0 && delIds.length === 0 && upd.length === 0) {
      salirSinCambios();
      return;
    }

    try {
      await axios.post(`${API}/ordenes/${ordenEditId}/apply`, {
        add: addPlano,
        deleteIds: delIds,
        update: upd,
      });
      showToast('Cambios aplicados', 'success');
      localStorage.removeItem('ordenEnEdicion');
      setCarrito([]);
      setDeleteIds(new Set());
      setUpdatesNota(new Map());
      navigate('/mesero/ordenes');
    } catch (error) {
      console.error('apply orden', error);
      showToast(error?.response?.data?.error || 'No se pudieron aplicar los cambios', 'danger');
    }
  };

  const enviarNuevaOrden = async () => {
    if (!mesaSeleccionada) {
      showToast('Selecciona una mesa', 'danger');
      return;
    }
    if (carrito.length === 0) {
      showToast('Agrega productos', 'danger');
      return;
    }

    const itemsPlano = carrito.flatMap((item) => {
      const cantidad = item.cantidad || 1;
      const nota = (item.nota || '').trim();
      return Array.from({ length: cantidad }).map(() => ({
        nombre: item.nombre,
        precio: item.precio,
        nota: nota === '' ? null : nota,
        tipo: item.tipo === 'BEBIDA' ? 'BEBIDA' : 'PLATILLO',
      }));
    });

    try {
      await axios.post(`${API}/ordenes`, {
        mesa: mesaSeleccionada,
        meseroId: usuario.id,
        items: itemsPlano,
      });
      showToast('Orden enviada exitosamente', 'success');
      setCarrito([]);
      setExistentes([]);
      setMesaSeleccionada(null);
      setMostrarMesaModal(false);
      setOrdenEditId(null);
      setOrdenEditCodigo(null);
      setTimeout(() => navigate('/mesero/ordenes'), 700);
    } catch (error) {
      console.error('enviar orden', error);
      showToast(error?.response?.data?.error || 'Error al enviar la orden', 'danger');
    }
  };

  const salirSinCambios = () => {
    localStorage.removeItem('ordenEnEdicion');
    navigate('/mesero/ordenes');
  };

  const chipMesa = {
    background: '#e0f2fe',
    color: '#075985',
    padding: '2px 8px',
    borderRadius: 999,
    fontWeight: 700,
  };

  // ===== UI =====
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Segoe UI, sans-serif',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <PageTopBar title={ordenEditId ? 'Editar Orden' : 'Generar Orden'} backTo="/panel" />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', width: '100%', boxSizing: 'border-box' }}>
        {/* Sidebar IZQ: Categorías activas con platillos */}
        <div style={{ flex: '0 0 260px', padding: '1rem', borderRight: '2px solid #ccc', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.2rem' }}>Categorías</h2>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaSeleccionada(cat.id)}
              style={{
                display: 'block',
                width: '100%',
                marginBottom: '.8rem',
                padding: '.6rem',
                fontSize: '1rem',
                backgroundColor: categoriaSeleccionada === cat.id ? '#004d4d' : '#eee',
                color: categoriaSeleccionada === cat.id ? '#fff' : '#000',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
              }}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Centro: Tarjetas (platillos de la categoría seleccionada) */}
        <div style={{ flex: '1 1 auto', minWidth: 0, padding: '1rem', overflowY: 'auto' }}>
          {ordenEditId && (
            <div
              style={{
                background: '#fff8e1',
                border: '1px solid #ffecb3',
                padding: '.6rem 1rem',
                borderRadius: 8,
                marginBottom: '1rem',
              }}
            >
              Editando la orden <b>{ordenEditCodigo || `#${ordenEditId}`}</b>.  
              <span style={{ marginLeft: 10, color: '#7c2d12' }}>
                Marca para eliminar ítems existentes permitidos, agrega nuevos o edita la nota.
              </span>
            </div>
          )}

          <h2>Platillos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {platillos
              .filter((p) => p.categoria?.id === categoriaSeleccionada)
              .map((p) => (
                <div
                  key={p.id}
                  draggable
                  onDragStart={onDragStart(p, 'PLATILLO')}
                  style={{
                    background: '#fff',
                    padding: '1rem',
                    borderRadius: 10,
                    boxShadow: '0 2px 6px rgba(0,0,0,.1)',
                    cursor: 'grab',
                  }}
                >
                  <img
                    src={p.imagenUrl || FALLBACK_IMG}
                    alt={p.nombre}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                    style={{
                      width: '100%',
                      height: 140,
                      objectFit: 'cover',
                      borderRadius: 8,
                      marginBottom: '1rem',
                      display: 'block',
                    }}
                  />
                  <h4 style={{ margin: 0 }}>{p.nombre}</h4>
                  <p style={{ marginTop: '.3rem' }}>Q{Number(p.precio).toFixed(2)}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => agregarDirecto(p, 'PLATILLO')}
                      style={{ padding: '.5rem .8rem', background: '#0f766e', color: '#fff', border: 'none', borderRadius: 6 }}
                    >
                      Agregar
                    </button>
                    <button
                      onClick={() => agregarConNota(p, 'PLATILLO')}
                      style={{ padding: '.5rem .8rem', background: '#334155', color: '#fff', border: 'none', borderRadius: 6 }}
                    >
                      Agregar con nota
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Panel derecha: EXISTENTES + NUEVOS + header sticky */}
        <div style={{ flex: '0 0 480px', padding: '0', borderLeft: '2px solid #ccc', background: '#fff', display: 'flex', flexDirection: 'column' }}>
          {/* Header sticky */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 5,
              background: '#fff',
              borderBottom: '1px solid #e5e7eb',
              padding: '0.8rem 1rem',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 10,
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              {ordenEditId ? (
                <strong>Modo edición</strong>
              ) : (
                <>
                  <strong>Mesa:</strong>
                  {mesaSeleccionada ? (
                    <span style={chipMesa}>#{mesaSeleccionada}</span>
                  ) : (
                    <span style={{ color: '#64748b' }}>sin asignar</span>
                  )}
                  <span style={{ marginLeft: 8, color: '#334155', fontWeight: 700 }}>Total: Q{total.toFixed(2)}</span>
                </>
              )}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              {ordenEditId ? (
                <>
                  <button onClick={salirSinCambios} style={btnGhost}>Salir sin cambios</button>
                  <button onClick={guardarCambios} style={btnConfirm}>Guardar cambios</button>
                </>
              ) : (
                <button onClick={() => setMostrarMesaModal(true)} style={btnConfirm}>
                  Enviar orden
                </button>
              )}
            </div>
          </div>

          {/* Cuerpo scrollable */}
          <div style={{ padding: '1rem', overflowY: 'auto', display: 'grid', gap: 16 }}>
            {/* EXISTENTES en la orden */}
            {ordenEditId && (
              <section style={section}>
                <h3 style={{ marginTop: 0 }}>Ya en la orden</h3>
                {existentes.length === 0 ? (
                  <div style={emptyBox}>Sin ítems previos.</div>
                ) : (
                  <div style={{ display: 'grid', gap: 8 }}>
                    {existentes.map((it) => {
                      const bloqueado = it.tipo === 'PLATILLO'
                        ? !(it.estado === 'PENDIENTE' && !it.chefId)
                        : it.estado === 'LISTO';
                      const marcado = deleteIds.has(it.id);
                      const editado = updatesNota.has(it.id);

                      return (
                        <div key={it.id} style={{
                          padding: '10px 12px',
                          border: '1px solid #e5e7eb',
                          borderRadius: 8,
                          background: marcado ? '#fee2e2' : '#f8fafc',
                          opacity: bloqueado ? .7 : 1
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                            <div style={{ flex: 1 }}>
                              <strong>{it.nombre}</strong> • Q{Number(it.precio).toFixed(2)} • {it.tipo}
                              {it.nota ? (
                                <div style={{ fontSize: 13, color: '#6b7280' }}>
                                  <em>Nota: {it.nota}</em>{' '}
                                  {editado && <span style={{ marginLeft: 6, fontWeight: 700, color: '#0f766e' }}>(editada)</span>}
                                </div>
                              ) : (
                                <div style={{ fontSize: 13, color: '#6b7280' }}>
                                  <em>Sin nota</em> {editado && <span style={{ marginLeft: 6, fontWeight: 700, color: '#0f766e' }}>(agregada)</span>}
                                </div>
                              )}
                              <div style={{ fontSize: 12, color: '#6b7280' }}>
                                Estado: {it.estado}{it.chefId ? ` • Chef ${it.chefId}` : ''}
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                              <button
                                disabled={bloqueado}
                                onClick={() => abrirEditarNota(it)}
                                style={{
                                  padding: '.4rem .7rem',
                                  borderRadius: 6,
                                  border: '1px solid #94a3b8',
                                  background: '#fff',
                                  color: '#0f172a',
                                  cursor: bloqueado ? 'not-allowed' : 'pointer',
                                  fontWeight: 700
                                }}
                                title={bloqueado ? 'No se puede editar nota (ya en cocina o entregado)' : 'Editar nota'}
                              >
                                Editar nota
                              </button>

                              <button
                                disabled={bloqueado}
                                onClick={() => toggleEliminarExistente(it.id)}
                                style={{
                                  padding: '.4rem .7rem',
                                  borderRadius: 6,
                                  border: 'none',
                                  cursor: bloqueado ? 'not-allowed' : 'pointer',
                                  background: marcado ? '#991b1b' : '#ef4444',
                                  color: '#fff',
                                  fontWeight: 700
                                }}
                                title={bloqueado ? 'No se puede eliminar (ya en cocina o entregado)' : (marcado ? 'Deshacer' : 'Marcar para eliminar')}
                              >
                                {marcado ? 'Deshacer' : 'Eliminar'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div style={{ marginTop: 6, fontSize: 13, color: '#64748b' }}>
                  * Reglas: PLATILLO en espera (sin chef) y BEBIDA no entregada permiten editar nota/eliminar.
                </div>
              </section>
            )}

            {/* NUEVOS a agregar */}
            <section style={section}>
              <h3 style={{ marginTop: 0 }}>{ordenEditId ? 'Nuevos a agregar' : 'Pedido'}</h3>

              {/* Zona platillos */}
              <div
                onDragOver={allowDrop}
                onDrop={onDropEn('PLATILLO')}
                style={{ background: '#f1f5f9', border: '2px dashed #0f766e', minHeight: 120, borderRadius: 10, padding: 10, marginBottom: 12 }}
              >
                <h4 style={{ marginTop: 0 }}>🍽️ Platillos (para cocina)</h4>
                {carrito.filter((i) => i.tipo === 'PLATILLO').length === 0 && (!ordenEditId || existentes.filter((i) => i.tipo === 'PLATILLO').length === 0) ? (
                  <p style={{ margin: 0, color: '#64748b' }}>Arrastra aquí o usa “Agregar”.</p>
                ) : null}

                {carrito
                  .filter((i) => i.tipo === 'PLATILLO')
                  .map((item) => {
                    const cant = item.cantidad || 1;
                    const sub = item.precio * cant;
                    return (
                      <div key={item.uid} style={{ marginBottom: '0.6rem', background: '#e2e8f0', padding: '0.6rem', borderRadius: 8 }}>
                        <strong>
                          {item.nombre}
                          {cant > 1 ? ` x${cant}` : ''}
                        </strong>
                        <div>Q{item.precio.toFixed(2)}{cant > 1 ? ` • Subtotal: Q${sub.toFixed(2)}` : ''}</div>
                        {item.nota && (
                          <div>
                            <em>Nota: {item.nota}</em>
                          </div>
                        )}
                        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                          <button onClick={() => incPorUid(item.uid)}>+1</button>
                          <button onClick={() => decPorUid(item.uid)}>-1</button>
                          <button
                            onClick={() => eliminarPorUid(item.uid)}
                            style={{ background: '#e11d48', color: '#fff', border: 'none', borderRadius: 4, padding: '.2rem .5rem' }}
                          >
                            Eliminar
                          </button>
                          <button onClick={() => moverATipo(item.uid, 'BEBIDA')}>→ Bebidas</button>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Zona bebidas */}
              <div
                onDragOver={allowDrop}
                onDrop={onDropEn('BEBIDA')}
                style={{ background: '#fef3c7', border: '2px dashed #ea580c', minHeight: 120, borderRadius: 10, padding: 10 }}
              >
                <h4 style={{ marginTop: 0 }}>🥤 Bebidas (las prepara el mesero)</h4>
                {carrito.filter((i) => i.tipo === 'BEBIDA').length === 0 && (!ordenEditId || existentes.filter((i) => i.tipo === 'BEBIDA').length === 0) ? (
                  <p style={{ margin: 0, color: '#a16207' }}>Arrastra aquí si es bebida.</p>
                ) : null}

                {carrito
                  .filter((i) => i.tipo === 'BEBIDA')
                  .map((item) => {
                    const cant = item.cantidad || 1;
                    const sub = item.precio * cant;
                    return (
                      <div key={item.uid} style={{ marginBottom: '0.6rem', background: '#fde68a', padding: '0.6rem', borderRadius: 8 }}>
                        <strong>
                          {item.nombre}
                          {cant > 1 ? ` x${cant}` : ''}
                        </strong>
                        <div>Q{item.precio.toFixed(2)}{cant > 1 ? ` • Subtotal: Q${sub.toFixed(2)}` : ''}</div>
                        {item.nota && (
                          <div>
                            <em>Nota: {item.nota}</em>
                          </div>
                        )}
                        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                          <button onClick={() => incPorUid(item.uid)}>+1</button>
                          <button onClick={() => decPorUid(item.uid)}>-1</button>
                          <button
                            onClick={() => eliminarPorUid(item.uid)}
                            style={{ background: '#e11d48', color: '#fff', border: 'none', borderRadius: 4, padding: '.2rem .5rem' }}
                          >
                            Eliminar
                          </button>
                          <button onClick={() => moverATipo(item.uid, 'PLATILLO')}>→ Platillos</button>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {!ordenEditId && (
                <div style={{ marginTop: 10, color: '#334155', fontWeight: 700 }}>
                  Total nuevos: Q{total.toFixed(2)}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Toast centrado arriba */}
      <ToastMessage
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      {/* Modal nota NUEVO item */}
      {mostrarNotas && (
        <div style={modalStyle}>
          <div style={modalContent}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>Agregar nota</h3>
            <textarea
              value={notaTemporal}
              onChange={(e) => setNotaTemporal(e.target.value)}
              placeholder="Ej: Sin cebolla, extra salsa…"
              style={textarea}
            />
            <div style={modalActions}>
              <button onClick={() => setMostrarNotas(false)} style={btnGhost}>
                Cancelar
              </button>
              <button onClick={confirmarNota} style={btnConfirm}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal nota EXISTENTE */}
      {editNotaModal && (
        <div style={modalStyle}>
          <div style={modalContent}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>
              Nota para: <span style={{ color: '#0f766e' }}>{editTarget?.nombre}</span>
            </h3>
            <textarea
              value={notaExistenteTemporal}
              onChange={(e) => setNotaExistenteTemporal(e.target.value)}
              placeholder="Escribe o deja vacío para quitar la nota…"
              style={textarea}
            />
            <div style={modalActions}>
              <button onClick={() => { setEditNotaModal(false); setEditTarget(null); }} style={btnGhost}>
                Cancelar
              </button>
              <button onClick={confirmarEditarNota} style={btnConfirm}>
                Guardar nota
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal mesa (solo al crear) */}
      {mostrarMesaModal && !ordenEditId && (
        <div style={modalStyle}>
          <div style={modalContent}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>Asignar mesa</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', margin: '1rem 0' }}>
              {Array.from({ length: 20 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setMesaSeleccionada(i + 1)}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: mesaSeleccionada === i + 1 ? '#004d4d' : '#ccc',
                    color: mesaSeleccionada === i + 1 ? '#fff' : '#000',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setMostrarMesaModal(false)} style={btnGhost}>
                Cerrar
              </button>
              <button onClick={enviarNuevaOrden} style={btnConfirm}>
                Enviar orden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Estilos =====
const section = { background: '#fff', borderRadius: 14, padding: 16, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' };
const emptyBox = { background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: 12, padding: '12px 10px', color: '#64748b', fontSize: 15 };

const modalStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const modalContent = {
  background: '#fff',
  padding: 24,
  borderRadius: 12,
  width: 480,
  maxWidth: '92vw',
  boxSizing: 'border-box',
  boxShadow: '0 12px 32px rgba(0,0,0,.18)',
};

const textarea = {
  width: '100%',
  minHeight: 120,
  padding: 12,
  fontSize: '1rem',
  border: '1px solid #cbd5e1',
  borderRadius: 10,
  outline: 'none',
  resize: 'vertical',
  boxSizing: 'border-box',
};

const modalActions = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 16,
};

const btnGhost = {
  padding: '.6rem 1.2rem',
  background: '#e5e7eb',
  color: '#111827',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  cursor: 'pointer',
};

const btnConfirm = {
  padding: '.6rem 1.2rem',
  background: '#004d4d',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  cursor: 'pointer',
};

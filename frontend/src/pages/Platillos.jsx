// src/pages/Platillos.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

// Toast + Modal
import ToastMessage from '../components/ToastMessage';
import { Modal } from 'bootstrap';

// Firebase
import { storage } from '../firebase';
import { ref as storageRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const API = 'http://localhost:3001';

/* =========================================================
   Utilidades para comprimir/redimensionar imágenes en el navegador
   Ahora: TODAS SALEN AL MISMO TAMAÑO (lienzo fijo con padding)
   ========================================================= */
const TARGET_W = 800;                 // Ancho fijo del lienzo de salida
const TARGET_H = 800;                 // Alto fijo del lienzo de salida
const OUTPUT_TYPE = 'image/webp';     // Formato destino
const OUTPUT_QUALITY = 0.8;           // 0..1
const FILL_COLOR = 'white';           // Color de fondo (para padding). Usa 'transparent' si prefieres

function bytesFmt(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });
}

async function loadImageBitmapOrElement(file) {
  // Intentar createImageBitmap (rápido en navegadores modernos)
  try {
    if ('createImageBitmap' in window) {
      return await createImageBitmap(file);
    }
  } catch {
    // fallback abajo
  }
  // Fallback: cargar a <img> desde data URL
  const dataURL = await fileToDataURL(file);
  return await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = dataURL;
  });
}

async function canvasToBlob(canvas, type, quality) {
  return await new Promise((resolve) => {
    if (canvas.toBlob) {
      canvas.toBlob((b) => resolve(b), type, quality);
    } else {
      // Fallback super compatible
      const dataUrl = canvas.toDataURL(type, quality);
      fetch(dataUrl).then((r) => r.blob()).then(resolve);
    }
  });
}

/**
 * Comprime la imagen a un lienzo de tamaño fijo (TARGET_W × TARGET_H)
 * manteniendo la proporción (encaja dentro) y rellenando el resto con FILL_COLOR.
 * Devuelve un File .webp más liviano y de DIMENSIONES UNIFORMES.
 */
async function compressImage(
  file,
  {
    targetW = TARGET_W,
    targetH = TARGET_H,
    type = OUTPUT_TYPE,
    quality = OUTPUT_QUALITY,
    fillColor = FILL_COLOR,
  } = {}
) {
  const img = await loadImageBitmapOrElement(file);
  const width = img.width || img.videoWidth || img.naturalWidth; // (por compat)
  const height = img.height || img.videoHeight || img.naturalHeight;

  // Calcular escala para encajar dentro del lienzo fijo
  const scale = Math.min(targetW / width, targetH / height);
  const outW = Math.max(1, Math.round(width * scale));
  const outH = Math.max(1, Math.round(height * scale));

  // Lienzo final fijo
  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext('2d');

  // Fondo (blanco por defecto). Si quieres transparente en PNG/WEBP con alpha, usa fillColor='transparent'
  if (fillColor && fillColor !== 'transparent') {
    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, targetW, targetH);
  } else {
    // Si no pintas nada, el lienzo queda transparente por defecto (para webp/png)
    ctx.clearRect(0, 0, targetW, targetH);
  }

  // Centrar la imagen escalada
  const offsetX = Math.floor((targetW - outW) / 2);
  const offsetY = Math.floor((targetH - outH) / 2);

  ctx.drawImage(img, offsetX, offsetY, outW, outH);

  const blob = await canvasToBlob(canvas, type, quality);
  // Si por alguna razón el resultado es más grande, devolvemos el original
  const bestBlob = blob && blob.size < file.size ? blob : file;

  // Asegurar extensión acorde al tipo destino
  const baseName = file.name.replace(/\.[^.]+$/, '');
  const ext =
    bestBlob.type === 'image/webp'
      ? 'webp'
      : bestBlob.type?.split('/')[1] || 'jpg';
  const outName = `${baseName}.${ext}`;

  return new File([bestBlob], outName, { type: bestBlob.type });
}

/* ========================================================= */

function Platillos() {
  const [platillos, setPlatillos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [formData, setFormData] = useState({ nombre: '', precio: '', categoriaId: '' });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // subida de imagen
  const [subiendoId, setSubiendoId] = useState(null);
  const [progreso, setProgreso] = useState(0);
  const fileInputRef = useRef(null);
  const platilloIdParaImagenRef = useRef(null);

  const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
  const responsableId = usuarioLogueado?.id;
  const navigate = useNavigate();

  // Toast
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  // Modal confirmación (reutilizable)
  const [confirmData, setConfirmData] = useState(null);
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

  useEffect(() => {
    if (!confirmData) return;
    modalInstanceRef.current = new Modal(modalRef.current, { backdrop: true, keyboard: true });

    const node = modalRef.current;
    const onHidden = () => {
      setConfirmData(null);
      modalInstanceRef.current?.dispose();
      modalInstanceRef.current = null;
    };
    node.addEventListener('hidden.bs.modal', onHidden);
    modalInstanceRef.current.show();
    return () => node.removeEventListener('hidden.bs.modal', onHidden);
  }, [confirmData]);

  const closeModal = () => modalInstanceRef.current?.hide();

  useEffect(() => {
    obtenerPlatillos();
    obtenerCategorias();
  }, []);

  const obtenerPlatillos = async () => {
    try {
      const res = await axios.get(`${API}/platillos`);
      setPlatillos(res.data);
    } catch (error) {
      console.error('Error al obtener platillos:', error);
      showToast('Error al obtener platillos', 'danger');
    }
  };

  const obtenerCategorias = async () => {
    try {
      const res = await axios.get(`${API}/categorias`);
      setCategorias(res.data);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      showToast('Error al obtener categorías', 'danger');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const crearPlatillo = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.precio || !formData.categoriaId) {
      showToast('Completa todos los campos', 'danger');
      return;
    }
    try {
      if (modoEdicion) {
        await axios.put(`${API}/platillos/${idEditando}`, {
          ...formData,
          responsableId: responsableId || 1
        });
        showToast('Platillo actualizado correctamente', 'success');
      } else {
        await axios.post(`${API}/platillos`, formData);
        showToast('Platillo registrado correctamente', 'success');
      }
      setFormData({ nombre: '', precio: '', categoriaId: '' });
      setModoEdicion(false);
      setIdEditando(null);
      obtenerPlatillos();
    } catch (error) {
      console.error('Error completo:', error);
      showToast(error.response?.data?.error || 'Error al guardar platillo', 'danger');
    }
  };

  const editarPlatillo = (platillo) => {
    setModoEdicion(true);
    setIdEditando(platillo.id);
    setFormData({
      nombre: platillo.nombre,
      precio: platillo.precio,
      categoriaId: platillo.categoria?.id || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Confirmación para activar/desactivar
  const pedirConfirmacionDisponibilidad = (platillo) => {
    const seraInactivar = !!platillo.disponible;
    setConfirmData({
      title: seraInactivar ? 'Desactivar platillo' : 'Activar platillo',
      message: seraInactivar
        ? `¿Deseas desactivar "${platillo.nombre}"? No aparecerá en el menú.`
        : `¿Deseas activar "${platillo.nombre}"?`,
      confirmText: seraInactivar ? 'Desactivar' : 'Activar',
      confirmVariant: seraInactivar ? 'danger' : 'primary',
      onConfirm: async () => {
        try {
          await axios.patch(`${API}/platillos/${platillo.id}/disponibilidad`, {
            disponible: !platillo.disponible
          });
          await obtenerPlatillos();
          showToast(seraInactivar ? 'Platillo desactivado' : 'Platillo activado', 'success');
        } catch (error) {
          console.error('Error cambiando disponibilidad:', error);
          showToast('No se pudo cambiar la disponibilidad', 'danger');
        } finally {
          closeModal();
        }
      }
    });
  };

  // ---- Subida de imagen ----
  const clickSubirPara = (platilloId) => {
    platilloIdParaImagenRef.current = platilloId;
    fileInputRef.current?.click();
  };

  const onArchivoSeleccionado = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    // Nota: SVG se rasteriza correctamente en la mayoría de navegadores cuando se pone en <img>.
    // Si llegas a tener problemas con SVG externos/CORS, considera excluir 'image/svg+xml'.
    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    if (!tiposPermitidos.includes(file.type)) {
      showToast(`Formato no permitido (${file.type}). Usa JPG, PNG, WEBP, GIF o SVG.`, 'danger');
      return;
    }

    const platilloId = platilloIdParaImagenRef.current;
    if (!platilloId) {
      showToast('No se seleccionó platillo para la imagen.', 'danger');
      return;
    }

    try {
      setSubiendoId(platilloId);
      setProgreso(0);

      // 1) Comprimir/redimensionar a tamaño UNIFORME (800x800 por defecto)
      const originalBytes = file.size;
      const optimized = await compressImage(file); // -> File .webp con 800×800 por defecto
      const optimizedBytes = optimized.size;

      // 2) Preparar nombre y metadata
      const nombreSeguro = optimized.name.replace(/\s+/g, '_');
      const nombreArchivo = `platillos/${platilloId}-${Date.now()}-${nombreSeguro}`;
      const refObj = storageRef(storage, nombreArchivo);
      const metadata = {
        contentType: optimized.type,
        // cacheControl: 'public,max-age=31536000,immutable', // opcional
      };

      // 3) Subir a Firebase Storage (archivo optimizado)
      const task = uploadBytesResumable(refObj, optimized, metadata);
      task.on(
        'state_changed',
        (snap) => setProgreso((snap.bytesTransferred / snap.totalBytes) * 100),
        (err) => {
          console.error('Error Storage:', err);
          showToast(err?.message || 'Error subiendo imagen.', 'danger');
          setSubiendoId(null);
        },
        async () => {
          try {
            const url = await getDownloadURL(task.snapshot.ref);
            await axios.put(`${API}/platillos/${platilloId}/imagen`, {
              url,
              responsableId: responsableId || 1
            });
            await obtenerPlatillos();
            const ahorro = originalBytes > 0 ? ` (de ${bytesFmt(originalBytes)} a ${bytesFmt(optimizedBytes)})` : '';
            showToast(`Imagen cambiada correctamente${ahorro}.`, 'success');
          } catch (e2) {
            console.error('Error guardando en backend:', e2);
            showToast(e2.response?.data?.error || 'Error al guardar imagen en la base de datos.', 'danger');
          } finally {
            setSubiendoId(null);
            setProgreso(0);
          }
        }
      );
    } catch (err) {
      console.error('Error general en subida:', err);
      showToast('Error inesperado subiendo imagen.', 'danger');
      setSubiendoId(null);
    }
  };

  /* ===== estilos ===== */
  const page = {
    minHeight: '100vh',
    backgroundColor: '#f3f6f7',
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    paddingBottom: 28
  };

  const wrap = {
    padding: '12px 24px 28px',
    display: 'grid',
    gridTemplateColumns: '340px 1fr',
    gap: '24px',
    alignItems: 'start'
  };

  const card = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
  };

  const inputStyle = {
    padding: '0.8rem 1rem',
    borderRadius: '12px',
    border: '1.5px solid #d1d5db',
    outline: 'none',
    backgroundColor: '#f9fafb',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
  };

  const buttonPrimary = {
    backgroundColor: '#0f766e',
    color: '#fff',
    padding: '0.85rem',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const btn = (bg) => ({
    backgroundColor: bg,
    color: '#fff',
    border: 'none',
    padding: '0.5rem 0.9rem',
    borderRadius: 8,
    fontWeight: 700,
    cursor: 'pointer'
  });

  return (
    <div style={page}>
      <AdminHeader titulo=" 🍽 Platillos por Categoría" />

      {/* input de archivo oculto */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onArchivoSeleccionado}
      />

      <div style={wrap}>
        {/* CATEGORÍAS */}
        <aside style={card}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {categorias.map((cat) => {
              const active = categoriaSeleccionada === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaSeleccionada(cat.id)}
                  style={{
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: 12,
                    border: '1.5px solid ' + (active ? '#0d9488' : '#e5e7eb'),
                    background: active ? '#e6fffb' : '#f3f4f6',
                    color: '#334155',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {cat.nombre}
                </button>
              );
            })}
          </div>
        </aside>

        {/* FORM + LISTA */}
        <main style={{ display: 'grid', gap: 24 }}>
          {/* Formulario */}
          <div style={card}>
            <h3 style={{ color: '#1e3d59', marginBottom: 16 }}>
              {modoEdicion ? '✏️ Editar platillo' : '➕ Registrar nuevo platillo'}
            </h3>

            <form onSubmit={crearPlatillo} style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre del platillo"
                value={formData.nombre}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="number"
                step="0.01"
                name="precio"
                placeholder="Precio"
                value={formData.precio}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <select
                name="categoriaId"
                value={formData.categoriaId}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Seleccione una categoría</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                ))}
              </select>

              <div style={{ display: 'flex', gap: 10 }}>
                <button type="submit" style={buttonPrimary}>
                  {modoEdicion ? 'Actualizar Platillo' : 'Registrar Platillo'}
                </button>
                {modoEdicion && (
                  <button
                    type="button"
                    onClick={() => { setModoEdicion(false); setIdEditando(null); setFormData({ nombre:'', precio:'', categoriaId:'' }); }}
                    style={{ ...buttonPrimary, backgroundColor: '#94a3b8' }}
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Lista por categoría */}
          {categoriaSeleccionada && (
            <div style={card}>
              <h3 style={{ marginBottom: 12, color: '#1e3d59' }}>
                Platillos de “{categorias.find(c => c.id === categoriaSeleccionada)?.nombre}”
              </h3>

              {platillos.filter(p => p.categoria?.id === categoriaSeleccionada).length === 0 ? (
                <p style={{ margin: 0, color: '#64748b' }}>No hay platillos en esta categoría.</p>
              ) : (
                platillos
                  .filter(p => p.categoria?.id === categoriaSeleccionada)
                  .map((platillo) => {
                    const tieneImagen = Boolean(platillo.imagenUrl);
                    const labelFoto = tieneImagen ? 'Cambiar foto' : 'Subir foto';
                    const mostrandoProgreso = subiendoId === platillo.id;

                    return (
                      <div
                        key={platillo.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px 0',
                          borderBottom: '1px solid #eef2f7',
                          gap: 14
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          {tieneImagen ? (
                            <img
                              src={platillo.imagenUrl}
                              alt={platillo.nombre}
                              loading="lazy"
                              decoding="async"
                              style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 10, border: '1px solid #e5e7eb' }}
                            />
                          ) : (
                            <div
                              style={{
                                width: 52, height: 52, borderRadius: 10, background: '#e5e7eb',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 12, color: '#6b7280'
                              }}
                            >
                              Sin foto
                            </div>
                          )}

                          <div>
                            <div style={{ fontWeight: 800, color: '#0f172a' }}>{platillo.nombre}</div>
                            <div style={{ color: '#334155', fontWeight: 700 }}>Q{platillo.precio}</div>
                            {!platillo.disponible && (
                              <span style={{ color: '#b91c1c', fontWeight: 800 }}>(No disponible)</span>
                            )}
                            {mostrandoProgreso && (
                              <div style={{ marginTop: 6, width: 180, background: '#eee', borderRadius: 6, overflow: 'hidden', height: 8 }}>
                                <div style={{ width: `${progreso}%`, height: '100%', background: '#0f766e', transition: 'width .2s' }} />
                              </div>
                            )}
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <button
                            onClick={() => clickSubirPara(platillo.id)}
                            disabled={mostrandoProgreso}
                            style={{ ...btn('#0f766e'), opacity: mostrandoProgreso ? 0.7 : 1 }}
                            title={labelFoto}
                          >
                            {labelFoto}
                          </button>
                          <button onClick={() => editarPlatillo(platillo)} style={btn('#f59e0b')}>Editar</button>
                          <button onClick={() => pedirConfirmacionDisponibilidad(platillo)} style={btn('#6b21a8')}>
                            {platillo.disponible ? 'Desactivar' : 'Activar'}
                          </button>
                        </div>
                      </div>
                    );
                  })
              )}
            </div>
          )}
        </main>
      </div>

      {/* Toast centrado arriba */}
      <ToastMessage
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />

      {/* Modal de confirmación */}
      {confirmData && (
        <div className="modal fade" tabIndex="-1" ref={modalRef}>
          <div className="modal-dialog mt-5">
            <div className={`modal-content border-${confirmData.confirmVariant === 'primary' ? 'primary' : 'danger'}`}>
              <div className={`modal-header text-white ${confirmData.confirmVariant === 'primary' ? 'bg-primary' : 'bg-danger'}`}>
                <h5 className="modal-title">{confirmData.title}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>{confirmData.message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                <button
                  type="button"
                  className={`btn btn-${confirmData.confirmVariant || 'danger'}`}
                  onClick={confirmData.onConfirm}
                >
                  {confirmData.confirmText || 'Confirmar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Platillos;

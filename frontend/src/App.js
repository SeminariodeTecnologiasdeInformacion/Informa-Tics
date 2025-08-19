// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import Usuarios from './pages/Usuarios';
import Platillos from './pages/Platillos';
import Historial from './pages/Historial';
import PanelPorRol from './pages/PanelPorRol';
import MenuAdmin from './pages/MenuAdmin';
import ManageCategories from './pages/ManageCategories';
import GestionRoles from './pages/GestionRoles';
import VistaMesero from './pages/VistaMesero';
import OrdenesMesero from './pages/OrdenesMesero';
import Cocinero from './pages/Cocinero';
import CambiarPassword from './pages/CambiarPassword';
import Bartender from './pages/Bartender';

import RequireAuth from './guards/RequireAuth';
import RequirePerm from './guards/RequirePerm';

// Si el usuario debe cambiar contraseña, lo envía a /cambiar-password
function RequirePasswordChange() {
  const loc = useLocation();
  const u = JSON.parse(localStorage.getItem('usuario') || 'null');
  const must = Boolean(u?.debeCambiarPassword);
  if (must && loc.pathname !== '/cambiar-password') {
    return <Navigate to="/cambiar-password" replace />;
  }
  return <Outlet />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protegidas por sesión */}
        <Route element={<RequireAuth />}>
          {/* Cambiar contraseña (con sesión, sin permisos) */}
          <Route path="/cambiar-password" element={<CambiarPassword />} />

          {/* Resto protegido por el guard de cambio de contraseña */}
          <Route element={<RequirePasswordChange />}>
            {/* Panel */}
            <Route path="/panel" element={<PanelPorRol />} />

            {/* ===== Admin ===== */}
            <Route element={<RequirePerm anyOf={[
              'CONFIGURAR_USUARIOS',
              'CONFIGURAR_PLATILLOS',
              'GESTIONAR_ROLES',
              'VER_HISTORIAL',
              'VER_MENU',
              'GESTIONAR_CATEGORIAS'
            ]} />}>
              <Route path="/admin" element={<AdminPanel />} />
            </Route>

            <Route element={<RequirePerm anyOf={['CONFIGURAR_USUARIOS']} />}>
              <Route path="/admin/usuarios" element={<Usuarios />} />
            </Route>

            <Route element={<RequirePerm anyOf={['CONFIGURAR_PLATILLOS']} />}>
              <Route path="/admin/platillos" element={<Platillos />} />
            </Route>

            <Route element={<RequirePerm anyOf={['VER_HISTORIAL']} />}>
              <Route path="/admin/historial" element={<Historial />} />
            </Route>

            <Route element={<RequirePerm anyOf={['VER_MENU','GESTIONAR_CATEGORIAS']} />}>
              <Route path="/admin/menu" element={<MenuAdmin />} />
              <Route path="/admin/categorias" element={<ManageCategories />} />
            </Route>

            <Route element={<RequirePerm anyOf={['GESTIONAR_ROLES']} />}>
              <Route path="/admin/roles" element={<GestionRoles />} />
            </Route>

            {/* ===== Mesero ===== */}
            <Route element={<RequirePerm anyOf={['GENERAR_ORDEN']} />}>
              <Route path="/mesero" element={<VistaMesero />} />
            </Route>
            <Route element={<RequirePerm anyOf={['VER_ORDENES']} />}>
              <Route path="/mesero/ordenes" element={<OrdenesMesero />} />
            </Route>

            {/* ===== Cocina ===== */}
            <Route element={<RequirePerm anyOf={['COCINA_VIEW']} />}>
              <Route path="/cocina" element={<Cocinero />} />
            </Route>

            {/* ===== Barra (Bartender) ===== */}
            <Route element={<RequirePerm anyOf={['BARRA_VIEW']} />}>
              <Route path="/barra" element={<Bartender />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

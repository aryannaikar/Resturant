import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

// admin
import AdminRoute from "./admin/AdminRoute";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import MenuManager from "./admin/pages/MenuManager";
import Orders from "./admin/pages/Orders";
import Customers from "./admin/pages/Customers";
import Reports from "./admin/pages/Reports";
import Settings from "./admin/pages/Settings";

// menu seed
import { seedMenuOnce } from "./utils/seedMenu";

function LayoutWrapper() {
  const location = useLocation();

  // hide navbar on admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  // seed menu once when app loads
  useEffect(() => {
    seedMenuOnce();
  }, []);

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ================= CUSTOMER ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/menu"
          element={
            <AdminRoute>
              <MenuManager />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <AdminRoute>
              <Customers />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <AdminRoute>
              <Reports />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminRoute>
              <Settings />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <LayoutWrapper />
    </HashRouter>
  );
}

export default App;

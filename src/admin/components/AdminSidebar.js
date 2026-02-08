import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>ADMIN</h2>

      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/menu">Menu</NavLink>
      <NavLink to="/admin/orders">Orders</NavLink>
      <NavLink to="/admin/customers">Customers</NavLink>
      <NavLink to="/admin/reports">Reports</NavLink>
      <NavLink to="/admin/settings">Settings</NavLink>
    </div>
  );
}

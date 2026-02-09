import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function Customers() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />
        <div className="admin-content">
          <h2>Customers</h2>
          <p>Customer analytics coming soon</p>
        </div>
      </div>
    </div>
  );
}

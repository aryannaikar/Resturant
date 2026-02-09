import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function Settings() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />
        <div className="admin-content">
          <h2>Settings</h2>
          <p>Admin settings will be added later</p>
        </div>
      </div>
    </div>
  );
}

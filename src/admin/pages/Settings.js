import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../admin.css";

export default function Settings() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>System Settings</h2>

          <label>
            <input type="checkbox" /> Enable Online Ordering
          </label>
          <br />
          <label>
            <input type="checkbox" /> Emergency Close Restaurant
          </label>
        </div>
      </div>
    </div>
  );
}

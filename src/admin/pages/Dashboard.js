import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import StatCard from "../components/StatCard";
import "../admin.css";

export default function Dashboard() {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Dashboard</h2>

          <div className="stats-grid">
            <StatCard title="Total Orders" value="124" />
            <StatCard title="Revenue" value="₹32,500" />
            <StatCard title="Customers" value="58" />
            <StatCard title="Active Orders" value="6" />
          </div>
        </div>
      </div>
    </div>
  );
}

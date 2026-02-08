import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../admin.css";

const customers = [
  { id: 1, name: "Rahul", orders: 5 },
  { id: 2, name: "Ayesha", orders: 3 },
];

export default function Customers() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Customers</h2>

          {customers.map(c => (
            <div key={c.id} className="list-card">
              <span>{c.name}</span>
              <span>Orders: {c.orders}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

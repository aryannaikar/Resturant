import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { getData, setData } from "../../utils/storage";
import "../admin.css";

const DEFAULT_ORDERS = [
  { id: 1, name: "Rahul", total: 450, status: "Pending" },
  { id: 2, name: "Ayesha", total: 300, status: "Preparing" },
];

const STATUS = [
  "Pending",
  "Accepted",
  "Preparing",
  "Ready",
  "Delivered",
  "Cancelled",
];

export default function Orders() {
  const [orders, setOrders] = useState(() =>
    getData("admin_orders", DEFAULT_ORDERS)
  );

  useEffect(() => {
    setData("admin_orders", orders);
  }, [orders]);

  const updateStatus = (id, status) => {
    setOrders(orders.map(o =>
      o.id === id ? { ...o, status } : o
    ));
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Orders</h2>

          {orders.map(order => (
            <div key={order.id} className="list-card">
              <span>{order.name}</span>
              <span>₹{order.total}</span>

              <select
                value={order.status}
                onChange={(e) =>
                  updateStatus(order.id, e.target.value)
                }
              >
                {STATUS.map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

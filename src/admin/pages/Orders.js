import React, { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../admin.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // 🔥 LOAD ORDERS (REAL-TIME)
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snap) => {
      const list = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(list.reverse()); // latest first
    });

    return () => unsub();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "orders", id), { status });
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Orders</h2>

          {orders.length === 0 && <p>No orders yet</p>}

          {orders.map(order => (
            <div key={order.id} className="order-card">
              <h4>
                {order.customer.name} — ₹{order.totals.total}
              </h4>

              <p>
                📞 {order.customer.phone} <br />
                📍 {order.customer.address}
              </p>

              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.qty}
                  </li>
                ))}
              </ul>

              <select
                value={order.status}
                onChange={(e) =>
                  updateStatus(order.id, e.target.value)
                }
              >
                <option>Pending</option>
                <option>Preparing</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

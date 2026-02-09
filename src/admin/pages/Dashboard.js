import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import StatCard from "../components/StatCard";
import "../admin.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    revenue: 0,
    activeOrders: 0,
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snap) => {
      let revenue = 0;
      let active = 0;

      snap.docs.forEach(doc => {
        const o = doc.data();
        revenue += o.totals?.total || 0;
        if (o.status !== "Completed" && o.status !== "Cancelled") {
          active++;
        }
      });

      setStats({
        totalOrders: snap.size,
        revenue,
        activeOrders: active,
      });
    });

    return () => unsub();
  }, []);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Dashboard</h2>

          <div className="stats-grid">
            <StatCard title="Total Orders" value={stats.totalOrders} />
            <StatCard title="Revenue" value={`₹${stats.revenue}`} />
            <StatCard title="Active Orders" value={stats.activeOrders} />
          </div>
        </div>
      </div>
    </div>
  );
}

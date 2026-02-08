import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { getData } from "../../utils/storage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../admin.css";

export default function Reports() {
  const orders = getData("admin_orders", []);

  const data = orders.reduce((acc, o) => {
    acc[o.name] = (acc[o.name] || 0) + o.total;
    return acc;
  }, {});

  const chartData = Object.keys(data).map(name => ({
    name,
    revenue: data[name],
  }));

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Revenue Analytics</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

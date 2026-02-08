import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { isLoggedIn, role } = useAuth();

  // ❌ Not logged in
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // ❌ Logged in but not admin
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Admin allowed
  return children;
}

import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="admin-navbar">
      <h3>Restaurant Admin Panel</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

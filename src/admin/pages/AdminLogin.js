import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const result = loginAsAdmin(password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/admin/dashboard");
  };

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: "100px auto" }}>
      <h2>Admin Login</h2>

      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      />

      {error && (
        <p style={{ color: "red", marginTop: 10 }}>{error}</p>
      )}

      <button
        onClick={handleLogin}
        style={{ marginTop: 20, width: "100%" }}
      >
        Login
      </button>
    </div>
  );
}

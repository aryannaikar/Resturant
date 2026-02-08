import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// ⚠️ DEMO PASSWORD (change later)
const ADMIN_PASSWORD = "admin@123";

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("admin_logged_in") === "true";
  });

  const [role, setRole] = useState(() => {
    return localStorage.getItem("admin_role");
  });

  useEffect(() => {
    localStorage.setItem("admin_logged_in", isLoggedIn);
    localStorage.setItem("admin_role", role);
  }, [isLoggedIn, role]);

  // ✅ ADMIN LOGIN WITH PASSWORD
  const loginAsAdmin = (password) => {
    if (password !== ADMIN_PASSWORD) {
      return { success: false, message: "Invalid admin password" };
    }

    setIsLoggedIn(true);
    setRole("admin");
    return { success: true };
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    localStorage.removeItem("admin_logged_in");
    localStorage.removeItem("admin_role");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        role,
        loginAsAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

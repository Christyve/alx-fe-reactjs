import { useState } from "react";

export function useAuth() {
  // Simulate authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.setItem("auth", "false");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

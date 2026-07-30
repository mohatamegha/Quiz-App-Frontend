import { createContext, useState } from "react";
import { decodeToken } from "../utils/jwt";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Read token from localStorage when the app starts
  const savedToken = localStorage.getItem("token");

  // Initialize state
  const [token, setToken] = useState(savedToken);

  const [user, setUser] = useState(
    savedToken ? decodeToken(savedToken) : null
  );

  // Login function
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(decodeToken(token));
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
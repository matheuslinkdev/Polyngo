import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the shape of the context
interface AuthContextProps {
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context
export const AuthContext = createContext<AuthContextProps>({
  logout: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    localStorage.setItem("isAuthenticated", isAuthenticated.toString());
  }, [user, isAuthenticated]);

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ logout, isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

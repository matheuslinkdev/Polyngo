// AuthContext.tsx
import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the shape of the context
interface AuthContextProps {
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
}

// Create the context
export const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  signup: () => {},
  logout: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
});

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const signup = (name: string, email: string, password: string) => {
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        setUser(result.data.user);
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };



  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signup, logout, isAuthenticated, setIsAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

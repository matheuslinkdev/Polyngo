// AuthContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProps, UserProps } from "../../types/global-types";
import axios from "axios";

// Create the context
export const AuthContext = createContext<AuthContextProps>({
  logout: () => {},
  deleteAccount: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});

// Custom hook to use the context
export const UseAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
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

  const deleteAccount = async () => {
    if (user) {
      try {
        await axios.delete(`http://localhost:5000/users/${user.email}`);
        logout();
      } catch (error) {
        console.error("Failed to delete account", error);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        deleteAccount,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextprovider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const checkAuth = () => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  };

  const submitHandler = () => {
    if (!(credentials.password === "test" && credentials.username === "test")) {
      alert("Invalid username or password");
      return false;
    }
    setAuth(true);
    localStorage.setItem("auth", true);
    navigate("/");
  };

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider
      value={{ setCredentials, submitHandler, auth, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

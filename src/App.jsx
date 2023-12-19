import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProtectedHome from "./context/ProtectedHome";
import ProtectedLogin from "./context/ProtectedLogin";
import { ThemeProvider } from "@emotion/react";
import { MovieContext } from "./context/movieContext";
import { Box } from "@mui/material";

function App() {
  const { MyTheme } = useContext(MovieContext);
  return (
    <ThemeProvider theme={MyTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Routes>
          <Route element={<ProtectedLogin />}>
            <Route path="login" element={<Login />} />
          </Route>

          <Route element={<ProtectedHome />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

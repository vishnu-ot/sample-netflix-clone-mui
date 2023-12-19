import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieContextProvider } from "./context/movieContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextprovider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextprovider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextprovider>
  </BrowserRouter>
);

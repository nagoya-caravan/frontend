import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/store/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <React.StrictMode>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);

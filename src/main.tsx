import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProjectsGrid from "./pages/GridProjects";
import LoginPage from "./pages/login";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projetos" element={<ProjectsGrid />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

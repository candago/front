import { Route, Routes } from "react-router-dom";
import { ConfigPage, Logout, StatsPage, UserPage, ProjectsPage } from "../pages";
import { MenuAdm } from "../components";
import Dashboard from "../pages/dashboardPage";

export default function AdmRoutes() {
  return (
    <>
      <MenuAdm />
      <Routes>
        <Route path="/" element={<ProjectsPage />} /> 
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<UserPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

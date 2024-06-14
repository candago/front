import { Route, Routes } from "react-router-dom";
import { ConfigPage, Logout, ProjectsPage } from "../pages";
import { MenuUser } from "../components";
import Dashboard from "../pages/dashboardPage";

export default function UserRoutes() {
  return (
    <>
      <MenuUser />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

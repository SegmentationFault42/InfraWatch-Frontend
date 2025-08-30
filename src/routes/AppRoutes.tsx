import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { System } from "../pages/System";
import { Alert } from "../pages/Alert";
import { Sla } from "../pages/Sla";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/system" element={<System />} />
        <Route path="/alerts" element={<Alert />} />
        <Route path="/sla" element={<Sla />} />
      </Routes>
    </BrowserRouter>
  );
}

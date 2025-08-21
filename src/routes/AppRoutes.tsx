import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Login />} /> */ }
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

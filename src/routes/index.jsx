import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Trails from "../pages/Trails";
import Trail from "../pages/Trail";
import Dashboard from "../pages/Dashboard";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/trilhas" element={<Trails />} />
      <Route path="/trilha" element={<Trail />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

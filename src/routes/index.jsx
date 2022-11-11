import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Trails from "../pages/Trails";
import Trail from "../pages/Trail";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/trilhas" element={<Trails />} />
      <Route path="/trilha" element={<Trail />} />
    </Routes>
  );
}

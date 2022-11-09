import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Trails from "../pages/Trails";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/trilhas" element={<Trails />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Trails from "../pages/Trails";
import Trail from "../pages/Trail";
import Favorites from "../pages/Favorites";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Trails />} />
      <Route path="/trilha" element={<Trail />} />
      <Route path="/meus-favoritos" element = {<Favorites/>} />
    </Routes>
  );
}

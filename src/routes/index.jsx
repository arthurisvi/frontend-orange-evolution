import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Login from "../pages/Login"
import Trails from "../pages/Trails";
import Dashboard from "../pages/Dashboard";
import Trail from "../pages/Trail";
import Favorites from "../pages/Favorites";
import AuthContext from "../shared/contexts/auth";

export function Router() {
  const userContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {<Route exact path="/dashboard/admin" element={<Dashboard />} />}
      {<Route exact path="/dashboard/membro" element={<Trails />} />}
      <Route
        path="/dashboard"
        element={userContext?.tag === "member" ? <Trails /> : <Dashboard />}
      />
      <Route path="/trilha" element={<Trail />} />
      <Route path="/meus-favoritos" element={<Favorites />} />
    </Routes>
  );
}

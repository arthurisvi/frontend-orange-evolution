import React, { useState, useEffect } from "react";
import { Title, MobileDiv } from "./style";
import CardTrail from "../../shared/components/CardTrail";
import PrimarySearchAppBar from "../../shared/components/Header";
import CardProgress from "../../shared/components/CardProgress";
import Box from "@mui/material/Box";
import api from "../../shared/services/api";

const trails = [
  { id: 1, name: "Desenvolvimento FullStack", class: "Teste" },
  { id: 2, name: "Desenvolvimento FullStack", class: "Teste" },
];

const Dashboard = () => {
  return (
    <body>
      <PrimarySearchAppBar />
      {/* <MobileDiv> */}
        <Box sx={{ padding: "5rem 8.75rem 5rem 8.75rem" }}>
          <Title>Acompanhe sua trilha</Title>
          <Box
            sx={{ display: "flex", gap: "1.875rem", marginBottom: "3.75rem" }}
          >
            {trails.map((trail) => (
              <CardProgress
                trailId={trail.id}
                trailClass={trail.class}
                trailTitle={trail.name}
              />
            ))}
          </Box>
          <Title>Outras trilhas</Title>
          <Box sx={{ display: "flex", gap: "1.875rem", marginTop: "1.875rem" }}>
            {trails.map((trail) => (
              <CardTrail
                key={trail.id}
                title={trail.name}
                description="Trilha"
                id={trail.id}
              />
            ))}
          </Box>
        </Box>
      {/* </MobileDiv> */}
    </body>
  );
};

export default Dashboard;

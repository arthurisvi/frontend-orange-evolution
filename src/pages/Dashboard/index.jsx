import React, { useState, useEffect } from "react";
import { Title, MobileDiv, ContainerCards, Container } from "./style";
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
      <Container>
        <Title>Acompanhe sua trilha</Title>
        <ContainerCards>
          {trails.map((trail) => (
            <CardProgress
              trailId={trail.id}
              trailClass={trail.class}
              trailTitle={trail.name}
            />
          ))}
        </ContainerCards>
        <Title>Outras trilhas</Title>
        {/* <Box sx={{ display: "flex", gap: "1.875rem", marginTop: "1.875rem" }}> */}
        <ContainerCards>
          {trails.map((trail) => (
            <CardTrail
              key={trail.id}
              title={trail.name}
              description="Trilha"
              id={trail.id}
            />
          ))}
        </ContainerCards>
        {/* </Box> */}
      </Container>
    </body>
  );
};

export default Dashboard;

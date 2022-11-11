import React, { useState, useEffect } from "react";
import PrimarySearchAppBar from "../../shared/components/Header";
import { ContainerAccordions, Title, Container } from "./style";
import Accordion from "../../shared/components/Accordion";
import Box from "@mui/material/Box";
import api from "../../shared/services/api";
import TrailProgress from "../../shared/components/TrailProgress";

const Trail = () => {
  return (
    <body>
      <PrimarySearchAppBar />
      <Container>
        <Box sx={{ marginTop: "60px" }}>
          <Title>Trilha de UX/UI Design</Title>
          <TrailProgress />
        </Box>
        <ContainerAccordions>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </ContainerAccordions>
      </Container>
    </body>
  );
};

export default Trail;

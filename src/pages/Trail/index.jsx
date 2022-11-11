import React, { useState, useEffect } from "react";
import PrimarySearchAppBar from "../../shared/components/Header";
import { ContainerAccordions, Title, Container } from "./style";
import Accordion from "../../shared/components/Accordion";
import Box from "@mui/material/Box";
import api from "../../shared/services/api";
import TrailProgress from "../../shared/components/TrailProgress";

export const contents = [
  {
    title:
      "UX/UI Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
    duration: "00:06:00",
    author: "Orange Juice",
    type: "Artigo",
    link: "https://medium.com/orangejuicefc/mas-o-que-%C3%A9-ux-330edd9c6887",
  },
  {
    title:
      "Design Thinking e carreira: como migrei de Psicologia para UX Design",
    duration: "00:05:00",
    author: "Udemy",
    type: "Artigo",
  },
  {
    title:
      "De advogada a desenvolvedora: um relato sobre minha migração de carreira e dicas para quem pretende seguir o mesmo caminho",
    duration: "00:06:00",
    author: "Alura",
    type: "Artigo",
  },
];

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
          <Accordion contents={contents} title = "O Início"/>
          <Accordion contents={contents} title= "Conceitos básicos"/>
          <Accordion contents={contents} title="Opcional"/>
        </ContainerAccordions>
      </Container>
    </body>
  );
};

export default Trail;

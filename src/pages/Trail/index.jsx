import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import PrimarySearchAppBar from "../../shared/components/Header";
import { ContainerAccordions, Title, Container } from "./style";
import Accordion from "../../shared/components/Accordion";
import Box from "@mui/material/Box";
import TrailProgress from "../../shared/components/TrailProgress";
import { trailService } from "../../shared/services/trail.service";

const Trail = () => {
  const [initialContents, setInitialContents] = useState([]);
  const [basicContents, setBasicContents] = useState([]);
  const [optionalContents, setOptionalContents] = useState([]);
  const [trail, setTrail] = useState({});
  const [searchParams] = useSearchParams();

  const fetchData = useCallback(() => {
    const id = searchParams.get("id");
    trailService
      .getById(id)
      .then((res) => {
        setInitialContents(
          res.data.contents.filter((content) => content.category === "initial")
        );
        setBasicContents(
          res.data.contents.filter(
            (content) => content.category === "basicConcepts"
          )
        );
        setOptionalContents(
          res.data.contents.filter((content) => content.category === "optional")
        );
        setTrail(res.data.trail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <body>
      <PrimarySearchAppBar />
      <Container>
        <Box sx={{ marginTop: "60px" }}>
          <Title>Trilha de {trail.name}</Title>
          <TrailProgress
            trailName={trail.name}
            estimatedTime={trail.estimated_time}
          />
        </Box>
        <ContainerAccordions>
          <Accordion contents={initialContents} title="O Início" />
          <Accordion contents={basicContents} title="Conceitos básicos" />
          <Accordion contents={optionalContents} title="Opcional" />
        </ContainerAccordions>
      </Container>
    </body>
  );
};

export default Trail;

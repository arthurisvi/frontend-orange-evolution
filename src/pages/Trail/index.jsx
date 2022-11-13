import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import PrimarySearchAppBar from "../../shared/components/Header";
import { ContainerAccordions, Title, Container } from "./style";
import Accordion from "../../shared/components/Accordion";
import Box from "@mui/material/Box";
import TrailProgress from "../../shared/components/TrailProgress";
import { trailService } from "../../shared/services/trail.service";
import { userService } from "../../shared/services/user.service";

const Trail = () => {
  const [initialContents, setInitialContents] = useState([]);
  const [basicContents, setBasicContents] = useState([]);
  const [optionalContents, setOptionalContents] = useState([]);
  const [userRegisteredTrail, setUserRegisteredTrail] = useState(false);
  const [trail, setTrail] = useState({});
  const [searchParams] = useSearchParams();
  const [favoritesIds, setIdsFavorites] = useState([])

  const getFavorites = useCallback(() => {
    userService
      .getMyFavorites()
      .then((res) => {
        console.log(res.data)
        setIdsFavorites(res.data.map((content) => content.id));
      })
      .catch((err) => console.log(err));
  }, [])

  const verifiyUserTrail = useCallback(() => {
    const trailId = searchParams.get("id");

    userService
      .getTrailsByUser()
      .then((res) => {
        if (res.data.lenght === 0) {
          setUserRegisteredTrail(false)
        } else {
          res.data.forEach((trail) => {
            if (trail.id === trailId) {
              setUserRegisteredTrail(true)
            }
          })
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

  useEffect(() => getFavorites(), [getFavorites]);
  useEffect(() => verifiyUserTrail(), [verifiyUserTrail]);
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
            registered={userRegisteredTrail}
          />
        </Box>
        <ContainerAccordions>
          <Accordion
            contents={initialContents}
            favorites={favoritesIds}
            title="O Início"
            registered={userRegisteredTrail}
          />
          <Accordion
            contents={basicContents}
            favorites={favoritesIds}
            title="Conceitos básicos"
            registered={userRegisteredTrail}
          />
          <Accordion
            contents={optionalContents}
            favorites={favoritesIds}
            title="Opcional"
            registered={userRegisteredTrail}
          />
        </ContainerAccordions>
      </Container>
    </body>
  );
};

export default Trail;

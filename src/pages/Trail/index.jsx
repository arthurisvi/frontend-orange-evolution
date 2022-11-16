import React, { useState, useEffect, useCallback, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import PrimarySearchAppBar from "../../shared/components/Header";
import { ContainerAccordions, Title, Container } from "./style";
import Accordion from "../../shared/components/Accordion";
import Box from "@mui/material/Box";
import TrailProgress from "../../shared/components/TrailProgress";
import { trailService } from "../../shared/services/trail.service";
import { userService } from "../../shared/services/user.service";
import AuthContext from "../../shared/contexts/auth";
import CustomizedDialogs from "../../shared/components/Modal";
import Footer from "../../shared/components/Footer";

const Trail = () => {
  const [initialContents, setInitialContents] = useState([]);
  const [basicContents, setBasicContents] = useState([]);
  const [optionalContents, setOptionalContents] = useState([]);
  const [userRegisteredTrail, setUserRegisteredTrail] = useState(false);
  const [trail, setTrail] = useState({});
  const [searchParams] = useSearchParams();
  const [favoritesIds, setIdsFavorites] = useState([]);
  const userContext = useContext(AuthContext);

  const [progress, setProgress] = useState(null);

  const getProgressTrail = useCallback(() => {
    const id = searchParams.get("id");

    trailService
      .getMyProgress(id)
      .then((res) => {
        setProgress(res.data.progress);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getFavorites = useCallback(() => {
    userService
      .getMyFavorites()
      .then((res) => {
        setIdsFavorites(res.data.map((content) => content.id));
      })
      .catch((err) => console.log(err));
  }, []);

  const verifiyUserTrail = useCallback(() => {
    const trailId = searchParams.get("id");

    userService
      .getTrailsByUser()
      .then((res) => {
        if (res.data.lenght === 0) {
          setUserRegisteredTrail(false);
        } else {
          res.data.forEach((trail) => {
            if (trail.id === trailId) {
              setUserRegisteredTrail(true);
            }
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = useCallback(() => {
    const id = searchParams.get("id");
    trailService
      .getById(id)
      .then((res) => {
        let data = [];
        data =
          (localStorage.getItem("tag") === "member" ||
            userContext?.tag === "member") &&
          res.data?.contentsUser
            ? getContentsWithFavoriteAndSaved(
                res.data.contents,
                res.data.contentsUser
              )
            : res.data.contents;

        setInitialContents(
          data.filter((content) => content.category === "initial")
        );
        setBasicContents(
          data.filter((content) => content.category === "basicConcepts")
        );
        setOptionalContents(
          data.filter((content) => content.category === "optional")
        );
        setTrail(res.data.trail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getContentsWithFavoriteAndSaved = (contents, contentsUser) => {
    const newContents = contents.map((trail) => {
      const data = contentsUser.filter((user) => user.content_id === trail.id);

      if (data[0]) {
        return {
          ...trail,
          status: data[0].status,
          favorite: data[0].favorite,
        };
      }
      return trail;
    });

    return newContents;
  };

  useEffect(() => {
    getFavorites();
    getProgressTrail();
    verifiyUserTrail();
    fetchData();
  }, [getFavorites, verifiyUserTrail, fetchData, getProgressTrail]);

  return (
    <body>
      <PrimarySearchAppBar />
      <Container>
        <Box sx={{ marginTop: "60px" }}>
          <Title>Trilha de {trail.name}</Title>
          {localStorage.getItem("tag") === "member" ||
          userContext?.tag === "member" ? (
            <TrailProgress
              progress={progress}
              trailName={trail.name}
              estimatedTime={trail.estimated_time}
              registered={userRegisteredTrail}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <CustomizedDialogs />
            </Box>
          )}
        </Box>
        <ContainerAccordions>
          <Accordion
            arrowDefault={true}
            contents={initialContents}
            favorites={favoritesIds}
            title="O Início"
            registered={userRegisteredTrail}
          />
          <Accordion
            arrowDefault={true}
            contents={basicContents}
            favorites={favoritesIds}
            title="Conceitos básicos"
            registered={userRegisteredTrail}
          />
          <Accordion
            arrowDefault={true}
            contents={optionalContents}
            favorites={favoritesIds}
            title="Opcional"
            registered={userRegisteredTrail}
          />
        </ContainerAccordions>
      </Container>
      <Footer position="fixed"/>
    </body>
  );
};

export default Trail;

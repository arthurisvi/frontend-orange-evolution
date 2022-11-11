import React, { useState, useEffect } from "react";
import { ContainerCards, Title, Container, Text } from "./style";
import CardTrail from "../../shared/components/CardTrail";
import PrimarySearchAppBar from "../../shared/components/Header";
import Box from "@mui/material/Box";
import api from "../../shared/services/api";

const Trails = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    api.get("/trail/getAll").then((response) => {
      setTrails(response.data);
    });
  }, [trails]);

  return (
    <body>
      <PrimarySearchAppBar />
      <Container>
        <Box sx={{ marginBottom: "60px" }}>
          <Title center={true}>
            Se você chegou até aqui, é porque quer aprender mais sobre
            tecnologia!
          </Title>
          <Text>
            O Orange Evolution consiste em trilhas totalmente gratuitas para que
            você possa iniciar a sua carreira na tecnologia. Você terá acesso a
            vídeos, lives, artigos, apostilas e até cursos gratuitos, além
            desses conteúdos serem da Orange Juice, de parceiros e empresas que
            confiamos.
          </Text>
          <Text>
            Essas trilhas foram montadas pensando em quem está começando na área, ou
            passando por uma migração de carreira e ainda não sabe exatamente o
            que é esse mundo. Então, aperta o cinto e vem com a gente nessa
            jornada!
          </Text>
        </Box>
        <Title>Selecione uma trilha</Title>
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
      </Container>
    </body>
  );
};

export default Trails;

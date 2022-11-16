import React, { useState, useEffect, useCallback, useContext } from "react";
import { Container, ContainerCards, Text, Title} from "./style";
import { Box } from "@mui/system";
import { Typography } from "@material-ui/core";
import PrimarySearchAppBar from "../../shared/components/Header";
import AccordionTrail from "../../shared/components/AccordionTrail";
import { trailService } from "../../shared/services/trail.service";
import Footer from "../../shared/components/Footer";

const Dashboard = () => {
  const [trails, setTrails] = useState([]);

  const fetchData = useCallback(() => {
    trailService
      .getAll()
      .then((res) => {
        setTrails(res.data);
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
        <Title>Trilhas</Title>
        <Text>Selecione a trilha que deseja administrar seus conteúdos:</Text>
        <ContainerCards>
          {trails?.map((trail) => {
            return <AccordionTrail id={trail.id} title={trail.name} />;
          })}
        </ContainerCards>
      </Container>
      <Footer position="fixed"/>
    </body>
  );
};

export default Dashboard;

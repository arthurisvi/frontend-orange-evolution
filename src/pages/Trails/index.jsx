import React, { useState, useEffect } from "react";
import { ContainerCards, Title, Container} from "./style";
import CardTrail from "../../shared/components/CardTrail";
import PrimarySearchAppBar from "../../shared/components/Header";
import api from "../../shared/services/api"

const Trails = () => {

  const [trails, setTrails] = useState([]);

  useEffect(() => {
    api.get("/trail/getAll").then((response) => {
      setTrails(response.data);
    })
  }, [trails])

  return (
    <body>
      <PrimarySearchAppBar />
      <Container>
        <Title>Selecione uma trilha</Title>
        <ContainerCards>
          {trails.map((trail) => (
            <CardTrail key={trail.id}  title={trail.name} description="Trilha" id={trail.id}/>
          ))}
        </ContainerCards>
      </Container>
    </body>
  );
};

export default Trails;

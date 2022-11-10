import React from "react";
import { ContainerCards, Title, Container} from "./style";
import CardTrail from "../../shared/components/CardTrail";
import PrimarySearchAppBar from "../../shared/components/Header";

const trails = [
  { id: 1, title: "Desenvolvimento FullStack" },
  { id: 2, title: "Design UI/UX" },
  { id: 3, title: "QA (Quality Assurance)" },
];

const Trails = () => {
  return (
    <body>
      <PrimarySearchAppBar />
      <Container>
        <Title>Selecione uma trilha</Title>
        <ContainerCards>
          {trails.map((trail) => (
            <CardTrail title={trail.title} description="Trilha" id={trail.id}/>
          ))}
        </ContainerCards>
      </Container>
    </body>
  );
};

export default Trails;

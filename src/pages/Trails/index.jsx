import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { ContainerCards } from "./style";
import CardTrail from "../../shared/components/CardTrail";

const trails = [{ title: "Desenvolvimento FullStack" }, { title: "Design UI/UX" }, { title: "QA (Quality Assurance)" }];

const Trails = () => {
  return (
    <ContainerCards>
      {trails.map((trail) => (
        <CardTrail title={trail.title} description = "Trilha"/>))}
    </ContainerCards>
  );
};

export default Trails;

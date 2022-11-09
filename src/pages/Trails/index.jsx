import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { ContainerCards } from "./style";
import CardTrail from "../../shared/components/CardTrail";

const Trails = () => {
  return (
    <ContainerCards>
      <CardTrail />
      <CardTrail />
      <CardTrail />
    </ContainerCards>
  );
};

export default Trails;

import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 400;
  color: #555252;
`;

const Card = styled.div`
  width: 30.625rem;
  padding: 2.813rem;
  background-color: #8c9ba9;
  border-radius: 6px;
  @media screen and (max-width: 958px) {
    width: 100%;
    padding: 1.875rem;
  }
`;

const BoxProgress = styled.div`
  width: 320px;
  color: #96d86e;
  @media screen and (max-width: 1165px) {
    width: 80%;
  }
`;

export default function CardProgress(props) {
  return (
    <Card>
      <Title>Trilha em andamento</Title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {/* <Box sx={{ width: "320px", color: "#96D86E" }}> */}
        <BoxProgress>
          <LinearProgress color="inherit" variant="determinate" value={50} />
        </BoxProgress>
        {/* </Box> */}
        <strong>{props.trailTitle}</strong>
        <p>Conteúdo: {props.trailClass}</p>
      </Box>
      <StyledLink to={`trilha/${props.trailId}`}>
        <Button sx={{ marginTop: "15px" }} variant="contained">
          Continuar
        </Button>
      </StyledLink>
    </Card>
  );
}

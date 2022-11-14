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
  color: #686c72;
`;

const Card = styled.div`
  width: 30.625rem;
  padding: 1.875rem;
  background-color: #f7f8f9;
  border-radius: 6px;
  @media screen and (max-width: 958px) {
    width: 100%;
    padding: 1.875rem;
  }
`;

const BoxProgress = styled.div`
  width: 320px;
  color: #00c09b;
  @media screen and (max-width: 1165px) {
    width: 80%;
  }
`;

const Text = styled.p`
  color: #686c72;
  font-size: 1rem;
  font-weight: ${(props) => (props.fontWeight)};
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
        <Text fontWeight="500">{props.trailTitle}</Text>
        <Text fontWeight="400">Conteúdo: {props.trailClass}</Text>
      </Box>
      <StyledLink to={`/trilha?id=${props.trailId}`}>
        <Button
          sx={{ marginTop: "15px", backgroundColor: "#00C09B" }}
          variant="contained"
        >
          Continuar
        </Button>
      </StyledLink>
    </Card>
  );
}

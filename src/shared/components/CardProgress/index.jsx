import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
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

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
`

export default function CardProgress(props) {
  return (
    <Box
      sx={{
        width: 490,
        padding: "45px",
        backgroundColor: "#8C9BA9",
        borderRadius: "6px",
      }}
    >
      <Title>Trilha em andamento</Title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <Box sx={{ width: "320px", color: "#96D86E" }}>
          <LinearProgress color="inherit" variant="determinate" value={50} />
        </Box>
        <strong>{props.trailTitle}</strong>
        <p>Conteúdo: {props.trailClass}</p>
      </Box>
      <StyledLink to={`trilha/${props.trailId}`}>
        <Button sx={{ marginTop: "15px" }} variant="contained">
          Continuar
        </Button>
      </StyledLink>
    </Box>
  );
}

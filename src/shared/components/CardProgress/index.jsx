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
        <h2>Trilhas em andamento</h2>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "30px" }}>
          <Box sx={{ width: "320px", color: "#96D86E" }}>
            <LinearProgress color = "inherit" variant="determinate" value={50} />
          </Box>
          <p>{props.trailTitle}</p>
          <p>{props.trailClass}</p>
      </Box>
      <StyledLink to = {`trilha/${props.trailId}`}>
        <Button sx={{marginTop: "15px"}} variant="contained">Continuar</Button>
      </StyledLink>
      </Box>
  );
}

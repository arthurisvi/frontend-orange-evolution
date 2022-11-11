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

export default function TailProgress(props) {
  return (
      <Box
        sx={{
          width: 1150,
          padding: "30px",
          backgroundColor: "#8C9BA9",
          borderRadius: "6px",
          display: 'flex',
          gap: '15px',
        }}
        >
        <Box sx={{width: 250, height: 155, backgroundColor: 'white'}}></Box>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '10px'}}>
        <p>Se você chegou até aqui, é porque quer aprender mais sobre tecnologia, especialmente sobre UI/UX Desgin!</p>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{ width: 300, color: "#96D86E", }}>
            <LinearProgress color="inherit" variant="determinate" value={50} />
          </Box>
          <p>Tempo estimado: 30 horas</p>
        </Box>
      </Box>
      </Box>
  );
}

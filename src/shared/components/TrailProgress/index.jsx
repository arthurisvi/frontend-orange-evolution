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

const Card = styled.div`
  width: 71.875rem;
  padding: 1.875rem;
  background-color: #8c9ba9;
  border-radius: 6px;
  display: flex;
  gap: 15px;
  @media screen and (max-width: 1165px) {
    width: 100%;
    padding: 1.25rem;
    flex-direction: column;
  }
`;

const ContainerImg = styled.div`
  width: 15.625rem;
  height: 9.688rem;
  background-color: white;
  @media screen and (max-width: 1165px) {
    display: none;
  }
`;

const BoxProgress = styled.div`
  width: 300px;
  color: #96d86e;
  @media screen and (max-width: 1165px) {
    width: 30%;
  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  @media screen and (max-width: 1165px) {
    justify-content: center;
    gap: 30px;
  }
`

export default function TrailProgress(props) {
  return (
    <Card>
      <ContainerImg></ContainerImg>
        <ContainerContent>
        <p>
          Se você chegou até aqui, é porque quer aprender mais sobre tecnologia,
          especialmente sobre UI/UX Desgin!
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BoxProgress>
            <LinearProgress color="inherit" variant="determinate" value={50} />
          </BoxProgress>
          <p>Tempo estimado: 30 horas</p>
          </Box>
        </ContainerContent>
    </Card>
  );
}

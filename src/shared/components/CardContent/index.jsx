import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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
  width: 100%;
  padding: 0.938rem;
  height: 135px;
  background-color: rgba(217, 217, 217, 0.7);
  display: flex;
  gap: 10px;
  @media screen and (max-width: 958px) {
    width: 100%;
    gap: 0px;
  }
`;

const CardIcon = styled.div`
  width: 10%;
  background-color: white;
  border-radius: 6px;
  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export default function CardContent(props) {
  return (
    <Card>
      <CardIcon />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
          <strong>{props.title}</strong>
          <Box
            sx={{
              padding: "0.375rem",
              backgroundColor: "#3D6D9D",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffff",
            }}
          >
            <p>{props.type}</p>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AccessTimeIcon />
            <p>Duração: {props.duration}</p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <CheckCircleOutlineIcon />
            <BookmarkBorderIcon />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

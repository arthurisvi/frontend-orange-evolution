import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userService } from "../../services/user.service";

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

const Text = styled.p`
  font-size: ${(props) => props.size};
`;

export default function CardContent(props) {

  const handleSetFavorite = (id) => {
    const favorited = true;
    userService.setFavorite(id, favorited).then((res) => console.log(res));
  };

  const handleSetStatusContent = (id) => {
    const status = "finished";

    userService.setStatusContent(id, status).then((res) => console.log(res));
  };

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text size="18px">
            <strong>{props.title}</strong>
          </Text>
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
        <Text size="14px">Conteudo por: {props.author}</Text>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AccessTimeIcon />
            <Text size="14px">Duração: {props.duration}</Text>
          </Box>
          {props.registered && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <IconButton onClick={e => handleSetStatusContent(props.id)}>
                <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton onClick={e => handleSetFavorite(props.id)}>
                <BookmarkBorderIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}

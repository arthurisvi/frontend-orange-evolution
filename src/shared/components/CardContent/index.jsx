import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import AlertDialog from "../ModalConfirm";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userService } from "../../services/user.service";
import AuthContext from "../../contexts/auth";
import CustomizedDialogs from "../Modal";


const Card = styled.div`
  width: 100%;
  padding: 0.938rem;
  height: 135px;
  background-color: #f7f8f9;
  display: flex;
  gap: 10px;
  margin-top: 25px;
  @media screen and (max-width: 958px) {
    width: 100%;
    gap: 0px;
  }
`;

const CardIcon = styled.div`
  width: 10%;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 958px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  @media screen and (max-width: 958px) {
    font-size: 1rem;
  }
`;

export default function CardContent(props) {
  const location = useLocation();
  const [isFavorited, setFavorited] = useState(false);
  const [isFinished, setFinished] = useState(
    props.content.status === "finished" ? true : false
  );
  const [loading, setLoading] = useState(false);
  const userContext = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.pathname.includes("/meus-favoritos")) {
      setFavorited(true);
    }
  }, []);

  const handleSetFavorite = (id) => {
    userService
      .setFavorite(id, props.content.trail_id, !isFavorited)
      .then((res) => {
        setFavorited(!isFavorited);
      })
      .catch((e) => {
        console.log(e);
      });
    // .finally(() => {
    // });
  };

  const handleSetStatusContent = (id) => {
    let status = !isFinished ? "finished" : "notStarted";
    console.log(isFinished);

    userService
      .setStatusContent(id, props.content.trail_id, status)
      .then((res) => {
        // setFinished(!isFinished);
        res.data.status === "notStarted"
          ? setFinished(false)
          : setFinished(true);
        // console.log(isFinished)
      })
      .catch((e) => {
        console.log(e);
      });
    // .finally(window.location.reload());
  };

  const changeColor = (type) => {
    switch (type) {
      case "Vídeo":
        return "#D44949";
      case "Artigo":
        return "#4D46D1";
      case "Live":
        return "#861CD2";
      case "Curso":
        return "#00C09B";
      case "Livro":
        return "#F328BD";
      default:
        return "#000000";
    }
  }

  return (
    <Card>
      {props.content.type === "Artigo" && (
        <CardIcon backgroundColor="rgba(77, 70, 209, 0.3)">
          <DescriptionOutlinedIcon sx={{ fontSize: 60, color: "#5E5757" }} />
        </CardIcon>
      )}
      {props.content.type === "Vídeo" && (
        <CardIcon backgroundColor="rgba(212, 73, 73, 0.3)">
          <SmartDisplayOutlinedIcon sx={{ fontSize: 60, color: "#5E5757" }} />
        </CardIcon>
      )}
      {props.content.type === "Live" && (
        <CardIcon backgroundColor="rgba(134, 28, 210, 0.3)">
          <LiveTvIcon sx={{ fontSize: 60, color: "#5E5757" }} />
        </CardIcon>
      )}
      {props.content.type === "Livro" && (
        <CardIcon backgroundColor="rgba(243, 40, 189, 0.3)">
          <CollectionsBookmarkOutlinedIcon
            sx={{ fontSize: 60, color: "#5E5757" }}
          />
        </CardIcon>
      )}
      {props.content.type === "Curso" && (
        <CardIcon backgroundColor=" rgba(0, 192, 155, 0.3)">
          <CardMembershipOutlinedIcon sx={{ fontSize: 60, color: "#5E5757" }} />
        </CardIcon>
      )}
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
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              window.open(props.content.link, "_blank");
            }}
          >
            <Text size="18px">
              <strong>{props.content.title}</strong>
            </Text>
          </Box>

          <Box
            sx={{
              padding: "0.375rem",
              backgroundColor: changeColor(props.content.type),
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffff",
            }}
          >
            <p>{props.content.type}</p>
          </Box>
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            window.open(props.content.link, "_blank");
          }}
        >
          <Text size="14px">Conteúdo por: {props.content.author}</Text>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AccessTimeIcon />
            <Text size="14px">Duração: {props.content.duration}</Text>
          </Box>
          {props.registered && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <IconButton
                onClick={(e) => handleSetStatusContent(props.content.id)}
              >
                {isFinished || props.content.status === "finished" ? (
                  <CheckCircleIcon color="primary" />
                ) : (
                  <CheckCircleOutlineIcon />
                )}
              </IconButton>
              <IconButton onClick={(e) => handleSetFavorite(props.content.id)}>
                {isFavorited || props.content.favorite ? (
                  <BookmarkIcon color="primary" />
                ) : (
                  <BookmarkBorderIcon />
                )}
              </IconButton>
            </Box>
          )}
          {userContext?.tag === "admin" && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <AlertDialog
                text="Tem certeza que deseja excluir esse conteúdo?"
                title="Excluir conteúdo"
                id={props.content.id}
              />
              <CustomizedDialogs idContent={props.content.id} function="edit" />
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../assets/icons/iconTeste.png";

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

const ContainerIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTrail = (props) => {
  return (
    <div>
      <StyledLink
        to={"/trilha?id=" + props.id}
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            width: 270,
            height: 340,
            marginBottom: "15px",
          }}
        >
          {props.title === "Desenvolvimento Full Stack" && (
            <img
              src={"https://i.ibb.co/LZgshJz/card-dev.png"}
              alt="icon"
              width="100%"
            />
          )}
          {props.title === "UI/UX Design" && (
            <img
              src={"https://i.ibb.co/5FVZgLj/card-design.png"}
              alt="icon"
              width="100%"
            />
          )}
          {props.title === "QA (Quality Assurance)" && (
            <img
              src={"https://i.ibb.co/gzQJMLH/Group-27-1.png"}
              alt="icon"
              width="100%"
            />
          )}
        </Box>
      </StyledLink>
    </div>
  );
};

export default CardTrail;

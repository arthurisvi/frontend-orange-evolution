import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from '../../../assets/icons/iconTeste.png'

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
`

const CardTrail = (props) => {
  return (
    <div>
      <StyledLink to={"/trilha/" + props.id} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            width: 270,
            height: 340,
            border: "1px solid black",
            marginBottom: "15px",
          }}
        >
          <ContainerIcon>
          <img src={Icon} alt="icon" />
          </ContainerIcon>
        </Box>
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </StyledLink>
    </div>
  );
};

export default CardTrail;

import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const Text = styled.p`
  font-size: 1.5rem;
`

const AccordionTrail = (props) => {
  return (
    <div>
      <StyledLink
        to={"/trilha?id=" + props.id}
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(217, 217, 217, 0.20);",
            display: "flex",
            padding: "25px",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px"
          }}
        >
          <Text>{props.title}</Text>
          <ArrowForwardIosIcon fontSize="small" />
        </Box>
      </StyledLink>
    </div>
  );
};

export default AccordionTrail;

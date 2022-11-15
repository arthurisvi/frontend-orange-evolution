import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "../CardContent";
import styled from "styled-components";

const Box = styled.div`
  width: 62.5rem;
  border-radius: 6px;
  display: flex;
  @media screen and (max-width: 958px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: #808080;
  @media screen and (max-width: 958px) {
    font-size: 1.25rem;
  }
`;

export default function SimpleAccordion(props) {

  return (
    <Box>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Title>{props.title}</Title>
        </AccordionSummary>
        <AccordionDetails>
          {props.contents?.map((content) => {
            return (
              <CardContent content={content} registered={props.registered} />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

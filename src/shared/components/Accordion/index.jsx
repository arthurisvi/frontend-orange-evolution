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

// const contentsTest = [
//   {
//     title:
//       "UX/UI Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
//     duration: "00:06:00",
//     type: "Artigo",
//   },
//   {
//     title:
//       "Design Thinking e carreira: como migrei de Psicologia para UX Design",
//     duration: "00:05:00",
//     type: "Artigo",
//   },
//   {
//     title:
//       "De advogada a desenvolvedora: um relato sobre minha migração de carreira e dicas para quem pretende seguir o mesmo caminho",
//     duration: "00:06:00",
//     type: "Artigo",
//   },
// ];

export default function SimpleAccordion(props) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(props.contents);
  });

  return (
    <Box>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* {contents?.map((content) => {
            <CardContent
              title={content.title}
              duration={content.duration}
              type={content.type}
            />;
          })} */}
          <CardContent
            title={contents[0]?.title}
            duration={contents[0]?.duration}
            type={contents[0]?.type}
            author={contents[0]?.author}
            link={contents[0]?.link}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

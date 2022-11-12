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

export default function SimpleAccordion(props) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(props.contents);
  },);

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
            registered={props.registered}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

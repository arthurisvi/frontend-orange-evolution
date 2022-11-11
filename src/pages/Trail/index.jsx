import React, { useState, useEffect } from "react";
import PrimarySearchAppBar from "../../shared/components/Header";
import Accordion from "../../shared/components/Accordion"
import Box from "@mui/material/Box";
import api from "../../shared/services/api";
import TailProgress from "../../shared/components/TrailProgress";

const Trail = () => {

  return (
    <body>
      <PrimarySearchAppBar />
      
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '60px'}}>
        <Box sx={{marginTop: '60px'}}>
          <Box sx={{marginLeft: '30px', marginBottom: '30px'}}>
            <h1>Trilha de UX/UI Design</h1>
          </Box>
          <TailProgress />  
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </Box>
      </Box>
    </body>
  );
};

export default Trail;

import React from "react";
import Box from "@mui/material/Box";

const CardTrail = (props) => {
  return (
    <div>
      <Box
        sx={{
          width: 270,
          height: 340,
          border: "1px solid black",
          marginBottom: "15px"
        }}
      />
      <strong>{props.title}</strong>
      <p>{props.description}</p>
    </div>
  );
};

export default CardTrail;

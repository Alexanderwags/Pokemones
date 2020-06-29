import React from "react";
import { Box } from "./styles/styles";

const Pokemon = ({ title, url }) => {
  return (
    <Box>
      <h1>{title}</h1>
      <img src={url} alt="img" />
    </Box>
  );
};

export default Pokemon;

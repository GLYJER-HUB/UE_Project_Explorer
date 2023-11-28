import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DisplayGrid from "../components/DisplayGrid";

const Home = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <Typography
          variant="h4"
          color={"GrayText"}
          fontWeight="600"
          textAlign="left"
          marginTop={8}
        >
          Tous les projets
        </Typography>
        <DisplayGrid />
      </Box>
    </>
  );
};

export default Home;

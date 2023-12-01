import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import { useState } from "react";
import Loader from "../components/Loader";
const Gestion = () => {
  const gesttionFilter = ["Plan d'affaire", "Rédaction de projet", "Mémoire"];
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  
  const handleFilterChange = (option) => {
    // Handle filter change
    setSelectedOption(option);
    console.log(`Filter changed to: ${option}`);
  };
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <Typography
          variant="h4"
          color={"GrayText"}
          fontWeight="600"
          textAlign="left"
          mt={8}
          mb={2}
        >
          Gestion des Affaires
        </Typography>
        <FilterButton
          options={gesttionFilter}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
        />

        {loading ? <Loader /> : <DisplayGrid />}
      </Box>
    </>
  );
};

export default Gestion;

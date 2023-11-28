import React from "react";
import { Typography, Box } from "@mui/material";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import { useState } from "react";
import { projects } from "../utilities/DummyData";

const Informatique = () => {
  const toFilteredBy = ["App Mobile", "Desktop App", "Web App"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleFilterChange = (option) => {
    // Handle filter change to change grid
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
          Science Informatique
        </Typography>
        {/* Buttons to filter between Desktop and Mobile and Web */}
        <FilterButton
          options={toFilteredBy}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
        />
        <DisplayGrid projectList={projects} />
      </Box>
    </>
  );
};

export default Informatique;

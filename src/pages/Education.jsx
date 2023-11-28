import {React,useState}from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DisplayGrid from "../components/DisplayGrid";
import FilterButton from "../components/Filter";
const Education = () => {
  const educationFilter = ["Rédaction projet", "Mémoire"];
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
          Science de L'Éducation
        </Typography>
        <FilterButton
          options={educationFilter}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
        />
        <DisplayGrid />
      </Box>
    </>
  );
};

export default Education;

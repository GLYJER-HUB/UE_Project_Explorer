import { React, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import Loader from "../components/Loader";
const Comptabilite = () => {
  const accountingFilter = ["Plan d'affaire ", "Système comptable "];
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);

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
          Science Comptable
        </Typography>

        <FilterButton
          options={accountingFilter}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
        />
        {loading ? <Loader /> : <DisplayGrid projectList='' />}
      </Box>
    </>
  );
};

export default Comptabilite;

import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import Loader from "../components/Loader";
const Comptabilite = () => {
  const accountingFilter = ["Plan d'affaire", "Système comptable"];
  const [selectedOption, setSelectedOption] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (option) => {
    // Handle filter change to change grid
    setSelectedOption(option);
    console.log(`Filter changed to: ${option}`);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      let response, responseData;
      switch (selectedOption) {
        case "Plan d'affaire":
           setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Comptabilit%C3%A9/type/Plan%20d'affaire"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;
        case "Système comptable":
            setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Comptabilit%C3%A9/type/Syst%C3%A8me%20comptable"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;

        default:
          setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Comptabilité"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;
      }
    };

    fetchProjects();
  }, [selectedOption]);

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
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Comptabilite;

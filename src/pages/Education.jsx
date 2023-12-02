import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DisplayGrid from "../components/DisplayGrid";
import FilterButton from "../components/Filter";
import Loader from "../components/Loader";

const Education = () => {
  const educationFilter = ["Rédaction projet", "Mémoire"];
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const handleFilterChange = (option) => {
    // Handle filter change to change grid
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      let response, responseData;

      switch (selectedOption) {
        case "Mémoire":
          setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/%C3%89ducation/type/Mémoire"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;
        case "Rédaction projet":
          setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/%C3%89ducation/type/R%C3%A9daction%20de%20projet"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;

        default:
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/%C3%89ducation"
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
          Science de L'Éducation
        </Typography>
        <FilterButton
          options={educationFilter}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
        />
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Education;

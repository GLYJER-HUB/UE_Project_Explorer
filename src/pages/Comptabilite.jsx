import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";

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
        <PageTitle title={"Science Comptable"} />

        <Typography component={"div"} display={"flex"}>
          <FilterButton
            options={accountingFilter}
            selectedOption={selectedOption}
            onOptionChange={handleFilterChange}
            clearFilter={() => setSelectedOption("")}
          />
        </Typography>
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Comptabilite;

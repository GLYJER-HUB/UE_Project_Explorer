import React from "react";
import Box from "@mui/material/Box";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { baseUrl } from "../utilities/api";
import { useSearchContext } from "../components/SearchContext";



const Gestion = () => {
  const { searchInput } = useSearchContext();

  const gesttionFilter = ["Plan d'affaire", "Rédaction de projet", "Mémoire"];
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const handleFilterChange = (option) => {
    // Handle filter change
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      let response, responseData;
      // If searchInput is not empty, fetch projects based on searchInput
      if (searchInput.trim() !== "") {
        setLoading(true);
        response = await fetch(
          baseUrl + `search?query=${encodeURIComponent(searchInput)}`
        );
        responseData = await response.json();
        setProjects(responseData.projects);
        setLoading(false);
      } else {
        switch (selectedOption) {
          case "Mémoire":
            setLoading(true);
            response = await fetch(baseUrl + "discipline/Gestion/type/Mémoire");
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;
          case "Plan d'affaire":
            setLoading(true);
            response = await fetch(
              baseUrl + "discipline/Gestion/type/Plan%20d'affaire"
            );
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;
          case "Rédaction de projet":
            setLoading(true);
            response = await fetch(
              baseUrl + "discipline/Gestion/type/R%C3%A9daction%20de%20projet"
            );
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;

          default:
            response = await fetch(baseUrl + "discipline/Gestion");
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;
        }
      }

     
    };

    fetchProjects();
  }, [selectedOption,searchInput]);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <PageTitle title={"Gestion des Affaires"} />
        <FilterButton
          options={gesttionFilter}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
          clearFilter={() => setSelectedOption("")}
        />
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Gestion;

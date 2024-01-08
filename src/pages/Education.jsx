import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DisplayGrid from "../components/DisplayGrid";
import FilterButton from "../components/Filter";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { baseUrl } from "../utilities/api";
import { useSearchContext } from "../components/SearchContext";

const Education = () => {
  const { searchInput } = useSearchContext();
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
            response = await fetch(
              baseUrl + "discipline/%C3%89ducation/type/Mémoire"
            );
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;
          case "Rédaction projet":
            setLoading(true);
            response = await fetch(
              baseUrl +
                "discipline/%C3%89ducation/type/R%C3%A9daction%20de%20projet"
            );
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;

          default:
            response = await fetch(baseUrl + "discipline/%C3%89ducation");
            responseData = await response.json();
            setProjects(responseData.projects);
            setLoading(false);
            break;
        }
      }
    };

    fetchProjects();
  }, [selectedOption, searchInput]);
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <PageTitle title={"Science de L'Éducation"} />

        <FilterButton
          options={educationFilter}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
          clearFilter={() => setSelectedOption("")}
        />
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Education;

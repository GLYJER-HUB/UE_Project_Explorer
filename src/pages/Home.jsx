import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DisplayGrid from "../components/DisplayGrid";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { baseUrl } from "../utilities/api";
import { useSearchContext } from "../components/SearchContext";

const Home = () => {
  const { searchInput } = useSearchContext();

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
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
        response = await fetch(baseUrl);
        responseData = await response.json();
        setProjects(responseData.projects);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [searchInput]);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <PageTitle title={"Tous les projets"} />
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Home;

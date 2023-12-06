import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DisplayGrid from "../components/DisplayGrid";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { baseUrl } from "../utilities/api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(baseUrl);
      const responseData = await response.json();
      setProjects(responseData.projects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

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

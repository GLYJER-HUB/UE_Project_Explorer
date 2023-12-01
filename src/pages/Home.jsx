import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DisplayGrid from "../components/DisplayGrid";
import Loader from "../components/Loader";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
   useEffect(() => {
     const fetchProjects = async () => {
       const response = await fetch("http://localhost:4000/api/projects");
       const responseData = await response.json();
       setProjects(responseData.projects);
       setLoading(false);
     };

     fetchProjects();
   }, []);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <Typography
          variant="h4"
          color={"GrayText"}
          fontWeight="600"
          textAlign="left"
          marginTop={8}
        >
          Tous les projets
        </Typography>
        {loading ? <Loader /> : <DisplayGrid  projectList={projects}/>}
      </Box>
    </>
  );
};

export default Home;

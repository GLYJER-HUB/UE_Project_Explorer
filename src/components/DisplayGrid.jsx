import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProjectCard from "./cards/ProjectCard";
import { Typography } from "@mui/material";

export default function DisplayGrid({ projectList }) {
  return (
    <Box mb={{xs:16, sm:8}}>
      <Grid container spacing={3} mt={2} columns={{ sm: 8, md: 12, lg: 12 }}>
        {Array.isArray(projectList) ? (
          projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={project.type + index}>
              <ProjectCard
                key={project.type + index}
                id={project._id}
                type={project?.type}
                name={project?.project_name}
                description={project?.description}
                authors={project?.authors}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h6" color="gray" mt={"10%"}>
              Aucun projet trouvé.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

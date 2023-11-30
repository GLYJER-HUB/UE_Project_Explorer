import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ProjectCard from "./cards/ProjectCard";
import { Typography } from "@mui/material";

export default function DisplayGrid({ projectList }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} mt={2} columns={{ sm: 8, md: 12 }}>
        {Array.isArray(projectList) ? (
          projectList.map((project, index) => (
            <Grid item xs={4} key={project.type + index}>
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

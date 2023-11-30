import * as React from "react";
import {
  Divider,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import ph from "../../assets/ph.webp";
import colors from "../../utilities/color";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
export default function ProjectCardDeatil() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `http://localhost:4000/api/projects/id/${id}`
      );
      const responseData = await response.json();
      setProject(responseData);
    };

    fetchProjects();
  }, [id]);

  const { project_name, description, year_of_submission, authors } = project;
  let author1, author2;

  if (Array.isArray(authors)) {
    [author1, author2 = ""] = authors;
  } 
  
  console.log(author1, author2)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} mt={2} columns={{ sm: 8, md: 12 }}>
        <Card sx={{ display: "flex", mt: 12 }}>
          <CardMedia
            component="img"
            sx={{ width: 550 }}
            image={ph}
            alt="project cover"
          />
          <Box sx={{ display: "flex" }}>
            <CardContent>
              <Typography
                component="h1"
                variant="h5"
                sx={{ ml: 0, textAlign: "left", fontWeight: "semi-bold" }}
                color={colors.primary}
              >
                NOM DU PROJET
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ textAlign: "left" }}
              >
                {project_name}
              </Typography>
              <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
              <Typography
                component="h1"
                variant="h5"
                sx={{ ml: 0, textAlign: "left", fontWeight: "semi-bold" }}
                color={colors.primary}
              >
                DESCRIPTION
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ textAlign: "left" }}
              >
                {description}
              </Typography>
              <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />

              <Typography
                component="h1"
                variant="h5"
                sx={{ ml: 0, textAlign: "left", fontWeight: "semi-bold" }}
                color={colors.primary}
              >
                ETUDIANT(S)
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ textAlign: "left" }}
              >
                {`${author1}, ${author2}`}
              </Typography>
              <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
              <Typography
                component="h3"
                variant="h5"
                sx={{ ml: 0, textAlign: "left", fontWeight: "semi-bold" }}
                color={colors.primary}
              >
                ANNÉE: {year_of_submission}
              </Typography>
              <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}

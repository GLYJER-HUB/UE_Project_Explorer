import * as React from "react";
import {
  Divider,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
  Skeleton,
  Button,
} from "@mui/material";
import ph from "../../assets/ph.webp";
import colors from "../../utilities/color";
import { baseUrl } from "../../utilities/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectCardDeatil() {
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${baseUrl}id/${id}`
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
  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{
          backgroundColor: colors.primary,
          ":hover": {
            backgroundColor: colors.primary,
            flexGrow: 1,
          },
          mt: 4,
        }}
      >
        Retour
      </Button>
      <Card sx={{ display: "flex", mt: 8 }}>
        <CardMedia
          component="img"
          sx={{ width: 650 }}
          image={ph ? ph : <Skeleton variant="image" width="60%" height={16} />}
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
              {project_name ? (
                project_name
              ) : (
                <Skeleton variant="text" width="60%" height={16} />
              )}
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
              {" "}
              {description ? (
                description
              ) : (
                <Skeleton variant="text" width="60%" height={16} />
              )}
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
              {author1 && author2 ? (
                `${author1}, ${author2}`
              ) : (
                <Skeleton variant="text" width="60%" height={16} />
              )}
            </Typography>
            <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
            <Typography
              component="h3"
              variant="h5"
              sx={{ ml: 0, textAlign: "left", fontWeight: "semi-bold" }}
              color={colors.primary}
            >
              ANNÉE:
              {year_of_submission ? (
                year_of_submission
              ) : (
                <Skeleton variant="text" width="60%" height={16} />
              )}
            </Typography>
            <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

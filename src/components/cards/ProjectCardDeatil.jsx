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
export default function ProjectCardDeatil({
  projectName,
  description,
  author,
  year,
}) {
  return (
    <Card sx={{ display: "flex" }}>
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
            {projectName}
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
            {author}
          </Typography>
          <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
          <Typography
            component="h3"
            variant="h5"
            sx={{ ml: 0, textAlign: "left", fontWeight: "semi-bold" }}
            color={colors.primary}
          >
            ANNÉE: {year}
          </Typography>
          <Divider sx={{ width: "650px", mt: 2, mb: 2 }} />
        </CardContent>
      </Box>
    </Card>
  );
}

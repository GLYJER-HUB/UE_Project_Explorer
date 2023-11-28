import * as React from "react";
import {
  CardMedia,
  Typography,
  Divider,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import colors from "../../utilities/color";
import ph from "../../assets/ph.webp";

export default function ProjectCard({ type, name, description, author, handleClick }) {
  return (
    <Card sx={{ maxWidth: 300, mb: 2 }}>
      <CardMedia
        component="img"
        alt="project cover"
        height="140"
        image={ph}
        onClick={() => handleClick}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          fontWeight={"semi-bold"}
          color={colors.primary}
        >
          {type}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Divider sx={{ width: "97%", marginLeft: "4px" }} />
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          Réalisé par: {author}
        </Typography>
      </CardActions>
    </Card>
  );
}

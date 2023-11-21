import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="project cover" height="140" image="" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Project type
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Project description
        </Typography>
      </CardContent>

      <CardActions>Project's Author</CardActions>
    </Card>
  );
}

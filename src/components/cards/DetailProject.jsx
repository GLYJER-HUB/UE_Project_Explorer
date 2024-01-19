import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Button,CardContent } from "@mui/material";
import ph from "../../assets/fallback.webp";
import colors from "../../utilities/color";
import { baseUrl, serverUrl } from "../../utilities/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function ProjectDetailView() {
  const [expanded, setExpanded] = React.useState(true);
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(`${baseUrl}id/${id}`);
      const responseData = await response.json();
      setProject(responseData);
    };

    fetchProject();
  }, [id]);

  const {
    project_name,
    description,
    year_of_submission,
    authors,
    cover,
    pdf_file,
    project_url,
  } = project;
  let author1, author2;

  if (Array.isArray(authors)) {
    // If there is no second author, set 'author2' to an empty string.
    [author1, author2 = ""] = authors;
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const hanldeViewProject = (url) => {
    if (url) {
      window.open(url);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="div" position={"relative"} left={0}>
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
      </Typography>
      <br />
      <Card sx={{ minWidth: 345, maxWidth: "50%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: colors.primary }} aria-label="recipe">
              <SchoolIcon />
            </Avatar>
          }
          title={`${author1}, ${author2}`}
          subheader={`Année: ${year_of_submission}`}
        />
        <CardMedia
          component="img"
          height="200"
          image={cover ? serverUrl + cover : ph}
          alt="Projet Cover"
        />
        <CardContent>
          <Typography variant="h6" color={colors.text}>
            {project_name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {project_url && (
            <IconButton
              aria-label="add to favorites"
              onClick={() => hanldeViewProject(project_url)}
            >
              <VisibilityIcon sx={{ color: colors.primary }} />
            </IconButton>
          )}
          <IconButton
            aria-label="share"
            onClick={() => window.open(serverUrl + pdf_file)}
          >
            <PictureAsPdfIcon sx={{ color: "#C41E3A" }} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph color={colors.primary}>
              Description:
            </Typography>
            <Typography paragraph color={"text.secondary"}>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

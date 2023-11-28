import * as React from "react";
import {
  Avatar,
  CardHeader,
  Typography,
  Divider,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import colors from "../../utilities/color";

export default function ProjectCard({
  type,
  name,
  description,
  author,
  handleClick,
}) {
  const abbreviation = name.split(" ");
  const projectAbbreviation = Array.isArray(abbreviation)
    ? abbreviation[0][0] + (abbreviation[1] ? abbreviation[1][0] : "")
    : abbreviation[0][0];
  return (
    <Card
      sx={{ maxWidth: 300, mb: 2, border: `0.3px solid ${colors.cardBorder}` }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: colors.primary }} aria-label="recipe">
            {projectAbbreviation}
          </Avatar>
        }
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
        <Typography
          gutterBottom
          variant="h6"
          fontWeight={"bold"}
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Divider sx={{ width: "97%", marginLeft: "4px" }} />
      <CardActions>
        <Typography component="div" display={"flex"}>
          <PersonIcon sx={{ color: colors.primary, fontSize: "18px", mr: 1 }} />
          <Typography
            sx={{ fontSize: "14px" }}
            variant="body2"
            color={"GrayText"}
          >
            {author}
          </Typography>
        </Typography>
      </CardActions>
    </Card>
  );
}

import * as React from "react";
import {
  Avatar,
  CardHeader,
  Typography,
  Divider,
  CardContent,
  CardActions,
  Card,
  Skeleton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import colors from "../../utilities/color";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ id, name, description, authors, type }) {
  let author1, author2;
  const abbreviation = name.split(" ");
  const projectAbbreviation = Array.isArray(abbreviation)
    ? abbreviation[0][0] + (abbreviation[1] ? abbreviation[1][0] : "")
    : abbreviation[0][0];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  if (Array.isArray(authors)) {
    [author1, author2 = ""] = authors;
  }

  return (
    <Card
      sx={{ maxWidth: 350, mb: 2, border: `0.3px solid ${colors.cardBorder}` }}
    >
      <CardHeader
        avatar={
          projectAbbreviation ? (
            <Avatar sx={{ bgcolor: colors.primary }} aria-label="recipe">
              {projectAbbreviation}
            </Avatar>
          ) : (
            <Skeleton variant="circular" width={40} height={40} />
          )
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
          {type ? type : <Skeleton variant="text" width="80%" height={20} />}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          fontWeight={"bold"}
          component="div"
        >
          {name ? name : <Skeleton variant="text" width="90%" height={30} />}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description ? (
            description
          ) : (
            <Skeleton variant="text" width="100%" height={50} />
          )}
        </Typography>
      </CardContent>
      <Divider sx={{ width: "97%", marginLeft: "4px" }} />
      <CardActions onClick={handleClick} sx={{
        ":hover": {
        cursor:"pointer"
      }}}>
        <Typography component="div" display={"flex"}>
          <PersonIcon sx={{ color: colors.primary, fontSize: "18px", mr: 1 }} />
          <Typography
            sx={{ fontSize: "14px" }}
            variant="body2"
            color={"GrayText"}
          >
            {author1 && author2 ? (
              `${author1}, ${author2}`
            ) : (
              <Skeleton variant="text" width="60%" height={16} />
            )}
          </Typography>
        </Typography>
      </CardActions>
    </Card>
  );
}

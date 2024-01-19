import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Toolbar,
} from "@mui/material";

import {
  FolderOpen,
  LaptopOutlined,
  CalculateOutlined,
  ShowChartOutlined,
  School,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import colors from "../utilities/color";
import { useNavigate } from "react-router-dom";
import logo from "../assets/UE.png";
import SearchBar from "./Search";
const drawerWidth = 240;

const categoriesItem = [
  {
    name: "Tous les projets",
    icon: <FolderOpen />,
    path: "",
  },
  {
    name: "Informatique",
    icon: <LaptopOutlined />,
    path: "/informatique",
  },
  {
    name: "Comptabilité",
    icon: <CalculateOutlined />,
    path: "/comptabilite",
  },
  {
    name: "Gestion",
    icon: <ShowChartOutlined />,
    path: "/gestion",
  },
  {
    name: "Education",
    icon: <School />,
    path: "/education",
  },
];

function SideNavigation(props) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <List>
        {categoriesItem.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              handleClick(item.path);
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  color: colors.primary,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="p" fontWeight={"semi-bold"}>
                    {item.name}
                  </Typography>
                }
                sx={{
                  color: colors.primary,
                  ml: 2,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          boxShadow: `3px 3px 5px ${colors.shadowColor}`,
        }}
      >
        <Toolbar>
          <IconButton
            color={colors.primary}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: colors.primary }} />
          </IconButton>
          <Typography
            component={"div"}
            sx={{ ml: mobileOpen ? "auto" : "65%" }}
          >
            <SearchBar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <List>
            <ListItem>
              <Typography marginLeft={2}>
                <img
                  src={logo} //logo path
                  alt="Logo"
                  width={40}
                />
              </Typography>
              <Typography
                variant="p"
                component="div"
                color={colors.primary}
                fontWeight={"bold"}
              >
                Université Espoir
              </Typography>
            </ListItem>
          </List>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <List>
            <ListItem>
              <Typography marginLeft={2}>
                <img
                  src={logo} //logo path
                  alt="Logo"
                  width={40}
                />
              </Typography>
              <Typography
                variant="p"
                component="div"
                color={colors.primary}
                fontWeight={"bold"}
              >
                Université Espoir
              </Typography>
            </ListItem>
          </List>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideNavigation.propTypes = {
  window: PropTypes.func,
};

export default SideNavigation;

import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNavigation from "./Drawer";
export default function Layout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavigation />
        <Outlet />
      </Box>
    </>
  );
}

import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNavigation from "./Drawer";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <Box sx={{ display: "flex"}}>
        <SideNavigation />
        <Outlet />
        <Footer/>
      </Box>
    </>
  );
}

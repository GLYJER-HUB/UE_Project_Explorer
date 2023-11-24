import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import DrawerNav from "./Sidenav";
export default function Layout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DrawerNav />
        <Outlet />
      </Box>
    </>
  );
}

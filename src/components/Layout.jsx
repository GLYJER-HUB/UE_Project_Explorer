import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNavigation from "./Drawer";
import Footer from "./Footer";
import { SearchProvider } from "./SearchContext";
export default function Layout() {
  return (
    <>
      <SearchProvider>
        <Box sx={{ display: "flex" }}>
          <SideNavigation />
          <Outlet />
          <Footer />
        </Box>
      </SearchProvider>
    </>
  );
}

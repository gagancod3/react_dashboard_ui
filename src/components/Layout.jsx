import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const drawerWidth = 72;

export default function Layout() {
  return (
    <Box sx={{ display: "flex", minHeight: "10vh" }}>
      <CssBaseline />
      {/* <Toolbar /> */}

      {/* Top App Bar */}
      <Header drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      {/* Main Content */}
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#bdbdbd",
          p: 3,
          mt: 8, // height of AppBar
          minHeight: "calc(100vh - 64px)",
        }}
      >
      </Box> */}
        <Outlet />

      {/* Footer */}
      <Footer drawerWidth={drawerWidth} />
    </Box>
  );
}

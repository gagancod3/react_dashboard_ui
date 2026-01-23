import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import AnalyticsIcon from "@mui/icons-material/Analytics";
// import TuneIcon from "@mui/icons-material/Tune";
import { NavLink } from "react-router-dom";

const Sidebar = ({ drawerWidth }) => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Search", icon: <SearchIcon />, path: "/search" },
    { text: "Analytics", icon: <AnalyticsIcon />, path: "/analytics" },
  ];

  return (
    <Drawer variant="permanent" 
     sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          alignItems: "center",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
              {/* <ListItemText primary={item.text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

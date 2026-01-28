import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  // Menu,
  // MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../store/slices/authSlice";
// import { useNavigate } from "react-router-dom";

export default function Header({ drawerWidth }) {
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleIconClick = (e) => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   } else {
  //     setAnchorEl(e.currentTarget);
  //   }
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   setAnchorEl(null);
  //   navigate("/login");
  // };

  return (
    <AppBar 
    position="fixed" 
     sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: `${drawerWidth}px`,
      }}
      >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          App Name
        </Typography>

        {/* <IconButton color="inherit" onClick={handleIconClick}> */}
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>

        {/* {isAuthenticated && (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem disabled>{user?.name}</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        )} */}
      </Toolbar>
    </AppBar>
  );
}

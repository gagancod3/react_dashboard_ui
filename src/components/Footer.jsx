import { Box, Typography } from "@mui/material";

export default function Footer({ drawerWidth }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        bgcolor: "#e0e0e0",
        textAlign: "center",
        py: 1,
      }}
    >
      <Typography variant="body2">
        All rights reserved 2026
      </Typography>
    </Box>
  );
}

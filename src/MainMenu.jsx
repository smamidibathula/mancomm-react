import React from "react";
import { Box, Stack } from "@mui/material";
import CalendarLayout from "./views/Layouts/CalendarLayout.jsx";
import NavBar from "./NavBar.jsx";

export default function MainMenu() {
  return (
    <Box
      bgcolor="#EFF7F7"
      height={800}
      sx={{
        borderRadius: "30px",
        margin: "60px",
        "@media (max-width: 200px)": {
          margin: "20px",
        },
      }}
    >
      <Stack direction="row" spacing={1}>
        <NavBar />
        <CalendarLayout />
      </Stack>
    </Box>
  );
}

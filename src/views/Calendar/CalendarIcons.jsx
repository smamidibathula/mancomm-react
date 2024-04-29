import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Person3Icon from "@mui/icons-material/Person3";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export default function CalendarIcons() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Grid container p={2} spacing={1} alignItems="center">
        <Grid item>
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={1} color="primary">
              <MailOutlineIcon />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item>
          <NotificationsNoneIcon />
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          {" "}
          <Typography variant="body2">Thomas Gepsan</Typography>
        </Grid>
        <Grid item>
          {" "}
          <Person3Icon />{" "}
        </Grid>
      </Grid>
    </Box>
  );
}

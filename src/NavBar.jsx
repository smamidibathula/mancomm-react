import React from "react";
import {
  Box,
  Tab,
  Tabs,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Teams from "./views/Charts/Teams.jsx";
import DashBoardLayout from "./views/Layouts/DashBoardLayout.jsx";

const NavBar = () => {
  const [value, setValue] = React.useState("overview");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box flex={4} height={800} sx={{ borderRadius: "30px", margin: "40px" }}>
      <TabContext value={value} sx={{ justifyContent: "right" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant={isSmallScreen ? "scrollable" : "standard"}
          scrollButtons={isSmallScreen ? "auto" : "off"}
          centered={!isSmallScreen}
        >
          <Tab
            label="Overview"
            value="overview"
            component={Link}
            to="/overview"
            className="navText"
          />
          <Tab
            label="Report"
            value="report"
            component={Link}
            to="/report"
            className="navText"
          />
          {isSmallScreen ? (
            <Tab icon={<SearchIcon />} />
          ) : (
            <Tab
              label={
                <TextField
                  label="Search Rooms"
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    border: "none",
                    marginLeft: "40px",
                    borderRadius: "40px",
                    width: "300px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    textTransform: "lowercase",
                  }}
                />
              }
            />
          )}
        </Tabs>
        <TabPanel value="overview" sx={{ width: "100%" }}>
          <DashBoardLayout />
        </TabPanel>
        <TabPanel value="report" sx={{ width: "100%", maxWidth: "100%" }}>
          <Teams />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default NavBar;

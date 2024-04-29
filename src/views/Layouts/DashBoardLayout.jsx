import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Grid,
  Tab,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import BookingContent from "../mainDashboard/BookingContent";

import ManageDropDown from "../mainDashboard/ManageDropDown";
import MaleFemale from "../Charts/MaleFemale";

export default function DashBoardLayout() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { text: 'Booking', component: <BookingContent /> },
    { text: 'Numbers', component: <MaleFemale /> },
    { text: 'Customization'},
    { text: 'Locality'},
  ];

  const [activeTab, setActiveTab] = useState("Booking");
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleMenuItemClick = (text) => {
    setSelectedMenuItem(text);
    setDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  
  return (
    <>
      <Box name="dashboardBox" p={3}>
        <Grid container spacing={2} alignItems="center">
          {!isSmallScreen && (
            <Grid item xs={10}>
              <Typography variant="h5">Main Dashboard</Typography>
            </Grid>
          )}
          {!isSmallScreen && (
            <Grid item xs={2}>
              <ManageDropDown />
            </Grid>
          )}
        </Grid>

        <Box sx={{
    marginTop: "10px",
    "& .MuiTabs-flexContainer": {
      justifyContent: "left !important",
    },
  }}>
          {!isSmallScreen ? (
            <>
              <TabContext value={activeTab} className="justifyLeft">
                <TabList
                  value={activeTab}
                  onChange={handleTabChange}
                  textColor="primary"
                  scrollButtons="auto"
                  centered
                  sx={{ "& .Mui-selected": { borderBottom: "none" } }}
                >
                  <Tab label="Booking" className="navText" value="Booking" />
                  <Tab
                    label="Numbers"
                    className="navText"
                    value="Numbers"
                  />
                  <Tab
                    label="Customization"
                    className="navText"
                    value="Something"
                  />
                  <Tab label="Locality" className="navText" value="Other" />
                </TabList>
                <TabPanel value="Booking">
                  <BookingContent />
                </TabPanel>
                <TabPanel value="Numbers">
                  <MaleFemale/>
                </TabPanel>
                <TabPanel value="Something">
                  Customization content goes here
                </TabPanel>
                <TabPanel value="Other">Locality content goes here</TabPanel>
              </TabContext>
            </>
          ) : (
            <>
      <IconButton onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={item.text}
              selected={selectedMenuItem === item.text}
              onClick={() => handleMenuItemClick(item.text)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {selectedMenuItem && menuItems.find((item) => item.text === selectedMenuItem)?.component}
    </>
          )}
        </Box>
      </Box>
    </>
  );
}

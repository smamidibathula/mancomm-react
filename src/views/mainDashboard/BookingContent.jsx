import React from "react";
import {
  Box,
  Grid
} from "@mui/material";
import Typography from "@mui/material/Typography";
import SsidChartIcon from "@mui/icons-material/SsidChart";


export default function BookingContent() {
  return (
    <Grid container alignContent="center" spacing={5}>
      <Grid item lg={2} sm={6} md={4} direction="column">
        <Box
          sx={{
            width: 80,
            height: 80,
            marginBottom: "40px",
            borderRadius: 3,
            bgcolor: "white",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
          <Typography
            variant="caption"
            gutterBottom
            sx={{ color: "grey", fontSize: "0.45rem", padding: "10px" }}
          >
            Today's Earnings
          </Typography>
          <br />
          <Typography variant="caption" gutterBottom sx={{ padding: "10px" }}>
            $2185
          </Typography>
          <br />
          <SsidChartIcon
            fontSize="large"
            sx={{ padding: "0 10px", color: "#006566" }}
          />
        </Box>
        <Box
          sx={{
            width: 200,
            height: 100,
            borderRadius: 3,
            bgcolor: "#006566",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
          <Typography
            variant="h6"
            color="white"
            gutterBottom
            sx={{
              padding: "20px 10px 0",
              margin:"0"
            }}
          > 20% OFF
          </Typography>
          <Typography
            variant="caption"
            color="#9DC4C3"
            gutterBottom
            fontSize="0.6rem"
            lineHeight="0"
            sx={{
              padding: "0 10px"
            }}
          >
          On your first booking
          </Typography>

        </Box>
      </Grid>
      <Grid item lg={2.5} sm={6} md={5}>
        <Box
          sx={{
            width: 100,
            height: 80,
            borderRadius: 3,
            bgcolor: "#FFBC00",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
          <Typography
            variant="caption"
            gutterBottom
            sx={{
              padding: "0 10px",
              lineHeight: "4",
              fontSize: "0.65rem",
              fontWeight: "600",
            }}
          >
            Demographics
          </Typography>
          <Typography
            variant="h4"
            sx={{ padding: "0 10px", textAlign: "center" }}
          >
            20
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={4} sm={6} md={6}>
        <Box
          sx={{
            width: 200,
            height: 250,
            borderRadius: 3,
            bgcolor: "red",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
         <img src={"../../../public/images.jpeg"} alt="Sample" style={{ width: '100%', height: '100%' }} />

        </Box>
      </Grid>
      <Grid item lg={3} sm={6} spacing={5} direction="column">
        <Box
          sx={{
            width: 100,
            height: 120,
            borderRadius: 3,
            marginLeft: "20px",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
          <Typography
            variant="caption"
            gutterBottom
            sx={{ color: "grey", fontSize: "0.45rem", padding: "10px" }}
          >
            Today's Earnings
          </Typography>
          <br />
          <Typography variant="caption" gutterBottom sx={{ padding: "10px" }}>
            $2185
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

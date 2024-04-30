import React from 'react'
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import SsidChartIcon from "@mui/icons-material/SsidChart";


export default function Box3() {
  return (
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
  )
}

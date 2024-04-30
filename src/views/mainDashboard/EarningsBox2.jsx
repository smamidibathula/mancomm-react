
import React from 'react'
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function EarningsBox2() {
  return (
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
  )
}


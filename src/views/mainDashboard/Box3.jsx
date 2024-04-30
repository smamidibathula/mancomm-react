import React from 'react'
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Box3() {
  return (
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
  )
}

import React from 'react'
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Box1() {
  return (
    <Box
    sx={{
      width: 270,
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
  )
}

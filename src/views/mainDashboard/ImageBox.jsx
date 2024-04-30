import React from 'react'
import {Box} from "@mui/material";


export default function ImageBox() {
  return (
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
<img src={"images.jpeg"} alt="Sample" style={{ width: '100%', height: '100%' }} />

</Box>
  )
}



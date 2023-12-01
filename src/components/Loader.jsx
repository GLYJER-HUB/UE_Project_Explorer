import React from 'react'
import { ShimmerPostItem } from "react-shimmer-effects";
import {Grid} from "@mui/material";
function Loader() {
  return (
    <Grid container spacing={1} mt={2} columns={{ sm: 8, md: 12 }}>
      {Array.from({ length: 12 }, (_, index) => (
        <Grid item xs={4} key={index}>
          <ShimmerPostItem
            card
            title
            cta
            imageType="thumbnail"
            imageWidth={80}
            imageHeight={80}
            contentCenter
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Loader
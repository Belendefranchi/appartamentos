import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { BoxAmenities } from "../atom/Details/BoxAmenities";

export const DescriptionDetail = ({
  name,
  hostThumbnail,
  previewAmenities,
}) => {
  return (
<Grid item xs={12} sm={8}>
  <Grid container spacing={2} mt={1}>
    <Grid item xs={10}>
      <Typography variant="h4">{name}</Typography>
    </Grid>
    <Grid item xs={2}>
      <img
        style={{ width: "4rem", borderRadius: "50%" }}
        src={hostThumbnail}
        alt={name}
      />
    </Grid>
  </Grid>
  <Grid container spacing={2} mt={1}>
    {previewAmenities?.map((amenities, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <BoxAmenities amenities={amenities} />
      </Grid>
    ))}
  </Grid>
</Grid>

  );
};

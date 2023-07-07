import { Grid, Typography } from "@mui/material";
import React from "react";

export const TitleDetail = ({title}) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ pb: 2 }} variant="h3" component="h2">
          {title}
        </Typography>
      </Grid>
    </>
  );
};

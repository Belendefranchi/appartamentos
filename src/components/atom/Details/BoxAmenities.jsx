import { Box, Typography } from "@mui/material";
import React from "react";

export const BoxAmenities = ({ amenities }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 100,
          border: "1px solid #0000001d",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
        }}
      >
        <Typography variant="h5">{amenities}</Typography>
      </Box>
    </>
  );
};

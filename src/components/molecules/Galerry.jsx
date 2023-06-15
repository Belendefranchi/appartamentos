import { Box, Grid } from "@mui/material";
import React from "react";

export const Galerry = ({detail}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: "100%", height: 450 }}>
          <img
            src={detail?.images[0]}
            alt={detail?.images[0]}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "3rem",
              borderBottomLeftRadius: "3rem",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {detail?.images.slice(1, 5).map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box sx={{ width: "100%", height: 220 }}>
                <img
                  src={item}
                  alt={item}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

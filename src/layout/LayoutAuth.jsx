import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const LayoutAuth = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component="div" elevation={6}>
        <Container maxWidth="sm">
          <Outlet />
        </Container>
      </Grid>
    </Grid>
  );
};

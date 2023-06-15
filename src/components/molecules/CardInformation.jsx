import { Box, Button, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { ListItemDetail } from "../atom/Details/ListItemDetail";

export const CardInformation = ({total, currency, rating, priceItems}) => {
  return (
    <>
      <Grid item xs={4}>
        <Box
          sx={{
            width: "100%",
            height: 620,
            border: "1px solid #0000001c",
            borderRadius: 4,
          }}
          p={4}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h4">
                ${total}{" "}
                {currency}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">☆ {rating}</Typography>
            </Grid>
            <Typography variant="h6">
              No vamos a cobrarte ningún cargo por el momento
            </Typography>
            <Grid mt={3} item xs={12}>
              <Button
                color="secondary"
                sx={{ width: "100%", p: 2, fontSize: "1.4rem" }}
                variant="contained"
              >
                Reservar
              </Button>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                {priceItems?.map((value, i) => (
                  <ListItemDetail key={i} title={value.title}/>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

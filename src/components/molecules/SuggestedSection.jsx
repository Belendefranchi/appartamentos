import { Grid, Typography } from "@mui/material";
import {  useMemo } from "react";
import { CardProperty } from "./CardProperty";
import { usePropertyStore } from "../../store/useProperty";

export const SuggestedSection = () => {

  const {property} = usePropertyStore()

  const filteredProperties = useMemo(() => {
    return property;
  }, [property]);

  return (
    <div>
      <Typography
        variant="h5"
        sx={{ paddingTop: "2rem", borderBottom: "solid 1px #00000014" }}
      >
        Sugerencias para tí
      </Typography>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{paddingTop: '2rem'}}
      >
        {filteredProperties.map((product) => (
          <CardProperty key={product.id} property={product} />
        ))}
      </Grid>
    </div>
  );
};

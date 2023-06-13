import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { Input } from "../atom/Form/Input";

export const TableSearch = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "5vh",
        paddingTop: "2rem",
        display: "flex",
        placeItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <FormGroup sx={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
          <FormControlLabel control={<Checkbox />} label="Alquiler" />
          <FormControlLabel control={<Checkbox />} label="Compra" />
          <FormControlLabel control={<Checkbox />} label="Alquiler Temporal" />
        </FormGroup>
        <Input label='Buscar lugar' name='search__location'/>
      </Box>
    </Box>
  );
};

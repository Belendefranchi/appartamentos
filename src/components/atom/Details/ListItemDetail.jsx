import { ListItem, ListItemText } from "@mui/material";
import React from "react";

export const ListItemDetail = ({title}) => {
  return (
    <ListItem disableGutters>
      <ListItemText primary={title} />
    </ListItem>
  );
};

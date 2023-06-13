import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import './CardProperty.css'

import React from "react";
import { useNavigate } from "react-router-dom";
import { usePropertyStore } from "../../store/useProperty";

export const CardProperty = ({ property }) => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(`/detalle/${property.id}`)
  }

  return (
    <Grid item xs={12} sm={6} md={3} lg={4} onClick={handleRedirect}>
      <Card sx={{ maxWidth: 325, height: '100%', boxShadow: 'none', padding: '.2rem' }} className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            sx={{borderRadius: '2rem'}}
            image={property.images[0]}
            alt={property.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {property.address}
            </Typography>
            <Typography variant="h6"  color="text.secondary">
              {property.type}
            </Typography>
            <Typography gutterBottom variant="h6" fontSize=".9rem">
              Location: {property.city}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

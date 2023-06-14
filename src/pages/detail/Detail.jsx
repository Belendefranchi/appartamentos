import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePropertyStore } from "../../store/useProperty";

const Detail = () => {
  const [detailProperty, setDetailProperty] = useState(null);
  const { id } = useParams();

  const property = usePropertyStore((state) => state.property);

  useEffect(() => {
    const filterPropertDetail = () => {
      const data = property.find((p) => p.id == id);
      setDetailProperty(data);
    };
    filterPropertDetail();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ pt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ pb: 2 }} variant="h3" component="h2">
            {detailProperty?.type}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", height: 450 }}>
            <img
              src={detailProperty?.images[0]}
              alt={detailProperty?.images[0]}
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
            {detailProperty?.images.slice(1, 5).map((item, index) => (
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
        <Grid item xs={8}>
          <Grid container xs={12} spacing={2} mt={1}>
            <Grid item xs={10}>
              <Typography variant="h4">{detailProperty?.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <img
                style={{ width: "4rem", borderRadius: "50%" }}
                src={detailProperty?.hostThumbnail}
                alt={detailProperty?.name}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} spacing={2} mt={1}>
            {detailProperty?.previewAmenities.map((amenities) => (
              <Grid item xs={3} key={amenities}>
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
              </Grid>
            ))}
          </Grid>
        </Grid>
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
                  ${detailProperty?.price?.total}{" "}
                  {detailProperty?.price?.currency}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">☆ {detailProperty?.rating}</Typography>
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
                  {detailProperty?.price?.priceItems.map((value, i) => (
                    <ListItem
                      key={i}
                      disableGutters
                    >
                      <ListItemText primary={value.title} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;

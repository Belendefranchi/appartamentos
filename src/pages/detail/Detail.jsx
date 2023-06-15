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
import { Galerry } from "../../components/molecules/Galerry";
import { TitleDetail } from "../../components/molecules/TitleDetail";
import { DescriptionDetail } from "../../components/molecules/DescriptionDetail";
import { CardInformation } from "../../components/molecules/CardInformation";

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
        <TitleDetail title={detailProperty?.type} />
        <Galerry detail={detailProperty} />
        <DescriptionDetail
          name={detailProperty?.name}
          hostThumbnail={detailProperty?.hostThumbnail}
          previewAmenities={detailProperty?.previewAmenities}
        />
        <CardInformation
          total={detailProperty?.price?.total}
          currency={detailProperty?.price?.currency}
          rating={detailProperty?.rating}
          priceItems={detailProperty?.price?.priceItems}
        />
      </Grid>
    </Container>
  );
};

export default Detail;

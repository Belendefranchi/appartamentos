import { Container, Grid, Typography } from "@mui/material";
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
    <Container>
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }} columns={16}>
        <Grid xs={8}>
          <img src={detailProperty?.images[0]} alt="" />
        </Grid>
        <Grid xs={8}>
          <Typography>
            {detailProperty?.name}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;

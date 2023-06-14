import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MenuCategory.css'
import { Box } from '@mui/material';
import ImgCarrousel from '../../assets/png-clipart-taobao-lynx-home-design-banner-background-decoration.png';


export const MenuCategory = () => {
  return (
    <Box>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
      >
        <img src={ImgCarrousel} alt="Carrousel Img-1" />
        <img src={ImgCarrousel} alt="Carrousel Img-2" />
        <img src={ImgCarrousel} alt="Carrousel Img-3" />
        <img src={ImgCarrousel} alt="Carrousel Img-4" />
      </Carousel>
    </Box>
  );
};

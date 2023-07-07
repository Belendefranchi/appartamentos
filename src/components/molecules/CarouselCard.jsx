import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from '../theme/commonStyles';

import './CarouselCard';

export const CarouselCard = ({ location }) => {

  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box sx={fixedIcon}>
      </Box>



      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: 'transparent' }}
          position="static"
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3">ads </Typography>
          <Typography component="h4"> asd</Typography>
          <Typography component="h5">asd </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

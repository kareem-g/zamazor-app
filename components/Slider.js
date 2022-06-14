import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" padding="15px">
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        // dynamicHeight={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
        interval={1500}
        stopOnHover={true}
      >
        <div backgroundColor="#000">
          <img src="https://via.placeholder.com/150x150" />
        </div>
        <div backgroundColor="#000" width="10%" height="10%">
          <img src="https://via.placeholder.com/150x150" />
        </div>
      </Carousel>
    </Grid>
  );
};

export default Slider;

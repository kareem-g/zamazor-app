import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Box
      sx={{ width: "50%", height: "100%" }}
      justifyContent="center"
      alignItems="center"
    >
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        // dynamicHeight={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        // swipeable={true}
        // emulateTouch={true}
        // autoPlay={true}
        interval={1500}
        // stopOnHover={true}
      >
        <div>
          <Card
            variant="div"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#000",
            }}
          >
            <img
              src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png"
              height="400px"
              // width="auto"
              loading="lazy"
            />
          </Card>
        </div>
        <div>
          <Card
            variant="div"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#000",
            }}
          >
            <img
              src="https://amymhaddad.s3.amazonaws.com/oriental-tiles.png"
              height="400px"
              // width="auto"
              loading="lazy"
            />
          </Card>
        </div>
        <div>
          <Card
            variant="div"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#000",
            }}
          >
            <img
              src="https://amymhaddad.s3.amazonaws.com/oriental-tiles.png"
              height="400px"
              width="auto"
              loading="lazy"
            />
          </Card>
        </div>
      </Carousel>
    </Box>
  );
};

export default Slider;

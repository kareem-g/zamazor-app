import { Box, Button, Stack, Typography } from "@mui/material";

import React from "react";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          mt: { lg: "200px", xs: "70px" },
          ml: { sm: "50px" },
          backgroundColor: "#f9f9f9",
        }}
        position="relative"
        p="20px"
      >
        <Typography
          color="#292d32"
          variant="h1"
          fontWeight="700"
          sx={{ fontSize: { lg: "75px", xs: "40px" } }}
        >
          The Best Bags <br />
          for Catchers, <br />
          with a large size
        </Typography>

        <Typography
          fontSize="22px"
          color="gray"
          lineHeight="35px"
          marginTop="20px"
        >
          Made for guy down in the the dirt Behind the dish, <br />
          the EvoShield StoneWall Wheeled Bag is changing the game.
        </Typography>

        <Stack direction="row">
          <Box
            href="#"
            variant="button"
            className="btn btn-buyNow"
            style={{
              textDecoration: "none",
              textAlign: "center",
              background: "#428cfd",
              textTransform: "none",
              color: "white",
              borderRadius: "40px",
            }}
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              width: { xs: "150px", md: "150px" },
              padding: { xs: "14px", md: "14px" },
              marginTop: { xs: "50px", md: "45px" },
            }}
          >
            Buy Now
          </Box>

          <Box
            href="#"
            variant="button"
            className="btn btn-learnMore"
            style={{
              marginLeft: "10px",
              color: "gray",
              textAlign: "center",
              background: "transparent",
              textTransform: "none",
              borderRadius: "40px",
            }}
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              width: { xs: "150px", md: "150px" },
              padding: { xs: "14px", md: "14px" },
              marginTop: { xs: "50px", md: "45px" },
            }}
          >
            Learn More
          </Box>
        </Stack>

        <Typography
          fontWeight={600}
          color="#428cfd"
          sx={{
            opacity: "0.1",
            display: { lg: "block", xs: "none" },
            fontSize: "200px",
          }}
        >
          Football
        </Typography>
        <img
          src="https://www.4sportsgroup.com/userfiles/lg_images/Tarcisio-Trolley-Bag.png"
          alt="hero-banner"
          className="hero-banner-img"
        />
      </Box>
    </>
  );
};

export default Hero;

import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import data from "../../data.json";
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION,
} from "react-image-magnifiers";

import { Link as MUILink } from "@mui/material";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: "60px 30px",
          display: { xs: "flex", lg: "block" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Typography
          variant="h8"
          sx={{
            textTransform: "uppercase",
            fontWeight: "500",
            display: { xs: "none", lg: "block" },
          }}
        >
          <Link passHref href="/">
            <MUILink color="#000" underline="none">
              go back
            </MUILink>
          </Link>
        </Typography>
        <Box
          component="div"
          sx={{
            marginTop: "30px",
            height: { lg: "500px", xs: "400px" },
            width: { lg: "750px", xs: "600px" },
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        >
          <MagnifierContainer
            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}
          >
            <MagnifierPreview imageSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
            <MagnifierZoom
              style={{ height: "250px", width: "250px", marginTop: "10px" }}
              imageSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
          </MagnifierContainer>
        </Box>
      </Box>
    </>
  );
};

export default Product;

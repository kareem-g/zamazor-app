import React from "react";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION,
} from "react-image-magnifiers";

import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import Reviews from "./Reviews";

const ProductItemPage = (props) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          padding: "60px 30px",
        }}
      >
        <Typography
          display="flex"
          component="div"
          variant="h8"
          sx={{
            textTransform: "uppercase",
            fontWeight: "500",
            display: { xs: "none", md: "block" },
          }}
        >
          <Link passHref href="/">
            <MUILink color="#000" underline="none">
              go back
            </MUILink>
          </Link>
        </Typography>

        <div className="product-page">
          <Box
            component="div"
            variant="div"
            className="product-page-element"
            sx={{
              marginRight: { xs: "10px", md: "0px" },
              justifyContent: { xs: "center", md: "block" },
              alignItems: { xs: "center", md: "none" },
              display: "flex",
              // height: { lg: "200px", xs: "100px" },
            }}
          >
            <Box
              component="div"
              variant="div"
              sx={{
                marginTop: "30px",
                // height: { lg: "500px", xs: "400px" },
                width: { lg: "650px", xs: "600px" },
                height: "600px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <MagnifierContainer
                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
                mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}
              >
                <MagnifierPreview imageSrc="https://cdn.shopify.com/s/files/1/0004/0655/2612/products/WTV7115BL_4_Evo_XVT_Batting_Helmet_Matte_Black.png?v=1640842242" />
                <MagnifierZoom
                  style={{ height: "250px", width: "250px", marginTop: "10px" }}
                  imageSrc="https://cdn.shopify.com/s/files/1/0004/0655/2612/products/WTV7115BL_4_Evo_XVT_Batting_Helmet_Matte_Black.png?v=1640842242"
                />
              </MagnifierContainer>
            </Box>
          </Box>

          <Box
            component="div"
            className="product-page-element"
            sx={{
              marginTop: { xs: "150px", lg: "0px" },
            }}
          >
            <Typography
              component="div"
              className="product-details-title"
              style={{
                color: "#292d32",
                textTransform: "uppercase",
                fontSize: "38px",
                fontWeight: "bold",
              }}
            >
              XVT™ Luxe fitted batting <br /> helmet
            </Typography>

            <Box component="div">
              <Box className="product-details" component="div">
                <Typography
                  component="div"
                  className="product-details-item"
                  display="flex"
                  style={{ color: "#808080" }}
                >
                  Brand:
                  <Typography
                    component="div"
                    marginLeft="6px"
                    style={{ color: "#000" }}
                  >
                    EvoShield
                  </Typography>
                </Typography>

                <Typography
                  component="div"
                  className="product-details-item"
                  display="flex"
                  style={{ color: "#808080" }}
                >
                  Stock:
                  <Typography
                    component="div"
                    marginLeft="6px"
                    style={{ color: "#000" }}
                  >
                    200
                  </Typography>
                </Typography>

                <Typography
                  component="div"
                  className="product-details-item"
                  display="flex"
                  style={{ color: "#808080" }}
                >
                  Category:
                  <Typography
                    component="div"
                    marginLeft="6px"
                    style={{ color: "#000" }}
                  >
                    Helmet
                  </Typography>
                </Typography>

                <div id="divider" />

                <Typography
                  component="div"
                  className="product-details-item"
                  display="flex"
                  style={{
                    color: "#808080",
                  }}
                >
                  Condation:
                  <Typography
                    component="div"
                    marginLeft="6px"
                    style={{ color: "#000" }}
                  >
                    New
                  </Typography>
                </Typography>

                <Typography
                  component="div"
                  className="product-details-item"
                  display="flex"
                  style={{ color: "#808080" }}
                >
                  Heavy:
                  <Typography
                    component="div"
                    marginLeft="6px"
                    style={{ color: "#000" }}
                  >
                    1Kg
                  </Typography>
                </Typography>
              </Box>

              <Stack
                component="div"
                direction="column"
                className="product-details-price"
              >
                <Typography
                  component="div"
                  className="product-price"
                  display="flex"
                  style={{
                    color: "#292d32",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  $ 59.99
                </Typography>

                <Typography
                  component="div"
                  className="product-price-discount"
                  display="flex"
                  style={{
                    color: "#808080",
                    fontSize: "18px",
                    fontWeight: "400",
                    textDecoration: "line-through",
                  }}
                >
                  99.99 USD
                </Typography>
                <Box
                  component="div"
                  justifyContent="flex-start"
                  alignItems="center"
                  marginTop="50px"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Checkbox
                    icon={<FavoriteBorderOutlined />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </Box>
              </Stack>

              <Box
                component="div"
                className="product-details-btn"
                display="flex"
                sx={{
                  justifyContent: { sx: "center", lg: "flex-end" },
                  flexDirection: { xs: "column", lg: "row" },
                  marginRight: { xs: "0px", lg: "80px" },
                  alignItems: { xs: "center", lg: "center" },
                }}
              >
                <Box
                  component="div"
                  href="#"
                  variant="text"
                  style={{
                    textAlign: "center",
                    background: "#fff",
                    textTransform: "lowercase",
                    fontWeight: "400",
                    color: "#292d32",
                  }}
                  sx={{
                    fontSize: { xs: "14px", md: "14px" },
                    // width: { xs: "150px", md: "150px" },
                    padding: "14px",
                    // marginTop: { xs: "50px", md: "45px" },
                    marginRight: { xs: "0px", lg: "20px" },
                  }}
                >
                  *Ships to South Africa
                </Box>

                <Box
                  component="div"
                  href="/"
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
                    fontSize: { xs: "16px", md: "18px" },
                    width: { xs: "150px", md: "150px" },
                    padding: { xs: "14px", md: "14px" },
                    // marginTop: { xs: "50px", md: "45px" },
                  }}
                >
                  Add To Cart
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
        <Reviews />
      </Box>
    </>
  );
};

export default ProductItemPage;

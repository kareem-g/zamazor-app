import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

import { Link as MUILink } from "@mui/material";
import {
  Favorite,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Hearing,
  StarsRounded,
} from "@mui/icons-material";

const ProductCard = (props) => {
  return (
    <>
      <Card
        sx={{
          height: "440px",
          width: "280px",
          // padding: "10px",
          marginBottom: "12px",
          boxShadow: "0",
          className: "product",
        }}
      >
        {/* <CardMedia
          component="img"
          // height="120"
          image={props.image}
          alt=""
          sx={{ borderRadius: "6px" }}
          // width="50px"
          height="250px"
        /> */}

        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          overflow="hidden"
          borderRadius="6px"
          backgroundColor="#f9f9f9"
          height="280px"
          width="100%"
        >
          <img
            src={props.image}
            alt={props.title}
            // width="auto"
            justifyContent="center"
            alignItems="center"
            display="flex"
            height="100px"
          />
        </Box>

        <CardContent>
          <Link href={props.link}>
            <MUILink
              underline="none"
              variant="Button"
              component="div"
              href="/Cart"
              // noWrap
              sx={{
                lineHeight: "28px",
                mb: "15px",
                color: "black",
                cursor: "pointer",
                // fontSize: { lg: "1em", xs: "1em" },
                maxHeight: { lg: "40px", xs: "60px" },
              }}
            >
              {props.title}
            </MUILink>
          </Link>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              paddingTop: { xs: "10px" },
              // fontSize: { lg: "1em", xs: ".8em" },
            }}
          >
            <Typography
              variant="h8"
              color="#354259"
              alignItems="center"
              // fontSize="16px"
              sx={{
                display: "flex",
                flexDirection: "row",
                fontWeight: "600",
                fontSize: { lg: "1rem", xs: ".8rem" },
              }}
            >
              {/* <StarsRounded
                style={{
                  color: "#FF9529",
                  // fontSize: { lg: "1.5rem", xs: "12px" },
                  fontSize: "22px",
                  marginRight: "2px",
                }}
              /> */}
              <Rating
                name="read-only"
                value={props.rate}
                readOnly
                style={{
                  color: "#FF9529",
                  // fontSize: { lg: "1.5rem", xs: "12px" },
                  fontSize: "22px",
                  marginRight: "2px",
                }}
              />
              {/* {props.rate} */}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              alignItems="flex-end"
              display="flex"
              margin="3px"
              fontSize=".8rem"
            >
              ({props.count})
            </Typography>
          </Stack>

          <Typography
            variant="h4"
            color="#000"
            sx={{
              marginTop: "16px",
              fontSize: { lg: "22px", xs: "18px" },
              // fontSize: { lg: "1.5em", xs: "1em" },
              fontWeight: "bold",
            }}
          >
            ${props.price}
            {/* <Checkbox
              id={props.id}
              sx={{
                position: "relative",
                left: "160px",
              }}
              icon={<FavoriteBorderOutlined />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            /> */}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;

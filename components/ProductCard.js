import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import { Link as MUILink } from "@mui/material";
import { StarsRounded } from "@mui/icons-material";

const ProductCard = (props) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          padding: "10px",
          // margin: "12px",
          boxShadow: "2",
        }}
      >
        <CardMedia
          component="img"
          height="120"
          image={props.image}
          alt="green iguana"
          sx={{ borderRadius: "6px" }}
        />
        <CardContent>
          <Link href="/Cart">
            <MUILink
              underline="none"
              variant="Button"
              component="div"
              href="/Cart"
              // noWrap
              sx={{
                lineHeight: "28px",
                mb: "40px",
                color: "black",
                cursor: "pointer",
                fontSize: "22px",
                maxHeight: "30px",
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
            }}
          >
            <Typography
              variant="h8"
              color="#354259"
              alignItems="center"
              fontSize="16px"
              sx={{ display: "flex", flexDirection: "row", fontWeight: "600" }}
            >
              <StarsRounded
                style={{ color: "#FF9529", fontSize: "30", marginRight: "2px" }}
              />
              {props.rate}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              alignItems="flex-end"
              display="flex"
              margin="3px"
              fontSize="12px"
            >
              ({props.count})
            </Typography>
          </Stack>

          <Typography variant="h4" color="#000" sx={{ mt: "16px" }}>
            ${props.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;

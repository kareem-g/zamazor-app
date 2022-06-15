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
          alt=""
          sx={{ borderRadius: "6px" }}
        />
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
                mb: "45px",
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
              <StarsRounded
                style={{
                  color: "#FF9529",
                  // fontSize: { lg: "1.5rem", xs: "12px" },
                  fontSize: "22px",
                  marginRight: "2px",
                }}
              />
              {props.rate}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              alignItems="flex-end"
              display="flex"
              margin="3px"
              fontSize=".7rem"
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
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;

import { Stack, Typography, Box } from "@mui/material";
import React from "react";

// #428cfd
// #f97778
// #af85ee
// #61a3a1

const offerItem = (props) => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "450px", md: "700px" },
          height: { xs: "200px", md: "250px" },
          padding: "15px",
          borderRadius: "45px",
        }}
        backgroundColor={props.Color}
      >
        <Stack
          alignItems="flex-start"
          justifyContent="center"
          marginTop="10px"
          sx={{
            marginLeft: { xs: "70px", md: "120px" },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "400",
              fontSize: { xs: "16px", md: "24px" },
            }}
          >
            {props.discount}% OFF
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "600",
              fontSize: { xs: "32px", md: "42px" },
              marginTop: "10px",
            }}
          >
            {props.title}
          </Typography>
          <Box
            href="#item"
            variant="button"
            className="btn btn-buyNowOffer"
            color={props.Color}
            // background={props.Color}
            style={{
              textDecoration: "none",
              textAlign: "center",
              background: "#fff",
              textTransform: "none",
              // color: "#428cfd",
              borderRadius: "40px",
            }}
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              width: { xs: "100px", md: "130px" },
              padding: "14px",
              marginTop: { xs: "20px", md: "35px" },
            }}
          >
            Buy Now
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default offerItem;

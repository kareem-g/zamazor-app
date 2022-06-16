import { Stack, Typography, Box } from "@mui/material";
import React from "react";

// #428cfd
// #f97778
// #af85ee
// #61a3a1

const CategoryItem = (props) => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "450px", md: "500px" },
          height: { xs: "200px", md: "250px" },
          padding: "15px",
          borderRadius: "45px",
        }}
        backgroundColor={props.Color}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          //   sx={{
          //     marginLeft: { xs: "70px", md: "120px" },
          //   }}
        >
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
              fontSize: { xs: "14px", md: "15px" },
              width: { xs: "120px", md: "130px" },
              padding: "14px",
              marginTop: { xs: "35px", md: "60px" },
            }}
          >
            View Product
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CategoryItem;

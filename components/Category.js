import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const data = [
    {
      id: 1,
      title: "Football Gear",
      discount: 30,
      color: "#428cfd",
    },
    {
      id: 2,
      title: "Baseball Gear",
      discount: 25,
      color: "#f97778",
    },
    {
      id: 3,
      title: "Lacrosse",
      discount: 15,
      color: "#af85ee",
    },
    {
      id: 4,
      title: "Fastpitch",
      discount: 20,
      color: "#61a3a1",
    },
  ];

  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        sx={{
          width: { xs: "450px", md: "700px" },
          height: { xs: "200px", md: "250px" },
          padding: "15px",
          borderRadius: "45px",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontWeight: "600",
            fontSize: { xs: "28px", md: "38px" },
            marginTop: "10px",
          }}
        >
          All Category
        </Typography>
      </Box>
      <Box justifyContent="center" alignItems="center" display="flex">
        <Grid container spacing={10}>
          {data.map((item) => (
            <Grid key={item.id} item md={6}>
              <Box key={item.id} variant="div">
                <CategoryItem
                  key={item.id}
                  title={item.title}
                  discount={item.discount}
                  Color={item.color}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Category;

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
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          fontWeight: "bold",
          color: "#292d32",
          fontSize: { xs: "28px", lg: "38px" },
          marginBottom: "35px",
        }}
      >
        All Categories
      </Typography>
      <div className="category-container">
        {data.map((item) => (
          <CategoryItem
            key={item.id}
            title={item.title}
            discount={item.discount}
            Color={item.color}
            className="category-item"
          />
        ))}
      </div>
    </>
  );
};

export default Category;

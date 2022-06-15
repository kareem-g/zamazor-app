import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import data from "../data.json";

const Products = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{
            lineHeight: "28px",
            color: "black",
            cursor: "pointer",
            fontSize: "22px",
            justifyContent: {
              lg: "flex-start",
              xs: "center",
            },
            alignItems: "center",
            fontWeight: "bold",
            margin: "20px",
            paddingTop: "30px",
          }}
          variant="body1"
        >
          Latest Products
        </Typography>
        <Grid container spacing={3}>
          {/* <ProductCard title={} desc={} image={} price={} /> */}

          {data &&
            data.map((i) => (
              <Grid item key={i.id} xs={6} md={4} lg={3}>
                <ProductCard
                  title={i.title}
                  count={i.rating.count}
                  rate={i.rating.rate}
                  image={i.image}
                  price={i.price}
                  link={`/product/${i.id}/`}
                  key={i.id}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;

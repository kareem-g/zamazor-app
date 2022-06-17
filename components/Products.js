import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import data from "../data.json";

const Products = () => {
  return (
    <>
      <div>
        <Typography
          sx={{
            lineHeight: "28px",
            display: "flex",
            color: "#428cfd",
            fontSize: "18px",
            justifyContent: {
              lg: "flex-start",
              xs: "center",
            },
            alignItems: "center",
            fontWeight: "500",
            marginLeft: { xs: "0px", md: "80px" },
            paddingTop: "30px",
          }}
          variant="h8"
        >
          Sport Gear
        </Typography>
        <Typography
          sx={{
            lineHeight: "28px",
            display: "flex",
            color: "black",
            fontSize: "32px",
            justifyContent: {
              lg: "flex-start",
              xs: "center",
            },
            alignItems: "center",
            fontWeight: "bold",
            marginLeft: { xs: "0px", md: "80px" },
            paddingTop: "30px",
          }}
          variant="h8"
        >
          Top Products
        </Typography>

        <main className="grid">
          {data &&
            data.map((i) => (
              <ProductCard
                key={i.id}
                id={i.id}
                title={i.title}
                count={i.rating.count}
                rate={i.rating.rate}
                image={i.image}
                price={i.price}
                link={`/product/${i.id}/`}
              />
            ))}
          {/* <div key={i.id}> */}
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export default Products;

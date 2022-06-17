import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import data from "../data";
import ProductCard from "./ProductCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <ArrowBack />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <ArrowForward />
    </Typography>
  );
};

const ProductsSlider = ({ props }) => {
  return (
    <>
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
          marginBottom: "40px",
        }}
        variant="h8"
      >
        Football Gear
      </Typography>
      <Box marginBottom="200px" className="box-wrapper">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {data.map((i) => (
            <Box
              key={i.id}
              itemId={i.id}
              title={i.title}
              component="div"
              m="0 40px"
            >
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
            </Box>
          ))}
        </ScrollMenu>
      </Box>
    </>
  );
};
export default ProductsSlider;

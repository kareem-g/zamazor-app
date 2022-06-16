import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import OfferItem from "./OfferItem";

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

const HorizontalScrollbar = ({ props }) => {
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
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box key={item.id} itemId={item.id} title={item.title} m="0 40px">
          <OfferItem
            key={item.id}
            title={item.title}
            discount={item.discount}
            Color={item.color}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};
export default HorizontalScrollbar;

import React from "react";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import Announcement from "../components/Announcement";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import WhyUs from "../components/WhyUs";
import Category from "../components/Category";
import FAQ from "../components/FAQ";

export default function Index() {
  return (
    <Box>
      <Announcement />
      <Navbar />
      {/* <Slider /> */}
      <Hero />
      {/* <HorizontalScrollbar /> */}
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar />
      </Box>
      <WhyUs />
      {/* <Products /> */}
      {/* <Category /> */}
      <FAQ />
      <Footer />
    </Box>
  );
}

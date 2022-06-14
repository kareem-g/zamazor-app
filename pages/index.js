import React from "react";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

export default function Index() {
  return (
    <Box>
      <Navbar />
      <Slider />
      <Products />
      <Footer />
    </Box>
  );
}

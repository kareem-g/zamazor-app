import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#112B3C", padding: "10px", marginTop: "30px" }}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "5px", color: "white" }}
      >
        Copyright @ kareemgameel
      </Typography>
    </Box>
  );
};

export default Footer;

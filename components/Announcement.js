import { Box, Container } from "@mui/material";
import React from "react";

const Announcement = () => {
  return (
    <Box
      sx={{
        height: "30px",
        backgroundColor: "#428cfd",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: " 14px",
        fontWeight: 500,
      }}
    >
      Super Deal! Free Shipping on Orders Over $100
    </Box>
  );
};

export default Announcement;

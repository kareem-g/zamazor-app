import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";

const SearchProducts = () => {
  return (
    <Box position="relative">
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {}}
          label="Search Products"
          variant="outlined"
          placeholder="Search..."
          size="small"
          style={{
            backgroundColor: "#FFF",
            borderRadius: "6px",
          }}
        />
        <IconButton
          style={{
            color: "#000",
            textTransform: "none",
            width: { lg: "120px", xs: "40px" },
            position: "absolute",
            right: "0",
          }}
        >
          <SearchOutlined style={{ fill: "#000" }} />
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchProducts;

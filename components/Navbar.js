import { ShoppingCart } from "@mui/icons-material";
import { Box, IconButton, Toolbar, Typography } from "@mui/material/";

// import Link from "next/link";
import { Link as MUILink } from "@mui/material";

import React from "react";

const Navbar = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#112B3C" }}>
        <Toolbar justifyContent="space-between">
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: "400",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px",
              bottom: "0px",
              flexGrow: "1",
            }}
          >
            <MUILink sx={{ color: "#fff" }} underline="none" href="/">
              CartMax.
            </MUILink>
          </Typography>
          <Box
            variant="div"
            sx={{
              marginLeft: "auto",
            }}
          >
            <IconButton
              href="/Cart"
              variant="button"
              style={{ color: "#fff", marginRight: "10px" }}
              // justifyContent="flex-end"
            >
              <ShoppingCart />
            </IconButton>
            <MUILink
              underline="none"
              sx={{ marginRight: "10px", color: "#fff" }}
              href="/Cart"
            >
              Cart
            </MUILink>
            <MUILink
              underline="none"
              sx={{ marginRight: "10px", color: "#fff" }}
              href="/Signin"
            >
              Signin
            </MUILink>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;

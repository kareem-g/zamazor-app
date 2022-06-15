import { ShoppingCart } from "@mui/icons-material";
import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material/";

import Link from "next/link";
import { Link as MUILink } from "@mui/material";

import React from "react";

const Navbar = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#112B3C" }}>
        <Toolbar>
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
            <Link to="/" passHref href="/">
              <MUILink color="#fff" underline="none">
                CartMax.
              </MUILink>
            </Link>
          </Typography>
          <Box
            variant="div"
            sx={{
              marginLeft: "auto",
            }}
          >
            <Stack justifyContent="center" direction="row">
              <Link passHref href="/Login">
                <MUILink
                  underline="none"
                  sx={{
                    color: "#fff",
                    marginRight: "10px",
                  }}
                >
                  <ShoppingCart fontSize="small" />
                </MUILink>
              </Link>
              <Link passHref href="/Login">
                <MUILink
                  underline="none"
                  sx={{ marginRight: "10px", color: "#fff" }}
                >
                  Login
                </MUILink>
              </Link>
              <Link passHref href="/Signup">
                <MUILink
                  underline="none"
                  sx={{ marginRight: "10px", color: "#fff" }}
                >
                  Signup
                </MUILink>
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;

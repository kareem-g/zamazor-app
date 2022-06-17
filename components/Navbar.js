import {
  DraftsTwoTone,
  KeyboardArrowDown,
  ListAlt,
  ListAltOutlined,
  MenuSharp,
  ShoppingCart,
  SignpostOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { Link as MUILink } from "@mui/material";

import React from "react";

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElSpecials, setAnchorElSpecials] = React.useState(null);
  const openSpecials = Boolean(anchorElSpecials);
  const handleClickSpecials = (event) => {
    setAnchorElSpecials(event.currentTarget);
  };
  const handleCloseSpecials = () => {
    setAnchorElSpecials(null);
  };

  // nav drawer

  const drawerWidth = 240;
  const navItems = ["Home", "Footwear", "Speacials"];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false); // default false

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#000" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        WintheMatch
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            component="nav"
            onClick={handleDrawerToggle}
          >
            <MenuSharp fontSize="medium" />
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </IconButton>
          <Link to="/" passHref href="/">
            <MUILink
              color="#428cfd"
              underline="none"
              // textTransform="uppercase"
              fontWeight="900"
              style={{
                // flexGrow: "1",
                padding: "10px",
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              WintheMatch
            </MUILink>
          </Link>
          <Typography
            direction="row"
            style={{
              // fontWeight: "400",
              fontSize: { xs: "12px", md: "14px" },
              // fontWeight: "bold",
              padding: "10px",
              bottom: "0px",
              flexGrow: "1",
            }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Link passHref href="/">
              <Button
                variant="text"
                sx={{
                  fontWeight: "400",
                  color: "#000",
                  marginLeft: "20px",
                }}
              >
                Home
              </Button>
            </Link>
            {/* footwear menu */}
            <Button
              endIcon={<KeyboardArrowDown />}
              sx={{
                fontWeight: "400",
                color: "#000",
              }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Footwear
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Womens</MenuItem>
              <MenuItem onClick={handleClose}>Mens</MenuItem>
              <MenuItem onClick={handleClose}>Youth</MenuItem>
            </Menu>
            {/* specials menu  */}
            <Button
              endIcon={<KeyboardArrowDown />}
              sx={{
                fontWeight: "400",
                color: "#000",
              }}
              id="specials-button"
              aria-controls={open ? "specials-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickSpecials}
            >
              Speacials
            </Button>
            <Menu
              id="speacials-menu"
              anchorEl={anchorElSpecials}
              open={openSpecials}
              onClose={handleCloseSpecials}
              MenuListProps={{
                "aria-labelledby": "specials-button",
              }}
            >
              <MenuItem onClick={handleCloseSpecials}>Flyers</MenuItem>
              <MenuItem onClick={handleCloseSpecials}>Clearance</MenuItem>
            </Menu>
          </Typography>
          <Box
            variant="div"
            sx={{
              marginLeft: "auto",
            }}
          >
            <Stack
              justifyContent="center"
              direction="row"
              // sx={{ display: { xs: "none", md: "block" } }}
            >
              <Link passHref href="/Signup">
                <Button
                  variant="outlined"
                  href="/Signup"
                  startIcon={<SignpostOutlined />}
                  sx={{
                    marginRight: "10px",
                    color: "#428cfd",
                    textTransform: "none",
                  }}
                >
                  Sign up
                </Button>
              </Link>
              <Link passHref href="/Login">
                <Button
                  variant="contained"
                  to="/Login"
                  href="/Login"
                  sx={{
                    marginRight: "10px",
                    color: "#fff",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;

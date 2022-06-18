import { Add, Google } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Box justifyContent="center" alignItems="center" display="flex">
          <Stack direction="column" marginTop="30px">
            <Typography marginBottom="10px">Dashboard</Typography>
            <TextField
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
              helperText="user@email.com"
            />

            <Box marginTop="10px">
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <Box>
              <Button
                startIcon={<Add />}
                variant="contained"
                sx={{
                  marginRight: "10px",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Add Product
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;

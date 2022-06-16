import {
  AttachMoneySharp,
  LocalShipping,
  SupportAgentSharp,
} from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const WhyUs = () => {
  return (
    <Box
      margin="100px"
      sx={{
        justifyContent: { xs: "center", md: "none" },
        display: { xs: "flex", md: "block" },
        alignItems: { xs: "center", md: "none" },
      }}
    >
      <Typography
        justifyContent="center"
        alignItems="center"
        sx={{
          color: "#292d32",
          fontWeight: "bold",
          fontSize: { xs: "28px", lg: "32px" },
          display: { xs: "none", md: "flex" },
        }}
      >
        Why Choose us
      </Typography>
      <Box
        marginTop="50px"
        direction="row"
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: { xs: "center", md: "space-around" },
        }}
      >
        <Typography
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            color: "#292d32",
            fontWeight: "bold",
            fontSize: { xs: "28px", lg: "32px" },
            display: { xs: "block", md: "none" },
            marginBottom: "35px",
          }}
        >
          Why Choose us
        </Typography>

        {/* item 1 */}
        <Box direction="row" display="flex" alignItems="center">
          <Typography
            variant="div"
            backgroundColor="#428cfd"
            alignItems="center"
            justifyContent="center"
            display="flex"
            borderRadius="40px"
            marginRight="20px"
            sx={{
              width: { xs: "40px", lg: "60px" },
              height: { xs: "40px", lg: "60px" },
            }}
          >
            <LocalShipping
              sx={{ color: "#fff", fontSize: { xs: "medium", lg: "30px" } }}
            />
          </Typography>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Free Shipping
            </Typography>
            <Typography variant="h8" sx={{ color: "gray" }}>
              Free on orders over $100
            </Typography>
          </Stack>
        </Box>

        {/* item 2 */}
        <Box
          direction="row"
          display="flex"
          alignItems="center"
          sx={{
            marginTop: { xs: "25px", md: "0" },
          }}
        >
          <Typography
            variant="div"
            backgroundColor="#61a3a1"
            alignItems="center"
            justifyContent="center"
            display="flex"
            borderRadius="40px"
            marginRight="20px"
            sx={{
              width: { xs: "40px", lg: "60px" },
              height: { xs: "40px", lg: "60px" },
            }}
          >
            <AttachMoneySharp
              sx={{ color: "#fff", fontSize: { xs: "medium", lg: "30px" } }}
            />
          </Typography>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Money Guarantee
            </Typography>
            <Typography variant="h8" sx={{ color: "gray" }}>
              30 Days Money Back
            </Typography>
          </Stack>
        </Box>

        {/* item 3 */}
        <Box
          direction="row"
          display="flex"
          alignItems="center"
          sx={{
            marginTop: { xs: "25px", md: "0" },
          }}
        >
          <Typography
            variant="div"
            backgroundColor="#af85ee"
            alignItems="center"
            justifyContent="center"
            display="flex"
            borderRadius="40px"
            marginRight="20px"
            sx={{
              width: { xs: "40px", lg: "60px" },
              height: { xs: "40px", lg: "60px" },
            }}
          >
            <SupportAgentSharp
              sx={{ color: "#fff", fontSize: { xs: "medium", lg: "30px" } }}
            />
          </Typography>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              24/7 Support
            </Typography>
            <Typography variant="h8" sx={{ color: "gray" }}>
              Friendly Support 24/7
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;

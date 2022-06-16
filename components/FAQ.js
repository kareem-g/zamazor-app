import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const FAQ = () => {
  return (
    <Box justifyContent="center" alignItems="center">
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          fontWeight: "bold",
          color: "#292d32",
          fontSize: { xs: "28px", lg: "32px" },
          marginBottom: "35px",
        }}
      >
        Frequency Asked Question (FAQ)
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          flexDirection: { xs: "column", lg: "col" },
        }}
      >
        <Grid md={4} item>
          <Accordion
            sx={{
              width: "400px",
              border: "hidden",
              boxShadow: "0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: "#f9f9f9",
                color: "#1B2430",
                width: "400px",
                border: "hidden",
                borderRadius: "50px",
              }}
            >
              <Typography>How Can I Pay For My Orders?</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "400px",
                borderRadius: "50px",
              }}
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid md={4} item>
          <Accordion
            sx={{
              width: "400px",
              border: "hidden",
              boxShadow: "0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: "#f9f9f9",
                color: "#1B2430",
                width: "400px",
                border: "hidden",
                borderRadius: "50px",
              }}
            >
              <Typography>How is Tax Calculated?</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "400px",
                borderRadius: "50px",
              }}
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid md={4} item>
          <Accordion
            sx={{
              width: "400px",
              border: "hidden",
              boxShadow: "0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: "#f9f9f9",
                color: "#1B2430",
                width: "400px",
                border: "hidden",
                borderRadius: "50px",
              }}
            >
              <Typography>Can I purchase with Gift Card?</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "400px",
                borderRadius: "50px",
              }}
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;

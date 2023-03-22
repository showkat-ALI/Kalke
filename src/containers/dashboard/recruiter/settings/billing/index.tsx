import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BillingCard from "./BillingCard";

const Billing = () => {
  return (
    <Box mb={4}>
      <Typography mb={2} fontWeight="600" variant="h5">
        Plans & Pricing
      </Typography>
      <Typography
        mb={3}
        color="textSecondary"
        fontWeight="600"
        variant="subtitle2"
      >
        Simple Pricing. No Hidden Fees
      </Typography>
      <Box display="flex" alignItems="center" my={2}>
        <Button
          sx={{
            boxShadow: "none",
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          Buy Now
        </Button>
        <Button
          sx={{ boxShadow: "none", textTransform: "capitalize" }}
          variant="outlined"
          color="info"
        >
          Yearly
          <Typography color="success">(Save 20%)</Typography>
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <BillingCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BillingCard />
        </Grid>{" "}
        <Grid item xs={12} md={3}>
          <BillingCard />
        </Grid>{" "}
        <Grid item xs={12} md={3}>
          <BillingCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Billing;

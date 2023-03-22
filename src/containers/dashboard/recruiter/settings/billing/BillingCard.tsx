import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./Billing.module.css";

const BillingCard = () => {
  return (
    <Box py={4} px={2} bgcolor="#ffffff" className={styles.billingCard}>
      <Typography gutterBottom fontWeight={700} variant="h6">
        Personal
      </Typography>
      <Typography color="textSecondary" mb={2} variant="body2">
        For most businesses that want to otpimize web queries
      </Typography>
      <Typography
        display="flex"
        alignItems="center"
        gap={1}
        fontWeight={700}
        variant="h5"
      >
        $09
        <span>
          <Typography
            letterSpacing={"2px"}
            color="textSecondary"
            fontWeight={600}
            variant="body2"
          >
            /MONTH
          </Typography>
        </span>
      </Typography>
      <Button
        className={styles.button}
        sx={{ my: 2, boxShadow: "none", textTransform: "capitalize" }}
        variant="contained"
        fullWidth
      >
        Buy Now
      </Button>
      <List>
        {[1, 2, 3, 4, 5].map((item) => (
          <Box display="flex" alignItems="center" mb={2} key={item} gap={1}>
            <CheckCircleIcon color="info" />
            <Typography color="textSecondary" variant="body1">
              All limited links
            </Typography>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default BillingCard;

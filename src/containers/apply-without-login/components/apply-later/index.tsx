import React from "react";
import {
  alpha,
  Box,
  FormControl,
  InputBase,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import KalkeTextButton from "@buttons/kalke-text-button";
export default function ApplyLater() {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      backgroundColor: "white",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      color: "#546D7A",

      transition: theme.transitions.create([
        "border-color",
        "background-color",

        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
    },
  }));
  return (
    <Box
      sx={{ padding: "16px", backgroundColor: "#F9FBFC", borderRadius: "4px" }}
    >
      <Typography sx={{ mb: "4px", color: "#253237", fontWeight: 600 }}>
        No time? Just apply later
      </Typography>
      <Typography sx={{ mb: "4px", fontSize: "14px", color: "#546D7A" }}>
        We’ll send a link to this job to your email.
      </Typography>

      <FormControl variant="standard" sx={{ my: "24px", width: "100%" }}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <BootstrapInput defaultValue="sabbir@gmail.com" id="bootstrap-input" />
      </FormControl>

      <KalkeTextButton
        text={"Apply Later"}
        type="contained"
        size="large"
        sx={{ width: "100%" }}
      />
    </Box>
  );
}

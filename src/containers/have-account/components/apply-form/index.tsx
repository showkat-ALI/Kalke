import KalkeTextButton from "@buttons/kalke-text-button";
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
import React from "react";

export default function index() {
  const error = true;
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
      <Typography sx={{ color: "#253237", fontWeight: "600" }}>
        Interested?
      </Typography>
      <FormControl variant="standard" sx={{ my: "24px" }}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <BootstrapInput defaultValue="sabbir@gmail.com" id="bootstrap-input" />
        <span style={{ color: "#F04438", fontSize: "13px" }}>
          There is already a Kalke account registered with this email. Please
          log in before you apply.
        </span>
      </FormControl>
      <KalkeTextButton
        text={"Send registration link to my email"}
        type="contained"
        size="large"
        sx={{ width: "100%", mb: "12px" }}
      />
      <KalkeTextButton
        text={"Login with my password"}
        type="outlined"
        size="large"
        sx={{ width: "100%" }}
      />
    </Box>
  );
}

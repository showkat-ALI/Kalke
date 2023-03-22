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
import InputAdornment from "@mui/material/InputAdornment";

export default function KalkeLabeledTextField({
  label,
  defaultValue,
  variant,
  id,
  htmlFor,
  sx,
  errorText,

  ...props
}: {
  label?: any;
  defaultValue?: any;
  variant?: any;
  id?: any;
  htmlFor?: any;
  sx?: any;
  errorText?: any;
}) {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      backgroundColor: "white",
      border: "1px solid #ECEFF1",
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
    <FormControl variant={variant} sx={sx}>
      <InputLabel shrink htmlFor={htmlFor}>
        {label}
      </InputLabel>
      <BootstrapInput defaultValue={defaultValue} id={id} {...props} />

      {/* <span style={{ color: "#F04438", fontSize: "13px" }}>{errorText}</span> */}
    </FormControl>
  );
}

import { ThemeProvider, Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import React from "react";
import { CustomTheme } from "../../../../styles/style";

interface IKalkeTextButton {
  text: any;
  variant?: "outlined" | "contained" | "text";
  size?: "small" | "medium" | "large";
  sx?: any;
  onClick?: () => void;
  props?: any;
  type?: any;
}

export default function KalkeTextButton({
  variant,
  text,
  size,
  sx = {},
  onClick,
  type,
  ...props
}: IKalkeTextButton) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Button
        type={type}
        variant={variant}
        size={size}
        sx={sx}
        {...props}
        onClick={onClick}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

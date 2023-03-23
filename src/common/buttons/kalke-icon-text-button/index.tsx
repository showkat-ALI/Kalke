import { ThemeProvider, Typography, Button } from "@mui/material";
import { type } from "os";
import React from "react";
import { CustomTheme } from "../../../../styles/style";

interface IKalkeIconTextButton {
  text: any;
  type?: "outlined" | "contained" | "text";
  size?: "small" | "medium" | "large";
  sx?: any;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element | any;
  onClick?: () => void;
  rest?: any;
}
export default function KalkeIconTextButton(props: IKalkeIconTextButton) {
  const {
    text,
    type = "contained",
    size = "medium",
    sx = {},
    startIcon,
    endIcon,
    onClick,
    ...rest
  } = props;

  return (
    <ThemeProvider theme={CustomTheme}>
      <Button
        variant={type}
        size={size}
        sx={sx}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        {...rest}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

import { IconButton, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { CustomTheme } from "../../../../styles/style";

export default function KalkeIconButton({
  type,
  children,
  size,
  sx,
  ariaLevel,
  ...props
}: {
  children: any;
  type: any;
  size: any;
  sx: any;
  ariaLevel: any;
  //   props: any;
}) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <IconButton size={size} sx={sx} {...props} aria-label={ariaLevel}>
        {children}
      </IconButton>
    </ThemeProvider>
  );
}

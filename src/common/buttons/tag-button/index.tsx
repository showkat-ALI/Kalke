import { Box } from "@mui/material";
import React from "react";

export default function KalkeTag({ children, sx }: { children: any; sx: any }) {
  return <Box sx={sx}>{children}</Box>;
}

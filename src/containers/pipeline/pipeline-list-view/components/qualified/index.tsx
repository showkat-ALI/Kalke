import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export default function index() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}
    >
      <Box>Qualified</Box>
      <Box
        sx={{
          backgroundColor: "#F9FBFC",
          padding: "10px",
          borderRadius: "2px",
          border: "1px solid #CFD8DB",
          width: "250px",
          height: "400px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #ECEFF1",
            borderRadius: "2px",
            paddingX: "4px",
            py: " 8px",
            background: " #FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Typography>Sabbir</Typography>
          <Typography>Product Design</Typography>
        </Box>
      </Box>
    </Box>
  );
}

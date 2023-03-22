import React from "react";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import KalkeTextButton from "@buttons/kalke-text-button";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "../../../../../styles/style";
import { useRouter } from "next/router";

export default function JobCircular({ Job }: { Job: any }) {
  const router = useRouter();

  const { location, category, time, title } = Job;

  return (
    <ThemeProvider theme={CustomTheme}>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #ECEFF1",
          borderRadius: "3px",
          backgroundColor: "#F9FBFC",
          px: "16px",
          py: "8px",
          display: "flex",
          alignItems: "center",
          my: "5px",
        }}
      >
        <Box
          component={"div"}
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography fontWeight={600}>{title}</Typography>

          <Box
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography color="#546D7A" fontFamily="inherit">
              {time}
            </Typography>

            <CircleIcon
              sx={{ width: "5px", height: "10px", mx: "5px" }}
              fontSize="small"
            />

            <Typography color="#546D7A" fontFamily="inherit">
              {category}
            </Typography>

            <CircleIcon
              sx={{ width: "5px", height: "10px", mx: "5px" }}
              fontSize="small"
            />

            <Typography color="#546D7A" fontFamily="inherit">
              {location}{" "}
            </Typography>
          </Box>
        </Box>

        <KalkeTextButton
          text={"Apply"}
          size="large"
          type="outlined"
          sx={{
            backgroundColor: "#F2FAFF",
            color: "#037BFD",
            fontWeight: 600,
          }}
          onClick={() => {
            router.push("job-preview");
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

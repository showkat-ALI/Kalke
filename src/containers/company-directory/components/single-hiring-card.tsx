import Image from "next/image";
import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KalkeIconTextButton from "@buttons/kalke-icon-text-button";
import person from "../../../../src/assets/Images/random.png";

export default function SingleHiringCard({ id }: { id: any }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mx:
          id === 1
            ? {
                sm: "0px",
                xs: "0px",
                md: "24px",
                lg: "24px",
                xl: "24px",
              }
            : "0px",

        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      }}
    >
      <Box
        sx={{
          width: {
            sm: "340px",
            xs: "300px",
            lg: "368px",
            xl: "368px",
            md: "368px",
          },
          overflow: "hidden",
        }}
      >
        <Image
          src={person}
          alt=""
          style={{ width: "100%", height: "100%", position: "relative" }}
        />
      </Box>
      <Box sx={{ padding: "16px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "#253237",
              fontWeight: 700,
            }}
          >
            Leapsome finds the right talent to
            <br />
            enable rapid growth
          </Typography>
          <Typography sx={{ color: "#546D7A", mt: "8px", mb: "16px" }}>
            Literally doubled the number of new hires
            <br />
            every year with kalke
          </Typography>
          <KalkeIconTextButton
            type="text"
            sx={{ color: "#037BFD", lineHeight: "24px", ml: "-7px" }}
            text={"Learn More"}
            endIcon={<ArrowRightAltIcon />}
          />
        </Box>
      </Box>
    </Box>
  );
}

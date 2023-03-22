import React from "react";
import Box from "@mui/material/Box";
import KalkeTextButton from "../../buttons/kalke-text-button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <KalkeTextButton
        variant={"contained"}
        text={"Create New Job"}
        size={"large"}
        sx={{
          fontWeight: "bold",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        }}
        onClick={() => {
          router.push("create-job");
        }}
      />
    </Box>
  );
}

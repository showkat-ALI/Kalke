import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import JobPreviewBreadCrumb from "src/pages/job-preview/components/job-preview-bread-crumb";
import Image from "next/image";
import Leader from "@containers/icons/Leader";
import KalkeIconTextButton from "@buttons/kalke-icon-text-button";
import ReplayIcon from "@mui/icons-material/Replay";
import ConfirmMail from "@containers/icons/ConfirmMail";
export default function ApplySuccess() {
  const [applyState, setApplyState] = useState(false);

  return (
    <Box sx={{ py: "30px", mx: "auto", width: "80%" }}>
      <JobPreviewBreadCrumb
        key={"job-preview-breadcrumb"}
        jobTitle="Director of Product Management, Marketplace & Network Growth"
        jobLink="job-preview"
        applyState={applyState}
        setApplyState={setApplyState}
      />
      <Box sx={{ mt: "30px", mb: "54px" }}>
        <Image width={120} alt="" height={60} src="/kalke-logo.png" />
      </Box>
      <Box
        sx={{
          padding: "24px",
          mb: "48px",
          backgroundColor: "#F9FBFC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            sm: "column-reverse",
            xs: "column-reverse",
            md: "row",
            xl: "row",
            lg: "row",
          },
        }}
      >
        <Box>
          <Typography
            sx={{ color: "#253237", fontSize: "2.25rem", fontWeight: 600 }}
          >
            Confirm your e-mail address
          </Typography>
          <br />
          <Typography
            sx={{ color: "#546D7A", fontSize: "0.875rem", mb: "24px" }}
          >
            We have sent the confirmation link to your email
            “sabbirux@gmail.com”. It expires in 1
            <br />
            hour.Your application will be sent as soon as you have verified your
            email address.
          </Typography>
          <Typography
            sx={{ mb: "8px", color: "#546D7A", fontSize: "0.875rem" }}
          >
            Didn’t get a confirmation email?
          </Typography>
          <KalkeIconTextButton
            text={"Resend Email"}
            startIcon={<ReplayIcon />}
            type="outlined"
            sx={{ color: "#037BFD" }}
          />
        </Box>
        <Box>
          <ConfirmMail width={"249"} height={"250"} />
        </Box>
      </Box>
    </Box>
  );
}

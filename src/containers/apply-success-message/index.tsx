import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import JobPreviewBreadCrumb from "src/pages/job-preview/components/job-preview-bread-crumb";
import Image from "next/image";
import Leader from "@containers/icons/Leader";
import KalkeIconTextButton from "@buttons/kalke-icon-text-button";
import ReplayIcon from "@mui/icons-material/Replay";
import ConfirmMail from "@containers/icons/ConfirmMail";
import ApplySuccess from "@containers/icons/Apply-success";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Link from "next/link";
export default function ApplySuccessMessage() {
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
            Your application was successful. Awesome!
          </Typography>
          <br />
          <Typography
            sx={{ color: "#546D7A", fontSize: "0.875rem", mb: "24px" }}
          >
            Your job application has been sent to the company and added to your
            Kalke account.
            <br />
            Visit your dashboard to see the status of your application.
          </Typography>
          <Link href={"/dashboard/recruiter"}>
            <KalkeIconTextButton
              text={"Visit Dashboard"}
              startIcon={<GridViewRoundedIcon />}
              type="contained"
              sx={{ color: "white" }}
            />
          </Link>
        </Box>
        <Box>
          <ApplySuccess width="286" height="250" />
        </Box>
      </Box>
    </Box>
  );
}

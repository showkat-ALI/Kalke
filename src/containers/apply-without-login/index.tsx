import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import JobDetails from "./components/job-details/index";
import ApplyForm from "./components/apply-form/index";
import Image from "next/image";
import JobPreviewHeader from "src/pages/job-preview/components/job-preview-header";
import JobPreviewBreadCrumb from "src/pages/job-preview/components/job-preview-bread-crumb";
import { Avatar, Typography } from "@mui/material";
import KalkeTextButton from "@buttons/kalke-text-button";
import {
  alpha,
  FormControl,
  InputBase,
  InputLabel,
  styled,
  TextField,
} from "@mui/material";
import ApplyLater from "./components/apply-later";
export default function ApplyWithoutLogin() {
  const [applyState, setApplyState] = useState(true);

  return (
    <Box sx={{ py: "30px", mx: "auto", width: "80%" }}>
      <JobPreviewBreadCrumb
        key={"job-preview-breadcrumb"}
        jobTitle="Director of Product Management, Marketplace & Network Growth"
        jobLink="job-preview"
        applyState={applyState}
        setApplyState={setApplyState}
      />
      <Box sx={{ my: "30px" }}>
        <Image width={120} alt="" height={60} src="/kalke-logo.png" />
      </Box>
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <JobPreviewHeader
            jobTitle="Director of Product Management, Marketplace & Network Growth"
            jobLink="job-preview-header"
            jobLocation="Dhaka, Bangladesh"
            jobDepartment="Product"
            jobType="Full-Time"
            applyState={applyState}
            setApplyState={setApplyState}
          />
          <JobDetails />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{}}>
          <ApplyForm />
          <Box
            sx={{
              padding: "16px",
              backgroundColor: "#F9FBFC",
              my: "32px",
              borderRadius: "4px",
            }}
          >
            <Typography sx={{ color: "#253237", fontWeight: "600" }}>
              Contact Person
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: "27px" }}>
              <Avatar sx={{ bgcolor: "skyblue" }}>OP</Avatar>
              <Typography sx={{ ml: "5px" }}>Tamim Ahmed</Typography>
            </Box>
          </Box>
          <ApplyLater />
        </Grid>
      </Grid>
    </Box>
  );
}

import Head from "next/head";
// import kalkeLogo from "@images/kalke-logo.png";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { CustomTheme } from "../../../styles/style";
import JobApplyContainer from "@containers/job-apply";
import HomeLayout from "../../common/layouts/home-layout";
import JobPreviewContainer from "@containers/job-preview";
import JobPreviewHeader from "./components/job-preview-header";
import JobPreviewBreadCrumb from "./components/job-preview-bread-crumb";

export default function JobPreview() {
  const {
    query: { apply },
  } = useRouter();

  const [applyState, setApplyState] = useState(false);

  useEffect(() => {
    if (apply === "true") {
      setApplyState(true);
    }
  }, [apply]);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Head>
        <title>Kalke | Apply</title>
        <meta property="og:title" content="Kalke Job Apply" key="title" />
        <link rel="icon" href={"/kalke-logo.png"} type="image/x-icon" />
      </Head>
      <HomeLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            minHeight: "100vh",
            mx: "auto",
          }}
        >
          <JobPreviewBreadCrumb
            key={"job-preview-breadcrumb"}
            jobTitle="Director of Product Management, Marketplace & Network Growth"
            jobLink="job-preview"
            applyState={applyState}
            setApplyState={setApplyState}
          />

          <JobPreviewHeader
            jobTitle="Director of Product Management, Marketplace & Network Growth"
            jobLink="job-preview-header"
            jobLocation="Dhaka, Bangladesh"
            jobDepartment="Product"
            jobType="Full-Time"
            applyState={applyState}
            setApplyState={setApplyState}
          />

          {!applyState && (
            <JobPreviewContainer
              key={"job-preview-container"}
              setApplyState={setApplyState}
            />
          )}

          {applyState && <JobApplyContainer key={"job-apply-container"} />}
        </Box>
      </HomeLayout>
    </ThemeProvider>
  );
}

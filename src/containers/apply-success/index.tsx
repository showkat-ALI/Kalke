import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import JobPreviewBreadCrumb from "src/pages/job-preview/components/job-preview-bread-crumb";
import Image from "next/image";
import Leader from "@containers/icons/Leader";
import KalkeLabeledTextField from "@components/kalke-labeled-text-field";
import KalkeTextButton from "@buttons/kalke-text-button";
import { display } from "@mui/system";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import KalkeIconTextButton from "@buttons/kalke-icon-text-button";

export default function ApplySuccess() {
  const [applyState, setApplyState] = useState(false);
  const [fileName, setFileName] = useState("");

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
            We&apos;ve received your application!
          </Typography>
          <br />
          <Typography sx={{ color: "#546D7A", fontSize: "0.875rem" }}>
            We&apos;d like to ask you for some additional information.
            <br />
            This will help us get to know you and assess your application
            better.
          </Typography>
        </Box>
        <Box>
          <Leader width={"295"} height={"250"} />
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            sm: "100%",
            xs: "100%",
            md: "60%",
            lg: "50%",
            xl: "50%",
          },
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "1.125rem", color: "#546D7A", fontWeight: 600 }}
          >
            1. When are you available to start working with us?
          </Typography>
          <Typography
            sx={{
              color: "#253237",
              fontSize: "0.875rem",
              lineHeight: "20px",
              marginTop: "16px",
            }}
          >
            I am available from
          </Typography>
          <input
            type={"date"}
            style={{
              color: "#546D7A",
              width: "100%",
              padding: "0px 12px 0px 16px",
              borderRadius: "4px",
              backgroundColor: " #FFFFFF",
              border: "1px solid #ECEFF1",
              marginTop: "8px",

              height: "40px",
            }}
          />
          <Box sx={{ display: "inline-flex", mt: "16px" }}>
            <input
              type="checkbox"
              id="start-immediate"
              name="start-immediate"
              className="checkbox-wrapper"
              value="yes"
              style={{ marginRight: "20px" }}
            />

            <label
              htmlFor="start-immediate"
              style={{ color: "#546D7A", lineHeight: "24px" }}
            >
              I can start immediately
            </label>
          </Box>
          <br />
        </Box>
        <Box sx={{ mt: "32px", width: "100%" }}>
          <Typography
            sx={{ fontSize: "1.125rem", color: "#546D7A", fontWeight: 600 }}
          >
            2. What is your expected yearly compensation range?
          </Typography>

          <TextField
            placeholder="00"
            size="small"
            sx={{
              width: "100%",
              mt: "16px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ECEFF1",
                },
                "&:hover fieldset": {
                  borderColor: "#ECEFF1",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">BDT/</InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "inline-flex", mt: "16px" }}>
            <input
              type="checkbox"
              id="start-immediate"
              name="start-immediate"
              className="checkbox-wrapper"
              value="yes"
              style={{ marginRight: "20px" }}
            />

            <label
              htmlFor="start-immediate"
              style={{ color: "#546D7A", lineHeight: "24px" }}
            >
              I can start immediately
            </label>
          </Box>
          <br />
        </Box>
        <Box sx={{ mt: "32px", width: "100%" }}>
          <Typography
            sx={{ fontSize: "1.125rem", color: "#546D7A", fontWeight: 600 }}
          >
            3. Do you have any links we can look at?
          </Typography>
          <Typography
            sx={{
              color: "#253237",
              fontSize: "0.875rem",
              lineHeight: "20px",
              marginTop: "16px",
            }}
          >
            LinkedIn URL
          </Typography>
          <TextField
            placeholder="devSabbir"
            size="small"
            sx={{
              width: "100%",
              mt: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ECEFF1",
                },
                "&:hover fieldset": {
                  borderColor: "#ECEFF1",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  www.linkedin.com/in/
                </InputAdornment>
              ),
            }}
          />
          <Typography
            sx={{
              color: "#253237",
              fontSize: "0.875rem",
              lineHeight: "20px",
              marginTop: "24px",
            }}
          >
            GitHub URL
          </Typography>
          <TextField
            placeholder="devSabbir"
            size="small"
            sx={{
              width: "100%",
              mt: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ECEFF1",
                },
                "&:hover fieldset": {
                  borderColor: "#ECEFF1",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  www.github.com/
                </InputAdornment>
              ),
            }}
          />
          <Typography
            sx={{
              color: "#253237",
              fontSize: "0.875rem",
              lineHeight: "20px",
              marginTop: "24px",
            }}
          >
            Others
          </Typography>
          <TextField
            size="small"
            sx={{
              width: "100%",
              mt: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ECEFF1",
                },
                "&:hover fieldset": {
                  borderColor: "#ECEFF1",
                },
              },
            }}
          />
        </Box>

        <Box sx={{ mt: "32px", width: "100%" }}>
          <Typography
            sx={{ fontSize: "1.125rem", color: "#546D7A", fontWeight: 600 }}
          >
            4. Add documents to show how you&apos;d be a great fit for this role
          </Typography>
          <Typography
            sx={{
              color: "#253237",
              fontSize: "0.875rem",
              marginTop: "16px",
            }}
          >
            {" "}
            Upload Cover letter
          </Typography>
          <Button
            variant="outlined"
            component="label"
            sx={{
              width: "100%",
              mb: "12px",
              mt: "8px",
              backgroundColor: "white",
              color: "#455964",
              border: "1px solid #ECEFF1",
            }}
          >
            {/* {fileName} */}
            {fileName.length <= 0 && (
              <>
                <AttachFileIcon sx={{ color: "#455964" }} />

                <Typography
                  sx={{
                    color: "#455964",
                    fontWeight: 500,
                    textTransform: "capitalize",
                  }}
                >
                  Cover Letter (optional)
                </Typography>
                <input
                  type="file"
                  hidden
                  onChange={({ target: { files } }) => {
                    if (files != null) {
                      files[0] && setFileName(files[0].name);
                    }
                  }}
                />
              </>
            )}
            {fileName.length > 0 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    fontWeight: 600,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#037BFD",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      textTransform: "lowercase",
                      fontWeight: 600,
                    }}
                  >
                    <DoneIcon sx={{ width: "20px" }} />
                  </Box>
                  <Typography
                    sx={{
                      color: "#455964",
                      textTransform: "capitalize",
                      fontWeight: 600,
                      mx: "20px",
                    }}
                  >
                    {fileName}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#037BFD",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      textTransform: "lowercase",
                      fontWeight: 600,
                    }}
                    onClick={() => setFileName("")}
                  >
                    x
                  </Box>
                </Box>
              </>
            )}
          </Button>
        </Box>
        <Box sx={{ mt: "32px", width: "100%" }}>
          <Typography
            sx={{ fontSize: "1.125rem", color: "#546D7A", fontWeight: 600 }}
          >
            5. Contact details
          </Typography>
          <Box sx={{ width: "100%" }}>
            <KalkeLabeledTextField
              defaultValue={"+8801xxxxxxx "}
              htmlFor="phone"
              key={"phone"}
              label="Phone Number"
              variant="standard"
              sx={{ width: "100%", mt: "16px" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: "32px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <KalkeTextButton
              text={"Skip All"}
              size="large"
              type="outlined"
              sx={{ color: "#037BFD", fontWeight: 500, width: "100%" }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <KalkeTextButton
              text={"Submit information"}
              size="large"
              type="contained"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                width: "100%",
                ml: {
                  sm: "5px",
                  xs: "5px",
                  md: "10px",
                  lg: "10px",
                  xl: "10px",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

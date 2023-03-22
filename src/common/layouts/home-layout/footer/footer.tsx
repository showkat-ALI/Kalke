import KalkeTextButton from "@buttons/kalke-text-button";
import { Box, Container, InputBase, Typography } from "@mui/material";
import Image from "next/image";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#F9FBFC", py: "20px" }}>
      <Box
        sx={{
          width: {
            sm: "90%",
            xs: "90%",
            lg: "80%",
            md: "90%",
            xl: "80%",
          },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box>
            <Image width={100} height={60} src={"/kalke-logo.png"} alt="" />
            <Typography sx={{ my: "10px", color: "#546D7A" }}>
              Maximize your reach and hiring success by posting <br /> your job
              ad to 10+ job search sites within one tool <br /> and with one
              single login - for free.
            </Typography>
            <Box sx={{ mb: "30px" }}>
              <KalkeTextButton
                text={"Get started free"}
                sx={{
                  backgroundColor: "#008FFF",
                  color: "white",
                  px: "16px",
                  py: "8px",
                  fontWeight: 600,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: 600, color: "#000000", mb: "10px" }}
              >
                Sign up for our newsletter
              </Typography>
              <Box
                sx={{
                  display: {
                    sm: "flex",
                    xs: "flex",
                    lg: "block",
                    xl: "block",
                    md: "flex",
                  },
                }}
              >
                <InputBase
                  sx={{
                    flex: 1,
                    color: "#546D7A",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    border: "1px solid #ECEFF1",
                    backgroundColor: "white",
                    paddingY: "4px",
                    paddingX: "30px",
                    borderRadius: "4px",
                  }}
                  placeholder="Enter your email"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <KalkeTextButton
                  text={"Get started free"}
                  sx={{
                    backgroundColor: "#008FFF",
                    color: "white",
                    paddingY: "6px",
                    paddingX: "10px",
                    fontWeight: 600,
                    ml: "-7px",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#253237" }}>
                Features
              </Typography>
              <Box
                sx={{
                  mt: "8px",
                  color: "#546D7A",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "32px",
                }}
              >
                <Box>
                  <Link href={"#"}>What&apos; s New</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Build Job Ad</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Promote Job Ad</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Manage Candidates</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Recruiter Features </Link>
                </Box>
                <Box>
                  <Link href={"#"}>Applicant Tracking System</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Integrations</Link>
                </Box>
                <Box sx={{ mt: "5px" }}>
                  <Link href={"#"}>FAQ</Link>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "baseline",
                mx: {
                  xs: "0px",
                  sm: "0px",
                  md: "25px",
                  lg: "25px",
                  xl: "25px",
                },
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#253237" }}>
                Features
              </Typography>
              <Box
                sx={{
                  mt: "8px",
                  color: "#546D7A",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "32px",
                }}
              >
                <Box>
                  <Link href={"#"}>What&apos; s New</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Build Job Ad</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Promote Job Ad</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Manage Candidates</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Recruiter Features </Link>
                </Box>
                <Box>
                  <Link href={"#"}>Applicant Tracking System</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Integrations</Link>
                </Box>
                <Box sx={{ mt: "5px" }}>
                  <Link href={"#"}>FAQ</Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#253237" }}>
                Features
              </Typography>
              <Box
                sx={{
                  mt: "8px",
                  color: "#546D7A",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "32px",
                }}
              >
                <Box>
                  <Link href={"#"}>What&apos; s New</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Build Job Ad</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Promote Job Ad</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Manage Candidates</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Recruiter Features </Link>
                </Box>
                <Box>
                  <Link href={"#"}>Applicant Tracking System</Link>
                </Box>
                <Box>
                  <Link href={"#"}>Integrations</Link>
                </Box>
                <Box>
                  <Link href={"#"}>FAQ</Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            color: "#546D7A",
            display: {
              sm: "block",
              xs: "block",

              lg: "none",
              xl: "none",
              md: "none",
            },
            my: "32px",
          }}
        >
          <Box>Legal Notice</Box>
          <Box>Terms Corporate</Box>
          <Box>Privacy</Box>
          <Box>I&apos; m a candidate</Box>
        </Box>
        <Box sx={{ my: "20px" }}>
          <hr style={{ color: "#CFD8DB" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ color: "#546D7A", fontWeight: 400 }}>
            {" "}
            2023 - JOIN Solutions AG. All rights reserved.
          </Box>
          <Box
            sx={{
              color: "#546D7A",
              display: {
                sm: "none",
                xs: "none",

                lg: "flex",
                xl: "flex",
                md: "flex",
              },
            }}
          >
            <Box>Legal Notice</Box>
            <Box sx={{ mx: "15px" }}>Terms Corporate</Box>
            <Box>Privacy</Box>
            <Box sx={{ ml: "15px" }}>I&apos; m a candidate</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

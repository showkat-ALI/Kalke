import KalkeIconTextButton from "@buttons/kalke-icon-text-button";
import { Box, Container, Typography } from "@mui/material";
import SingleHiringCard from "./components/single-hiring-card";
import JobPreviewBreadCrumb from "src/pages/job-preview/components/job-preview-bread-crumb";
import { useState } from "react";
export default function CompanyDirectory() {
  const [applyState, setApplyState] = useState(false);
  return (
    <>
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
            mt: "8px",
            mb: "32px",
            ml: {
              sm: "20px",
              xs: "20px",
              lg: "20px",
              md: "20px",
              xl: "20px",
            },
          }}
        >
          <JobPreviewBreadCrumb
            key={"job-preview-breadcrumb"}
            jobTitle="Companies"
            jobLink="job-preview"
            applyState={applyState}
            setApplyState={setApplyState}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: "20px" }}>
            <Typography
              sx={{
                color: "#253237",
                lineHeight: "60px",
                fontSize: "3rem",
                textAlign: {
                  sm: "start",
                  xs: "start",
                  md: "center",
                  lg: "center",
                  xl: "center",
                },
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Company Directory
            </Typography>
            <Box
              sx={{
                color: "#546D7A",
                mt: "10px",
                textAlign: {
                  sm: "start",
                  xs: "start",
                  md: "center",
                  lg: "center",
                  xl: "center",
                },
              }}
            >
              Great clients use great software. More than 30,000 companies rely
              on Kalke innovative Talent
              <br />
              <Typography
                sx={{
                  textAlign: {
                    sm: "start",
                    xs: "start",
                    md: "center",
                    lg: "center",
                    xl: "center",
                  },
                }}
              >
                Attraction System. See the list of companies that trust Kalke
                with all of their recruiting
              </Typography>
            </Box>
            <Box sx={{ my: "40px" }}>
              <Typography
                sx={{
                  color: "#253237",
                  fontSize: "1.875rem",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Featured Companies
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    sm: "space-between",
                    xs: "space-between",
                    md: "space-evenly",
                    lg: "space-evenly",
                    xl: "space-evenly",
                  },
                  alignItems: "center",
                  fontWeight: 500,
                  mt: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  A
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  B
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  C
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  D
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  E
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  F
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  G
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  H
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  I
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  J
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  K
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  L
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  M
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  N
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  O
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  P
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  Q
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  R
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  S
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  T
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  U
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  V
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  W
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  X
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  Y
                </Typography>
                <Typography
                  sx={{
                    color: "#546D7A",
                  }}
                >
                  Z
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#037BFD",
                  my: "30px",
                }}
              >
                <Box>
                  <Typography>Coachhub GmbH</Typography>
                  <Typography>CareerFoundry GmbH</Typography>
                  <Typography>e-bot7 GmbH</Typography>
                  <Typography>Enmacc GmbH</Typography>
                  <Typography>EINHUNDERT Energie GmbH</Typography>
                  <Typography>POOL</Typography>
                  <Typography>numa group</Typography>
                  <Typography>Forto Logistics AG & Co. KG</Typography>
                  <Typography>Wayfair</Typography>
                  <Typography>Batmaid</Typography>
                  <Typography>LINDLPOWER Personalmanagement GmbH</Typography>
                  <Typography>ShippyPro</Typography>
                  <Typography>SNOWLEADER</Typography>
                  <Typography>JustWatch</Typography>
                  <Typography>Taxfix</Typography>
                  <Typography>yamo</Typography>
                </Box>
                <Box
                  sx={{
                    mx: "60px",
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  <Typography>Coachhub GmbH</Typography>
                  <Typography>CareerFoundry GmbH</Typography>
                  <Typography>e-bot7 GmbH</Typography>
                  <Typography>Enmacc GmbH</Typography>
                  <Typography>EINHUNDERT Energie GmbH</Typography>
                  <Typography>POOL</Typography>
                  <Typography>numa group</Typography>
                  <Typography>Forto Logistics AG & Co. KG</Typography>
                  <Typography>Wayfair</Typography>
                  <Typography>Batmaid</Typography>
                  <Typography>LINDLPOWER Personalmanagement GmbH</Typography>
                  <Typography>ShippyPro</Typography>
                  <Typography>SNOWLEADER</Typography>
                  <Typography>JustWatch</Typography>
                  <Typography>Taxfix</Typography>
                  <Typography>yamo</Typography>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  <Typography>Coachhub GmbH</Typography>
                  <Typography>CareerFoundry GmbH</Typography>
                  <Typography>e-bot7 GmbH</Typography>
                  <Typography>Enmacc GmbH</Typography>
                  <Typography>EINHUNDERT Energie GmbH</Typography>
                  <Typography>POOL</Typography>
                  <Typography>numa group</Typography>
                  <Typography>Forto Logistics AG & Co. KG</Typography>
                  <Typography>Wayfair</Typography>
                  <Typography>Batmaid</Typography>
                  <Typography>LINDLPOWER Personalmanagement GmbH</Typography>
                  <Typography>ShippyPro</Typography>
                  <Typography>SNOWLEADER</Typography>
                  <Typography>JustWatch</Typography>
                  <Typography>Taxfix</Typography>
                  <Typography>yamo</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              textAlign: {
                sm: "start",
                xs: "start",
                md: "center",
                lg: "center",
                xl: "center",
              },
              fontSize: "2.25rem",
              fontWeight: 700,
            }}
          >
            Read about their hiring success with Kalke
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: {
                sm: "flex-start",
                xs: "flex-start",
                md: "center",
                lg: "center",
                xl: "center",
              },
              mt: "10px",
              justifyContent: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            {[1, 2, 3].map((item, idx) => (
              <SingleHiringCard key={item} id={idx} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

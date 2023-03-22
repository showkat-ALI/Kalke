import * as React from "react";

import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import JobsFilter from "./components/jobs-filter";
import { Box, Button, Pagination, Typography } from "@mui/material";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "../../../../../styles/style";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import CircleIcon from "@mui/icons-material/Circle";
import { useRouter } from "next/router";
import Jobs from "./index3";

export default function Candidates() {
  const [age, setAge] = useState<string | number>("");
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const [openId, setOpenId] = React.useState(-1);

  const handleClick = (id: any) => {
    if (id === openId) {
      setOpenId(-1);
    } else {
      setOpenId(id);
    }
  };
  const [jobs, setJobs] = useState(false);
  const {
    query: { job },
    push,
  } = useRouter();
  React.useEffect(() => {
    if (job) {
      setJobs(true);
    }
  }, [job]);
  const [breadState, setBreadState] = useState(true);
  React.useEffect(() => {
    if (breadState) {
      setJobs(false);
    }
  }, [breadState]);
  return (
    <ThemeProvider theme={CustomTheme}>
      <>  
        {!jobs && breadState ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", mb: "25px" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  Jobs
                </Typography>
              </Box>
              <Box sx={{ ml: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#455964",
                    fontWeight: "bold",
                  }}
                >
                  54 Total Jobs
                </Typography>
              </Box>
              <Box sx={{ mx: "10px" }}>
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "#D1FADF",
                    color: " #039855;",
                    outline: "none;",
                    fontWeight: "bold",
                  }}
                >
                  5 Active
                </Button>
              </Box>
              <Box>
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "#ECEFF1",
                    color: "#37474F",
                    outline: "none;",
                    fontWeight: "bold",
                  }}
                >
                  5 Active
                </Button>
              </Box>
              <Box sx={{ mx: "10px" }}>
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "#ECEFF1",
                    color: " #37474F",
                    fontWeight: "bold",
                    outline: "none;",
                  }}
                >
                  5 Active
                </Button>
              </Box>
            </Box>
            <JobsFilter />
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                height: "550px",
                display: "flex",
                width: "100%",
                px: "15px",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  height: "500px",
                  overflowY: "auto",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {[
                  {
                    id: 1,
                    name: "Job 1",
                    description: "Description for Job 1",
                    candidate: "3",
                  },
                  {
                    id: 2,
                    name: "Job 2",
                    description: "Description for Job 2",
                  },
                  {
                    id: 3,
                    name: "Job 3",
                    description: "Description for Job 3",
                    candidate: "3",
                  },
                  {
                    id: 4,
                    name: "Job 4",
                    description: "Description for Job 4",
                  },
                  {
                    id: 5,
                    name: "Job 5",
                    description: "Description for Job 5",
                    candidate: "3",
                  },
                  {
                    id: 6,
                    name: "Job 5",
                    description: "Description for Job 5",
                    candidate: "3",
                  },
                ].map((item, id) => (
                  <Box
                    key={id}
                    sx={{
                      backgroundColor: "#F9FBFC",
                      my: "10px",
                      border: "1px solid #ECEFF1",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        px: "20px",
                        py: "20px",
                        backgroundColor: "#F9FBFC",
                        width: "100%",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Box onClick={() => handleClick(item.id)}>
                        {openId === item.id ? (
                          <ArrowDropDownIcon />
                        ) : (
                          <ArrowRightIcon />
                        )}
                      </Box>
                      <Box
                        onClick={() => {
                          setJobs(true),
                            push("?job=true", undefined, { shallow: true });
                        }}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{ fontWeight: 600, color: "#37474F" }}
                            >
                              UX Content Writer
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              mx: "auto",
                              color: "#546D7A",
                              fontSize: "0.875rem",
                              marginLeft: "20px",
                            }}
                          >
                            <Box>
                              <Typography fontSize={"0.875rem"}>
                                Full time
                              </Typography>
                            </Box>
                            <Box sx={{ mx: "10px" }}>
                              <Stack
                                justifyContent={"center"}
                                alignItems={"center"}
                                direction="row"
                              >
                                <Box>
                                  <CircleIcon
                                    sx={{
                                      width: "5px",
                                      height: "10px",
                                      mr: "5px",
                                    }}
                                    fontSize="small"
                                  />
                                </Box>
                                <Box>
                                  <Typography fontSize={"0.875rem"}>
                                    Product
                                  </Typography>
                                </Box>
                              </Stack>
                            </Box>
                            <Box>
                              <Stack
                                justifyContent={"center"}
                                alignItems={"center"}
                                direction="row"
                              >
                                <Box>
                                  <CircleIcon
                                    sx={{
                                      width: "5px",
                                      height: "10px",
                                      mr: "5px",
                                    }}
                                    fontSize="small"
                                  />
                                </Box>
                                <Box>
                                  <Typography fontSize={"0.875rem"}>
                                    Dhaka, Bangladesh{" "}
                                  </Typography>
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                        {item.candidate ? (
                          <Box
                            sx={{
                              color: "#253237",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            {item.candidate} new candidates
                          </Box>
                        ) : (
                          <Box></Box>
                        )}
                      </Box>
                    </ListItemButton>
                    <Collapse
                      in={openId === item.id}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Stack padding="15px 25px">
                        <Breadcrumbs
                          separator={<NavigateNextIcon fontSize="small" />}
                          aria-label="breadcrumb"
                        >
                          <Box sx={{ px: "7px", py: "3px" }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: " #455964",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              25
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: "0.875rem",
                                textAlign: "center",
                                color: "#798f9c",
                                margin: 0,
                              }}
                            >
                              New Applied
                            </Typography>
                          </Box>
                          <Box sx={{ px: "7px", py: "3px" }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: " #455964",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              25
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: "0.875rem",
                                textAlign: "center",
                                color: "#798f9c",
                                margin: 0,
                              }}
                            >
                              Screening
                            </Typography>
                          </Box>
                          <Box sx={{ px: "7px", py: "3px" }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: " #455964",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              25
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: "0.875rem",
                                textAlign: "center",
                                color: "#798f9c",
                                margin: 0,
                              }}
                            >
                              Qualified
                            </Typography>
                          </Box>
                          <Box sx={{ px: "7px", py: "3px" }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: " #455964",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              25
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: "0.875rem",
                                textAlign: "center",
                                color: "#798f9c",
                                margin: 0,
                              }}
                            >
                              Interview
                            </Typography>
                          </Box>
                          <Box sx={{ px: "7px", py: "3px" }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: " #455964",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              25
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: "0.875rem",
                                textAlign: "center",
                                color: "#798f9c",
                                margin: 0,
                              }}
                            >
                              Offered
                            </Typography>
                          </Box>
                          <Box sx={{ px: "7px", py: "3px" }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: " #455964",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              25
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: "0.875rem",
                                textAlign: "center",
                                color: "#798f9c",
                                margin: 0,
                              }}
                            >
                              Hired
                            </Typography>
                          </Box>
                        </Breadcrumbs>
                      </Stack>
                    </Collapse>
                  </Box>
                ))}
              </List>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  style={{
                    color: "white",
                  }}
                  // onChange={(e, value) => setPage(value)}
                  // page={page}
                  count={10}
                  size="large"
                />
              </Box>
            </Box>
          </>
        ) : (
          ""
        )}
        {jobs && <Jobs setBreadState={setBreadState} breadState={breadState} />}
      </>
    </ThemeProvider>
  );
}

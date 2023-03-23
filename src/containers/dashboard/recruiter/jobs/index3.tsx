import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import { KalkeTabPanel } from "../../../../common/components/kalke-tab-panel/index";
import DetailTabContent from "./jobs-details/components/detail-tab-content";
import HiringTeamContent from "./jobs-details/components/hiring-team-content";
import HiringProcessContent from "./jobs-details/components/hiring-process-content";
import InternalNotesContent from "./jobs-details/components/internal-notes-content";
import Divider from "@mui/material/Divider";
import TablePanelKalke from "@components/tab-panel";
import { useRouter } from "next/router";
import PipelineViewMain from "./index1";
import IconButton from "@mui/material";
const JobDetailsHeader = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;
const JobsDetailsTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #253237;
  margin-right: 10px;
`;
const ActiveBtn = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
`;
const JobSubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #546d7a;
  margin-top: 1px;
`;

const ProfileTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: #253237;
  margin: 0;
`;
const ProfileSubTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #798f9c;
  margin: 0;
`;

export default function JobsDetails({
  breadState,
  setBreadState,
}: {
  breadState: any;
  setBreadState: any;
}) {
  const [pipelineview, setPipelineView] = React.useState(false);
  const {
    query: { pipeline },
    push,
    replace,
  } = useRouter();
  React.useEffect(() => {
    if (pipeline) {
      setPipelineView(true);
    }
  }, [pipeline]);
  return (
    <>
      {!pipelineview && (
        <>
          <Box>
            <Grid>
              <Grid item xs={8}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    onClick={() => setBreadState(true)}
                    color="inherit"
                    href="#"
                  >
                    Jobs
                  </Link>
                  <Typography
                    onClick={() => setBreadState(true)}
                    color="text.primary"
                  >
                    Senior Product Designer
                  </Typography>
                </Breadcrumbs>
              </Grid>
            </Grid>
            <Box
              sx={{
                px: "20px",
                py: "10px",
                mt: "20px",
                backgroundColor: "white",
              }}
            >
              <Box component="main" maxWidth="md">
                <Grid container>
                  <Grid item xs={6} md={8}>
                    <JobDetailsHeader>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "24px",
                          color: "#253237",
                        }}
                      >
                        Senior Product Designer
                      </Typography>
                      <ActiveBtn>
                        <Button
                          variant="text"
                          sx={{
                            backgroundColor: "#D1FADF;",
                            color: " #039855;",
                            outline: "none;",
                          }}
                        >
                          5 Active
                        </Button>
                      </ActiveBtn>
                    </JobDetailsHeader>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={4}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <IconButton aria-label="rename" size="small">
                      <DriveFileRenameOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="share" size="small">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                  <Typography
                    sx={{ fontWeight: 400, fontSize: "14px", color: "#546d7a" }}
                  >
                    Full time • Product • Dhaka, Bangladesh
                  </Typography>
                </Grid>
              </Box>
              <Grid container>
                <Grid item xs={6} md={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountCircleIcon
                          sx={{
                            color: "#455964",
                            fontSize: 40,
                          }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <ProfileTitle>Sabbir Hasan</ProfileTitle>
                      <ProfileSubTitle>Hiring Manager</ProfileSubTitle>
                    </ListItemText>
                  </ListItem>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={8}
                  padding={2}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    endIcon={
                      <KeyboardArrowRightIcon sx={{ color: "#455964" }} />
                    }
                    sx={{ mr: 5, borderColor: "#CFD8DB" }}
                    onClick={() => {
                      setPipelineView(true),
                        push("?pipeline=true", undefined, { shallow: true });
                    }}
                  >
                    Go to the hiring pipeline
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    endIcon={<VisibilityIcon sx={{ color: "#455964" }} />}
                    sx={{ borderColor: "#CFD8DB" }}
                  >
                    Preview
                  </Button>
                </Grid>
              </Grid>
              <Divider textAlign="center" sx={{ mb: "10px" }}></Divider>
              <Box sx={{ width: "100%", typography: "body1" }}>
                {/* <KalkeTabPanel
            tabLabels={[
              {
                label: "Details",
                component: DetailTabContent,
              },
              {
                label: "Hiring Team",
                component: HiringTeamContent,
              },
              {
                label: "Hiring Process",
                component: HiringProcessContent,
              },
              {
                label: "Internal notes",
                component: InternalNotesContent,
              },
            ]}
            tabValue={tabValue}
            setTabValue={(tabIndex: number) => setTabValue(tabIndex)}
          /> */}
                <Box>
                  <TablePanelKalke
                    sx={{ my: "20px" }}
                    tabdata={[
                      {
                        name: "Details",
                        id: 2,
                        notification: "1",
                        component: DetailTabContent,
                      },
                      {
                        name: "Hiring Team",
                        id: 3,
                        notification: "1",
                        component: HiringProcessContent,
                      },
                      {
                        name: "Hiring Process",
                        id: 4,
                        component: DetailTabContent,
                      },
                      {
                        name: "Internal notes",
                        id: 5,
                        notification: "1",
                        component: InternalNotesContent,
                      },
                    ]}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
      {pipelineview && <PipelineViewMain></PipelineViewMain>}
    </>
  );
}

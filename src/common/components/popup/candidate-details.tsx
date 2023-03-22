import {
  Box,
  Dialog,
  Grid,
  Modal,
  Typography,
  Container,
  Rating,
  ListItemButton,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
// import { makeStyles } from "@material-ui/core";
import { Stack } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import MailIcon from "@mui/icons-material/Mail";
import CircleIcon from "@mui/icons-material/Circle";
import Attachments from "./popup-tabs/attachments/index";
import Assesments from "./popup-tabs/assesment";
import InternalNotes from "./popup-tabs/internal-notes/index";
import Resume from "./popup-tabs/resume/index";
import Schedule from "./popup-tabs/schedule/index";
import Summary from "./popup-tabs/summary/index";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY: "unset",
  },
  customizedButton: {
    position: "absolute",
    top: "-20px",
    backgroundColor: "white",
    right: "-20px",
    color: "gray",
    height: "35px",
    width: "35px",
    padding: "5px",
    borderRadius: "50%",
  },
  rightClick: {
    position: "absolute",
    top: "300px",
    backgroundColor: "white",
    right: "-20px",
    color: "gray",
    height: "35px",
    width: "35px",
    padding: "5px",
    borderRadius: "50%",
  },
  leftClick: {
    position: "absolute",
    top: "300px",
    backgroundColor: "white",
    left: "-20px",
    color: "gray",
    height: "35px",
    width: "35px",
    padding: "5px",
    borderRadius: "50%",
  },
}));

export default function DetailsModal(props: any) {
  const { openPopUp, setOpenPopUp, candidate } = props;
  const { score, appliedDate, ratting, position, stage, name } = candidate;

  const [selectTab, setSelectedTab] = useState(2);
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      maxWidth="lg"
      fullWidth
      open={openPopUp}
    >
      <Box
        onClick={() => setOpenPopUp(false)}
        className={classes.customizedButton}
      >
        <CloseIcon />
      </Box>
      <Box onClick={() => setOpenPopUp(false)} className={classes.leftClick}>
        <KeyboardBackspaceIcon />
      </Box>
      <Box onClick={() => setOpenPopUp(false)} className={classes.rightClick}>
        <ArrowRightAltIcon />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          paddingX: "30px",
          paddingY: "20px",
          overflow: "hidden",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Box>
              <Grid container sx={{ display: "flex", alignContent: "center" }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                    {name}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", alignContent: "center" }}
                  item
                  xs={1}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      backgroundColor: "#D1FADF",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#039855",
                        fontSize: "0.75rem",
                      }}
                    >
                      {stage}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ my: "10px" }}>
              <Box>
                <Grid container>
                  <Grid sx={{ display: "flex" }} item xs={8}>
                    <Box>
                      <Stack direction="row">
                        <Box>
                          <Typography>Put a rating</Typography>
                        </Box>
                        <Box>
                          <InfoOutlinedIcon />
                        </Box>
                      </Stack>
                    </Box>
                    <Box sx={{ mx: "10px" }}>
                      {" "}
                      <Rating name="read-only" value={ratting} readOnly />
                    </Box>
                    <Box>
                      <Stack direction="row">
                        <Box>
                          <ModeEditOutlineOutlinedIcon />
                        </Box>
                        <Box>
                          <Typography>Edit</Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ my: "8px" }}>
                <Grid container>
                  <Grid sx={{ display: "flex" }} item xs={8}>
                    <Box>
                      <Box>
                        <Stack direction="row">
                          <Box>
                            <MailIcon />
                          </Box>
                          <Box>
                            <Typography>Sabbir@gmail.com</Typography>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                    <Box sx={{ mx: "10px" }}>
                      <Stack direction="row">
                        <Box sx={{ mr: "2px" }}>
                          <PhoneIcon />
                        </Box>
                        <Box>
                          <Typography>01xxxx</Typography>
                        </Box>
                      </Stack>
                    </Box>

                    <Box sx={{ ml: "20px" }}>
                      <Stack direction="row">
                        <Box sx={{ mr: "15px" }}>
                          <FacebookIcon />
                        </Box>
                        <Box sx={{ mr: "15px" }}>
                          <LinkedInIcon />
                        </Box>
                        <Box sx={{ mr: "15px" }}>
                          <GitHubIcon />
                        </Box>
                        <Box sx={{ mr: "15px" }}>
                          <LanguageIcon />
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid sx={{ display: "flex" }} item xs={8}>
                    <Box>
                      <Typography>{position}</Typography>
                    </Box>
                    <Box sx={{ mx: "10px" }}>
                      <Stack direction="row">
                        <Box>
                          <CircleIcon
                            sx={{ width: "5px", height: "10px", mr: "5px" }}
                            fontSize="small"
                          />
                        </Box>
                        <Box>
                          <Typography>{appliedDate}</Typography>
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
                            sx={{ width: "5px", height: "10px", mr: "5px" }}
                            fontSize="small"
                          />
                        </Box>
                        <Box>
                          <Typography>From Talent</Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
            gap={1}
          >
            <Box>
              <Button sx={{ backgroundColor: "#FEF3F2", color: "#D92D20" }}>
                Reject
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ backgroundColor: "#008FFF", color: "white" }}
                endIcon={<ArrowRightIcon />}
              >
                Move to next stage
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Box sx={{ display: "flex", mb: "3px" }}>
            {[
              {
                name: "Resume",
                id: 2,
                notification: "1",
              },
              {
                name: "Summary",
                id: 3,
                notification: "1",
              },
              {
                name: "Assesment",
                id: 4,
              },
              {
                name: "Schedule",
                id: 5,
                notification: "1",
              },
              {
                name: "Internal notes",
                id: 6,
                notification: "1",
              },
              {
                name: "Attachments",
                id: 7,
                notification: "1",
              },
            ].map((option, index) => (
              <ListItemButton
                key={index}
                sx={{
                  minHeight: 25,
                  maxWidth: 150,
                  justifyContent: "center",
                  px: "10px",
                  py: "8px",
                  borderRadius: selectTab === option?.id ? "5px" : 0,
                  border: selectTab === option.id ? "2px solid blue" : "",
                  backgroundColor:
                    selectTab === option?.id ? "#F2FAFF" : "inherit",
                }}
                onClick={() => setSelectedTab(option.id)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    color={selectTab === option?.id ? "#037BFD" : "inherit"}
                  >
                    {option.name}
                  </Typography>
                </Box>
              </ListItemButton>
            ))}
          </Box>
          <Box sx={{}}>
            {selectTab == 2 ? (
              <Resume />
            ) : selectTab == 3 ? (
              <Summary />
            ) : selectTab == 4 ? (
              <Assesments />
            ) : selectTab == 5 ? (
              <Schedule />
            ) : selectTab == 6 ? (
              <InternalNotes />
            ) : selectTab == 7 ? (
              <Attachments />
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

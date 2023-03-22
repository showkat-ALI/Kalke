import { Dialog, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { makeStyles } from "@material-ui/core";

import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import KalkeTextButton from "@buttons/kalke-text-button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  alpha,
  Box,
  FormControl,
  InputBase,
  InputLabel,
  styled,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CompanyForm from "./companyForm";
import CandidateForm from "./candidateForm";
const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY: "unset",
  },
  customizedButton: {
    position: "absolute",
    top: "10px",
    backgroundColor: "white",
    right: "20px",
    color: "gray",
    height: "35px",
    width: "35px",
    padding: "5px",
    borderRadius: "50%",
  },
}));

const signinFormSchema = z
  .object({
    email: z.string().email("Enter a valid email address!"),
    password: z.string(),
  })
  .superRefine(({ password }, ctx) => {
    if (password.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Enter your password!",
        path: ["password"],
      });
    }
  });
type SigninFormData = z.infer<typeof signinFormSchema>;
export default function RegistrationModal(props: any) {
  const [chooseRole, setChooseRole] = useState("employer");
  const [signinForm, setSigninForm] = useState("none");
  const { openRegistrationPopUp, setOpenRegistrationPopUp } = props;

  const classes = useStyles();

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      backgroundColor: "white",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      color: "#546D7A",
      transition: theme.transitions.create([
        "border-color",
        "background-color",

        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
    },
  }));
  const setForm = (role: any) => {
    role == "candidate"
      ? setSigninForm("candidate")
      : role == "employer"
      ? setSigninForm("employer")
      : setSigninForm("");
  };

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      maxWidth="lg"
      fullWidth
      open={openRegistrationPopUp}
      sx={{}}
    >
      <Box
        onClick={() => setOpenRegistrationPopUp(false)}
        className={classes.customizedButton}
      >
        <CloseIcon />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          paddingX: "60px",
          paddingY: "40px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{ color: "#253237", fontSize: "2.25rem", fontWeight: 600 }}
          >
            Welcome to Kalke
          </Typography>
          <Box sx={{ mt: "24px", mb: "133px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleOutlineIcon sx={{ color: "#037BFD", mr: "10px" }} />

              <Typography sx={{ color: "#037BFD", fontSize: "0.875rem" }}>
                Simply create your login
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: "16px" }}>
              <CheckCircleOutlineIcon sx={{ color: "#037BFD", mr: "10px" }} />

              <Typography sx={{ color: "#037BFD", fontSize: "0.875rem" }}>
                Apply quickly and easily for jobs hosted by Kalke
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleOutlineIcon sx={{ color: "#037BFD", mr: "10px" }} />

              <Typography sx={{ color: "#037BFD", fontSize: "0.875rem" }}>
                Check the status of your applications
              </Typography>
            </Box>
          </Box>
          <Box sx={{}}>
            <Typography sx={{ fontSize: "0.875rem", color: "#455964" }}>
              Millions of jobs and internships at over 300,00 employers
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image src="/ktc.png" alt="ktc" width={64} height={64} />

              <Image src="/loop.png" alt="ktc" width={64} height={64} />
              <Image src="/maya.png" alt="ktc" width={64} height={64} />
              <Image src="/sheba.png" alt="ktc" width={64} height={64} />
              <Image src="/shikho.png" alt="ktc" width={64} height={64} />
            </Box>
          </Box>
        </Box>

        <hr
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            width: "1px",
            minHeight: "300px",
            border: "1px solid #ECEFF1",
          }}
        />
        <Box>
          {signinForm == "none" ? (
            <Box>
              <Typography
                sx={{
                  color: "#253237",
                  fontSize: "2.25rem",
                  fontWeight: 600,
                }}
              >
                Let’s get started.
              </Typography>
              <Typography
                sx={{
                  color: "#253237",
                  mb: "24px",
                  mt: "8px",
                }}
              >
                Create an account as candidate or employer
              </Typography>
              <Box sx={{ width: "100%" }}>
                <Box sx={{}}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "24px",
                    }}
                  >
                    <Box
                      sx={{
                        p: "16px",
                        backgroundColor: "white",
                        border: "1px solid #ECEFF1",
                        cursor: "pointer",
                      }}
                      onClick={() => setChooseRole("candidate")}
                    >
                      <Box
                        sx={{
                          mb: chooseRole == "candidate" ? "0px" : "30px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          textAlign: "end",
                          display: chooseRole == "candidate" ? "block" : "none",
                        }}
                      >
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: "#037BFD" }}
                        />
                      </Box>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          sx={{
                            color: "#253237",
                            fontWeight: 600,
                            mb: "2px",
                          }}
                        >
                          Sign up as Candidate
                        </Typography>
                        <Typography
                          sx={{
                            color: " #607D8A",
                            fontSize: "0.75rem",
                          }}
                        >
                          looking for work
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        p: "16px",
                        backgroundColor: "white",
                        border: "1px solid #ECEFF1",
                        cursor: "pointer",
                        ml: "8px",
                      }}
                      onClick={() => setChooseRole("employer")}
                    >
                      <Box
                        sx={{ mb: chooseRole == "employer" ? "0px" : "30px" }}
                      ></Box>

                      <Box
                        sx={{
                          textAlign: "end",
                          display: chooseRole == "employer" ? "block" : "none",
                        }}
                      >
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: "#037BFD" }}
                        />
                      </Box>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          sx={{
                            color: "#253237",
                            fontWeight: 600,
                            mb: "2px",
                          }}
                        >
                          Sign up as Company
                        </Typography>
                        <Typography
                          sx={{
                            color: " #607D8A",
                            fontSize: "0.75rem",
                          }}
                        >
                          Hiring talents
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <KalkeTextButton
                    text={"Create an account with email"}
                    variant="contained"
                    size="large"
                    sx={{ width: "100%" }}
                    type={"submit"}
                    onClick={() => setForm(chooseRole)}
                  />
                </Box>
              </Box>
            </Box>
          ) : signinForm == "employer" ? (
            <CompanyForm
              setOpenRegistrationPopUp={setOpenRegistrationPopUp}
              role={chooseRole}
              setSigninForm={setSigninForm}
            />
          ) : signinForm == "candidate" ? (
            <CandidateForm
              setOpenRegistrationPopUp={setOpenRegistrationPopUp}
              role={chooseRole}
              setSigninForm={setSigninForm}
            />
          ) : (
            ""
          )}
          <Box sx={{ display: "flex", my: "24px" }}>
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "1px solid #ECEFF1",
              }}
            />
            <Typography
              sx={{ color: "#253237", fontSize: "0.875rem", mx: "20px" }}
            >
              Or
            </Typography>
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "1px solid #ECEFF1",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", width: "40%", mx: "auto", mb: "24px" }}>
            <Box>
              <Image src="/Google.png" alt="" width={32} height={32} />
            </Box>
            <Box sx={{ mx: "24px" }}>
              <Image src="/Facebook.png" alt="" width={32} height={32} />
            </Box>
            <Box>
              <Image src="/Linkedin.png" alt="" width={32} height={32} />
            </Box>
          </Box>
          <Box sx={{ mx: "auto" }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                color: "#455964",
                lineHeight: "20px",
                textAlign: "center",
              }}
            >
              Already have an account?
              <span style={{ color: "#037BFD", marginLeft: "2px" }}>Login</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

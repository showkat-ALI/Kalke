import { Dialog, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { makeStyles } from "@material-ui/core";
import jwt from "jwt-decode";
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
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const LOGIN_URL = "/api/v3/public/user/login";
import * as z from "zod";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import Router from "next/router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "src/app/hooks";
import { useLoginMutation } from "src/services/utils/features/api/authApi";
import { signin } from "src/services/utils/features/auth/authSlice";
import InputError from "@components/input-error";
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
export default function LoginModal(props: any) {
  const { openLoginPopUp, setOpenLoginPopUp } = props;

  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
  });
  const [login, { error, data, isLoading, isSuccess, isError }] =
    useLoginMutation();
  const dispatch = useAppDispatch();
  const handleLoginSubmit = async (data: SigninFormData) => {
    const userData = {
      ...data,
      allowedUserRoles: ["employer", "candidate"],
    };
    login(userData);
  };
  interface User {
    emailVerified: boolean;
    isBanned: boolean;
    profilePicture: string;
    email: string;
    fullName: string;
    id: string;
    role: string;
  }
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      const userToken = (data as { data: { accessToken: string } }).data
        .accessToken;
      const user: User = jwt(userToken); // decode your token here
      localStorage.setItem("token", userToken);
      // console.log(user);
      const {
        emailVerified,
        isBanned,
        profilePicture,
        email,
        fullName,
        id,
        role,
      } = user;

      dispatch(
        signin({
          emailVerified,
          isBanned,
          profilePicture,
          email,
          fullName,
          id,
          role,

          token: userToken,
        })
      );

      toast.success("sign in successfully!");
      setTimeout(() => {
        Router.push("/dashboard/recruiter");
      }, 1000);
    }
  }, [isError, isSuccess]);

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

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      maxWidth="lg"
      fullWidth
      open={openLoginPopUp}
    >
      <Box
        onClick={() => setOpenLoginPopUp(false)}
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
          alignItems: "center",
        }}
      >
        <Box>
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
          <Box>
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
            height: "300px",
            border: "1px solid #ECEFF1",
          }}
        />

        <Box>
          <Typography
            sx={{
              color: "#253237",
              fontSize: "2.25rem",
              fontWeight: 600,
              mb: "24px",
            }}
          >
            Your job search starts with
            <br />
            Kalke
          </Typography>
          <Box sx={{ width: "100%" }}>
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <Box sx={{}}>
                {/* <KalkeLabeledTextField
                topSx={{ mb: "12px", width: "100%" }}
                labelSx={{ fontWeight: 600 }}
                htmlFor="email"
                value={"Email"}
                id="email"
                variant={"standard"}
              /> */}
                <FormControl
                  variant="standard"
                  sx={{ mb: "12px", width: "100%" }}
                >
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: 600 }}
                  >
                    Email
                  </InputLabel>
                  <BootstrapInput
                    defaultValue="sabbir@gmail.com"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <InputError message={errors.email?.message || ""} />
                  )}
                </FormControl>

                <FormControl
                  variant="standard"
                  sx={{ mb: "8px", width: "100%" }}
                >
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: 600 }}
                  >
                    Password
                  </InputLabel>
                  <BootstrapInput
                    defaultValue="sabbir@gmail.com"
                    id="bootstrap-input"
                    type={values.showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          sx={{
                            backgroundColor: "transparent",
                            ml: "-60px",
                            "&:hover,  &.Mui-focusVisible, &:active": {
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {errors.password && (
                    <InputError message={errors.password?.message || ""} />
                  )}
                </FormControl>
                <Typography
                  sx={{
                    color: "#253237",
                    fontSize: "0.875rem",
                    textAlign: "right",
                    mb: "24px",
                  }}
                >
                  Forgot Password?
                </Typography>

                <KalkeTextButton
                  text={isLoading ? "loading ..." : "Login"}
                  variant="contained"
                  size="large"
                  sx={{ width: "100%" }}
                  type={"submit"}
                />
              </Box>
            </form>
          </Box>
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
              Don’t Have account?
              <span style={{ color: "#037BFD", marginLeft: "2px" }}>
                Create an account
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

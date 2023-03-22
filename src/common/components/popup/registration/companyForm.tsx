import KalkeCustomizedTextField from "@components/kalke-customized-texfield";
import { RollerShades } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import React, { useEffect, useState } from "react";
import KalkeTextButton from "@buttons/kalke-text-button";
import Router from "next/router";
import { useRegisterMutation } from "src/services/utils/features/api/authApi";
import InputError from "@components/input-error";
import { unknown } from "zod";
import { useAppDispatch } from "src/app/hooks";
type SignUPForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

export default function CompanyForm({
  setSigninForm,
  role,
  setOpenRegistrationPopUp,
}: {
  setSigninForm: any;
  role: any;
  setOpenRegistrationPopUp: any;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUPForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    },
  });
  const dispatch = useAppDispatch();

  const [registration, { error, data, isLoading, isSuccess, isError }] =
    useRegisterMutation();
  const handleSignUPSubmit = (data: SignUPForm) => {
    const { email, password, firstName, lastName } = data;
    const FullName = firstName + lastName;
    const userData = { email, password, fullName: FullName, role: role };
    registration(userData);
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // toast.error((error as any).data.error[Object.keys((error as any).data.error)[0]]);

      console.log("error", error);
    } else if (isSuccess) {
      toast.success(
        "Registration successful. You will get next instructions via a email soon."
      );
      setTimeout(() => {
        setOpenRegistrationPopUp(false);
      }, 1500);
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
    <>
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
          Create an account as candidate or company
        </Typography>
        <Box>
          <form onSubmit={handleSubmit(handleSignUPSubmit)}>
            <Box sx={{ display: "flex", width: "100%" }}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: 600 }}
                >
                  First Name
                </InputLabel>
                <BootstrapInput
                  placeholder="Sabbir"
                  id="email"
                  {...register("firstName", { required: true })}
                />
                {errors?.firstName && (
                  <InputError message={"Enter your first name"} />
                )}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ width: "100%", ml: "12px" }}
              >
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: 600 }}
                >
                  Last Name
                </InputLabel>
                <BootstrapInput
                  placeholder="Ahmed"
                  id="email"
                  {...register("lastName", { required: true })}
                />
                {errors?.lastName && (
                  <InputError message={"Enter your last name"} />
                )}
              </FormControl>
            </Box>

            <FormControl variant="standard" sx={{ width: "100%", my: "12px" }}>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{ fontWeight: 600 }}
              >
                Email
              </InputLabel>
              <BootstrapInput
                placeholder="sabbir@gmail.com"
                id="email"
                {...register("email", { required: true })}
              />
              {errors?.email && <InputError message={"Enter your email"} />}
            </FormControl>
            <br />
            <FormControl variant="standard" sx={{ width: "100%", mb: "12px" }}>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{ fontWeight: 600 }}
              >
                Password
              </InputLabel>
              <BootstrapInput
                id="email"
                {...register("password", { required: true })}
              />
              {errors?.password && (
                <InputError message={"Enter your Password"} />
              )}
            </FormControl>
            {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ width: "48%" }}>
                <KalkeCustomizedTextField
                  defaultValue={"FirstName"}
                  variant="standard"
                  sx={{ width: "100%", fontWeight: 600, color: "#546D7A" }}
                  {...register("firstName", { required: true })}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <KalkeCustomizedTextField
                  defaultValue={"LastName"}
                  variant="standard"
                  sx={{ width: "100%", fontWeight: 600, color: "#546D7A" }}
                  {...register("lastName", { required: true })}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <KalkeCustomizedTextField
                  defaultValue={"Email"}
                  variant="standard"
                  sx={{ width: "100%", fontWeight: 600, color: "#546D7A" }}
                  {...register("email", { required: true })}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <KalkeCustomizedTextField
                  defaultValue={"Password"}
                  variant="standard"
                  sx={{ width: "100%", fontWeight: 600, color: "#546D7A" }}
                  {...register("password", { required: true })}
                />
              </Box>

         
            </Box> */}
            <KalkeTextButton
              text={isLoading ? "loading" : "Sign Up"}
              variant="contained"
              size="large"
              sx={{ width: "100%" }}
              type={"submit"}
            />
          </form>
        </Box>
        <KalkeTextButton
          text={"Back"}
          type="contained"
          variant="contained"
          size="small"
          onClick={() => setSigninForm("none")}
          sx={{ mt: "12px" }}
        />
      </Box>
    </>
  );
}

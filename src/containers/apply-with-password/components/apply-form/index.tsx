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
import IconButton from "@mui/material/IconButton/IconButton";
import React, { useState } from "react";

export default function ApplyForm() {
  // const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const error = true;
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
    <Box
      sx={{ padding: "16px", backgroundColor: "#F9FBFC", borderRadius: "4px" }}
    >
      <Typography sx={{ color: "#253237", fontWeight: "600" }}>
        Interested?
      </Typography>
      <FormControl
        variant="standard"
        sx={{ mb: "24px", mt: "24px", width: "100%" }}
      >
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <BootstrapInput defaultValue="sabbir@gmail.com" id="bootstrap-input" />
        {/* <span style={{ color: "#F04438", fontSize: "13px" }}>
          There is already a Kalke account registered with this email. Please
          log in before you apply.
        </span> */}
      </FormControl>
      {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
      <FormControl variant="standard" sx={{ mb: "24px", width: "100%" }}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: 600 }}>
          Password
        </InputLabel>
        <BootstrapInput
          defaultValue="sabbir@gmail.com"
          id="bootstrap-input"
          type={values.showPassword ? "text" : "password"}
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
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <KalkeTextButton
        text={"Apply"}
        type="contained"
        size="large"
        sx={{ width: "100%", mb: "12px" }}
      />
      <KalkeTextButton
        text={"Send registration link to my email"}
        type="outlined"
        size="large"
        sx={{ width: "100%" }}
      />
    </Box>
  );
}

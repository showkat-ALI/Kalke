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
  Avatar,
  InputAdornment,
} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";
import { height } from "@mui/system";
import googlelogo from "../../../../assets/Images/random.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
  const [fileName, setFileName] = useState("");
  return (
    <Box
      sx={{ padding: "16px", backgroundColor: "#F9FBFC", borderRadius: "4px" }}
    >
      <Typography sx={{ color: "#253237", fontWeight: "600" }}>
        Interested?
      </Typography>
      <Box
        sx={{
          p: "8px",
          backgroundColor: "#FFFFFF",
          borderRadius: "4px",
          border: " 1px solid #ECEFF1",

          my: "24px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "95%",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar src={googlelogo.src} alt="random"></Avatar>
            <Box sx={{ ml: "10px" }}>
              <Typography sx={{ fontWeight: 600, color: "#253237" }}>
                Sabbir Hasan
              </Typography>
              <Typography>Sabbir@gmail.com</Typography>
            </Box>
          </Box>
          <Box>
            <NavigateNextIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: "24px" }}></Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.75rem", color: "#546D7A" }}>
          Documents:
        </Typography>
        <Typography sx={{ fontSize: "0.75rem", color: "#546D7A" }}>
          .doc, .docx, .pdf, .rtf, .txt
        </Typography>
      </Box>
      <Button
        variant="outlined"
        component="label"
        sx={{
          width: "100%",
          mb: "12px",
          mt: "4px",
          border: "1px solid #8DD0FF",
        }}
      >
        {/* {fileName} */}
        {fileName.length <= 0 && (
          <>
            <AttachFileIcon sx={{ color: "#037BFD" }} />
            <Typography
              sx={{
                color: "#037BFD",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              Upload CV
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
                  color: "#037BFD",
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
      <Button
        variant="outlined"
        component="label"
        sx={{
          width: "100%",
          mb: "12px",
          mt: "4px",
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
                fontWeight: 600,
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

      <KalkeTextButton
        text={"Apply Now"}
        type="contained"
        size="large"
        sx={{ width: "100%", fontWeight: 600, my: "24px" }}
      />
      <Typography
        sx={{ fontSize: "0.75rem", color: "#546D7A", textAlign: "center" }}
      >
        You will receive a link to verify your email and your account will be
        created. You can also apply with
        <span style={{ color: "#008FFF", marginLeft: "2px" }}>
          creating a password.
        </span>
      </Typography>
    </Box>
  );
}

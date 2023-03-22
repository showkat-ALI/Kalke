import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import googleLogo from "../../../../assets/Images/random.png";

const Account = () => {
  return (
    <Box mb={4}>
      <Typography mb={3} fontWeight="600" variant="h5">
        Personal Information
      </Typography>
      <Box bgcolor="#ffffff" p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <IconButton
                    sx={{
                      border: "3px solid #eee",
                      borderRadius: "50%",
                      bgcolor: "#ffffff",
                    }}
                    aria-label="upload picture"
                    component="label"
                  >
                    <CameraAltIcon color="primary" />
                    <input hidden accept="image/*" type="file" />
                  </IconButton>
                }
              >
                <Avatar
                  sx={{
                    height: "150px",
                    width: "150px",
                  }}
                  src={googleLogo.src}
                  alt="A"
                />
              </Badge>
              {/* <Button variant="outlined" color="info">
                Change Profile Picture
              </Button> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="About" multiline rows={4} />
          </Grid>
          <Grid item xs={6} />
          <Grid item justifyContent="end" alignSelf="end" xs={6}>
            <Button fullWidth sx={{ height: "100%" }} variant="contained">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Account;

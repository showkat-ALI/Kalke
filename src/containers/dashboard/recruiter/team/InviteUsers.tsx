import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const InviteUsers = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box mb={4}>
      <Typography mb={3} fontWeight="600" variant="h5">
        Team members
      </Typography>
      <Box bgcolor="#ffffff" p={2}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                User Role
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="owner"
                  control={<Radio />}
                  label="Owner"
                />
                <Typography
                  color="textSecondary"
                  ml={4}
                  gutterBottom
                  variant="body2"
                >
                  Full account access, including billing and more.
                </Typography>
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Administrator"
                />
                <Typography
                  color="textSecondary"
                  ml={4}
                  gutterBottom
                  variant="body2"
                >
                  Has owner level access except billing functions.
                </Typography>
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom"
                />
                <Typography
                  color="textSecondary"
                  ml={4}
                  gutterBottom
                  variant="body2"
                >
                  Permission to selected functions.
                </Typography>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button fullWidth variant="outlined">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button fullWidth variant="contained">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InviteUsers;

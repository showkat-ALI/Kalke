import AttachFile from "@mui/icons-material/AttachFile";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CompanyProfile = () => {
  const [fileName, setFileName] = useState({ name: "" });
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box mb={4}>
      <Typography mb={3} fontWeight="600" variant="h5">
        Company Profile
      </Typography>
      <Box bgcolor="#ffffff" p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom color="textPrimary" variant="body2">
              Upload your logo
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              component="label"
            >
              <AttachFile />
              <Typography variant="subtitle2">
                {fileName.name ? fileName.name : "Select file"}
              </Typography>
              <input
                type="file"
                hidden
                onChange={(e) => {
                  setFileName(e.target.files![0]);
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth size="small" label="Company name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth size="small" label="Company website" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth size="small" label="Number of employees" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth size="small" label="Location" />
          </Grid>
          <Grid item xs={6}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Industry*</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Industry*"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Sub-industry*
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Sub-industry*"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="filled-multiline-flexible"
              label="About"
              multiline
              minRows={4}
              fullWidth
              value={`HR: I also wanted to touch upon your future goals and aspirations. We value our employees growth and development, and we would like to support you in any way we can. Expanding my skill set and knowledge in user experience design. I would love to work on more complex projects and lead a team in the future.`}
            />
          </Grid>
          <Grid item xs={6}>
            <Button color="info" fullWidth variant="outlined">
              Preview
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CompanyProfile;

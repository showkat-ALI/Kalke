import * as React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import Autocomplete from "@mui/material/Autocomplete";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Box from "@mui/system/Box";

const top100Films = [
  { title: "UI design", year: 1994 },
  { title: "UX design", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
];

const JobEditor = styled.div`
  .jobDescWrapper {
  }
  .jobWrapperToolbar {
  }
  .jobWrapperEditor {
    border: 1px solid #393838;
    height: 150px;
  }
`;
export default function CreateJob() {
  const [age, setAge] = React.useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box component="main">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Box
              component="p"
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
                color: "#253237",
              }}
            >
              Create New Job
            </Box>
          </Box>
          <Box sx={{ ml: "24px", mr: "8px" }}>
            <Box
              component={"div"}
              style={{
                backgroundColor: "white",
                paddingInlineStart: "12px",
                border: "1px solid #ECEFF1",
                borderRadius: "4px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    defaultChecked
                    size="small"
                    sx={{ backgroundColor: "white", color: "#455964" }}
                  />
                }
                label="Active"
                sx={{
                  color: "#455964",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "18px",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Button
              variant="outlined"
              endIcon={<RemoveRedEyeIcon />}
              size="large"
              sx={{
                textTransform: "capitalize",
                fontWeight: "500",
                fontSize: "14px",
                color: "#037BFD",
                lineHeight: "20px",
              }}
            >
              View as Candidate
            </Button>
          </Box>
        </Box>
      </Box>
      <Box component="main" sx={{ backgroundColor: "white", padding: "20px" }}>
        <Box
          component="p"
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#546D7A",
          }}
        >
          Job Title
        </Box>
        <TextField
          required
          fullWidth
          label="Product designer"
          id="job-title"
          size="small"
          error={true}
          helperText="job title"
        />
        <Grid container spacing={1}>
          <Grid xs={6} item>
            <Box
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#546D7A",
              }}
            >
              Department
            </Box>
            <TextField
              required
              fullWidth
              label="Product designer"
              id="depertment"
              size="small"
              error={true}
              helperText="depertment"
            />
          </Grid>
          <Grid xs={6} item>
            <Box
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#546D7A",
              }}
            >
              Employment Type
            </Box>
            <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="demo-select-small">Full-Time</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Full-Time"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Full-Time</MenuItem>
                <MenuItem value={20}>Full-Time</MenuItem>
                <MenuItem value={30}>Full-Time</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          component="p"
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#546D7A",
          }}
        >
          Skill
        </Box>
        <Autocomplete
          multiple
          size="small"
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[13]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} placeholder="add skill" size="small" />
          )}
        />
        <Box
          component="p"
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#546D7A",
          }}
        >
          Location
        </Box>
        <TextField
          required
          fullWidth
          label="Location"
          id="location"
          size="small"
        />
        <Box
          component="p"
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#546D7A",
          }}
        >
          Job description
        </Box>

        <JobEditor>
          <Editor
            wrapperClassName="jobDescWrapper"
            toolbarClassName="jobWrapperToolbar"
            editorClassName="jobWrapperEditor"
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </JobEditor>

        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Grid container>
              <Grid item={true}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="default" />}
                  label="This is a work from home/remote position"
                  sx={{
                    paddingTop: "10px",
                    paddingRight: "10px",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#253237",
                  }}
                />
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item>
            <Grid item mt={5}>
              <Box
                component={"p"}
                style={{
                  paddingRight: "10px",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#253237",
                }}
              >
                Salary information
              </Box>
            </Grid>
            <Grid>
              <FormControlLabel
                style={{
                  paddingRight: "10px",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#253237",
                }}
                control={<Checkbox value="remember" color="default" />}
                label="Include salary information"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} item>
          <Grid xs={6} item>
            <Box
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#546D7A",
              }}
            >
              Currency
            </Box>
            <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="demo-select-small">BDT</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Full-Time"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>BDT</MenuItem>
                <MenuItem value={20}>USD</MenuItem>
                <MenuItem value={30}>EURO</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} item>
            <Box
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#546D7A",
              }}
            >
              Paid Every
            </Box>
            <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="demo-select-small">Year</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Full-Time"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>2020</MenuItem>
                <MenuItem value={20}>2022</MenuItem>
                <MenuItem value={30}>2023</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1} item sx={{ mt: 1 }}>
          <Grid xs={6} item>
            <Box
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#546D7A",
              }}
            >
              Minimum Salary
            </Box>
            <TextField
              required
              fullWidth
              label="Product designer"
              id="salary"
              size="small"
              error={true}
              helperText="minimum salary"
            />
          </Grid>
          <Grid xs={6} item>
            <Box
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#546D7A",
              }}
            >
              Minimum Salary
            </Box>
            <TextField
              required
              fullWidth
              label="Product designer"
              id="salary"
              size="small"
              error={true}
              helperText="minimum salary"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} mt={2} mb={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#008FFF;",
                textTransform: "capitalize",
                fontWeight: "500",
                fongtSize: "16px",
                lineHeight: "24px",
              }}
            >
              Create Job
            </Button>
          </Grid>
          <Grid item xs={6} md={8}></Grid>
        </Grid>
      </Box>
    </>
  );
}

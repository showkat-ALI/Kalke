import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import PipelineTableView from "../../containers/pipeline/pipeline-Table/PipelineTableView";

const ListViewHeader = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;
const ListViewDetailsTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #253237;
  margin-right: 10px;
`;
const ActiveBtn = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 30px;
  margin-right: 10px;
`;
const ListviewSubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #546d7a;
  margin-top: -35px;
`;
const ListviewCount = styled.ul`
  padding: 0;
  color: #12b76a;
`;
const ListviewCountText = styled.h5`
  font-weight: 500;
  font-size: 14px;
  color: #455964;
  margin-bottom: 10px;
`;
const IconHelperText = styled.h6`
  color: #455964;
`;

const BodyTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #37474f;
`;
const CandidatePanel = styled.div``;
const CandidateType = styled.div;
export default function JobPipeline() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  function handleChange(
    arg0: string
  ):
    | ((event: React.SyntheticEvent<Element, Event>, expanded: boolean) => void)
    | undefined {
    throw new Error("Function not implemented.");
  }
  const [tab, setTab] = React.useState("list");
  return (
    <Container component="main" maxWidth="md">
      <Grid container marginTop={3}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} display={"flex"} justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#008FFF;",
            }}
          >
            Create New Job
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={8}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="#">
              Jobs
            </Link>
            <Link color="inherit" href="#">
              Senior Product Designer
            </Link>
            <Typography color="text.primary">Hiring Pipeline</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Container component="main" maxWidth="md">
        <Grid container>
          <Grid item xs={6} md={8}>
            <Box
              component={"div"}
              style={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "row",
              }}
            >
              <ListViewDetailsTitle>
                <h3>Senior Product Designer</h3>
              </ListViewDetailsTitle>
              <ActiveBtn>
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "#D1FADF",
                    color: " #039855",
                    outline: "none",
                  }}
                >
                  5 Active
                </Button>
              </ActiveBtn>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} display={"flex"} justifyContent={"flex-end"}>
            <IconButton aria-label="rename" size="small">
              <DriveFileRenameOutlineIcon />
            </IconButton>
            <IconButton aria-label="share" size="small">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <ListviewSubTitle>
              <p>Full time • Product • Dhaka, Bangladesh</p>
            </ListviewSubTitle>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <Chip label="Visual Design" onClick={handleClick} />
              <Chip label="UI Design" onClick={handleClick} />
              <Chip label="UX Design" onClick={handleClick} />
              <Chip label="Business Goal" onClick={handleClick} />
              <Chip label="User Needs" onClick={handleClick} />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container component="main" maxWidth="md">
        <Grid container marginTop={2}>
          <Grid item xs={8} md={6}>
            <Grid container>
              <Grid item sx={{ width: "40%" }}>
                <BodyTitle>3 Total Candidates</BodyTitle>
              </Grid>
              <Grid item sx={{ width: "20%" }}>
                <ListviewCount>
                  <li>
                    <ListviewCountText>1 new</ListviewCountText>
                  </li>
                </ListviewCount>
              </Grid>
              <Grid item sx={{ width: "20%" }}>
                <IconButton
                  value="list"
                  aria-label="list"
                  size="small"
                  sx={{ padding: 0 }}
                  onClick={() => setTab("list")}
                >
                  <ViewColumnIcon fontSize="small" />
                  <IconHelperText>List</IconHelperText>
                </IconButton>
              </Grid>
              <Grid item sx={{ width: "20%" }}>
                <IconButton
                  value="module"
                  aria-label="module"
                  size="small"
                  sx={{ padding: 0 }}
                  onClick={() => setTab("table")}
                >
                  <GridViewIcon fontSize="small" />
                  <IconHelperText>Table</IconHelperText>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} md={6}>
            <Grid container spacing={2} marginTop={"1px"}>
              <Grid item sx={{ width: "30%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Applied Date
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Year"
                    size="small"
                  >
                    <MenuItem value={10}>2022</MenuItem>
                    <MenuItem value={20}>2023</MenuItem>
                    <MenuItem value={30}>2024</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sx={{ width: "60%" }}>
                <TextField
                  fullWidth
                  id="Search"
                  placeholder="Search"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ width: "10%" }}>
                <Button variant="text" fullWidth sx={{ color: "#546D7A" }}>
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {
        <Box>
          {tab == "list" ? (
            <Typography>list</Typography>
          ) : tab == "table" ? (
            <PipelineTableView />
          ) : (
            ""
          )}
        </Box>
      }
    </Container>
  );
}

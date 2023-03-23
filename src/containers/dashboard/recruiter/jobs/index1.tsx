import * as React from "react";
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

import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import PipelineTableView from "../../../pipeline/pipeline-Table/PipelineTableView";

import PipelineListView from "../../../pipeline/pipeline-list-view/index";
import { InputBase, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";

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
export default function Jobs() {
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
  const [age, setAge] = React.useState("");
  const handleDateChange = (event: any) => {
    setAge(event.target.value);
  };
  const router = useRouter();
  return (
    <Box component="main" maxWidth="md">
      <Grid>
        <Grid item xs={8}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              onClick={() => router.replace({ pathname: "/jobs" })}
              color="inherit"
              href="#"
            >
              Jobs
            </Link>
            <Link
              onClick={() => router.replace({ pathname: "/job-preview" })}
              color="inherit"
              href="#"
            >
              Senior Product Designer
            </Link>
            <Typography color="text.primary">Hiring Pipeline</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Box sx={{ px: "15px" }}>
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
              <Chip
                sx={{ color: "#253237", fontWeight: 400, fontSize: "0.75rem" }}
                label="Visual Design"
                onClick={handleClick}
              />
              <Chip
                sx={{ color: "#253237", fontWeight: 400, fontSize: "0.75rem" }}
                label="UI Design"
                onClick={handleClick}
              />
              <Chip
                label="UX Design"
                onClick={handleClick}
                sx={{ color: "#253237", fontWeight: 400, fontSize: "0.75rem" }}
              />
              <Chip
                label="Business Goal"
                onClick={handleClick}
                sx={{ color: "#253237", fontWeight: 400, fontSize: "0.75rem" }}
              />
              <Chip
                label="User Needs"
                onClick={handleClick}
                sx={{ color: "#253237", fontWeight: 400, fontSize: "0.75rem" }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          px: "15px",
          py: "20px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Grid container alignItems="center" justifyContent={"space-between"}>
          <Grid item xs={2}>
            <Typography
              sx={{
                fontWeight: 600,

                color: "#37474F",
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            >
              {" "}
              3 Total Candidates
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "7px",
                height: "7px",
                backgroundColor: "#12B76A",
                borderRadius: "50%",
                marginRight: "4px",
              }}
            ></Box>
            <Box>
              <Typography sx={{ color: "#546D7A", fontFamily: "inherit" }}>
                1 new
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            {/* <KalkeIconTextButton size="small" variant="outlined"  startIcon={<DeleteIcon />}>list</KalkeIconTextButton> */}
            <IconButton
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                color: tab == "list" ? "#37474F" : "#B0BEC4",
                borderRadius: "15px",
              }}
              onClick={() => setTab("list")}
            >
              <ViewColumnIcon fontSize="small" />
              <Typography
                sx={{
                  fontWeight: tab == "list" ? 600 : 500,
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                }}
              >
                List
              </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: "-15px" }}>
            <IconButton
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                borderRadius: "15px",
                color: tab == "table" ? "#37474F" : "#B0BEC4",
              }}
              onClick={() => setTab("table")}
            >
              <GridViewIcon fontSize="small" />

              <Typography
                sx={{
                  fontWeight: tab == "table" ? 600 : 500,
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                }}
              >
                Table
              </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <FormControl
              sx={{
                // minWidth: 90,
                backgroundColor: "white",

                // minWidth: "100px",
                minWidth: "135px",
              }}
              size="small"
            >
              <InputLabel
                id="demo-select-small"
                sx={{ color: "#455964", fontWeight: 600, fontSize: "0.875rem" }}
              >
                Applied date
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "##CFD8DB",
                  },
                }}
                onChange={handleDateChange}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "140px",
                backgroundColor: "white",
                border: "1px solid #CFD8DB",
              }}
            >
              <IconButton type="button" sx={{}} aria-label="search">
                <SearchIcon
                  sx={{
                    color: "#455964",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                  }}
                />
              </IconButton>
              <InputBase
                sx={{
                  flex: 1,
                  color: "#455964",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  borderRadius: "10px",
                }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Box>
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: "5px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "inherit",
                color: "#37474F",
                fontSize: "1rem",
              }}
            >
              Clear all
            </Typography>
          </Grid>
        </Grid>

        {
          <Box sx={{ backgroundColor: "white", mt: "20px" }}>
            {tab == "list" ? (
              <PipelineListView />
            ) : tab == "table" ? (
              <PipelineTableView />
            ) : (
              ""
            )}
          </Box>
        }
      </Box>
    </Box>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
const JobStatus = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;
const JobsTabTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #253237;
  margin-right: 10px;
`;
const JobsTabCount = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #455964;
  margin-top: 25px;
  margin-right: 10px;
`;
const ActiveBtn = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 30px;
  margin-right: 10px;
`;
const InActiveBtn = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #455964;
  margin-top: 30px;
  margin-right: 10px;
`;
const JobStatBlock = styled.div`
  padding: 7px 3px;
`;
const JobStatBlockTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #455964;
  margin: 0;
  text-align: center;
`;
const JobStatBlockSubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #798f9c;
  margin: 0;
`;

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ paddingRight: "0" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          <h3>UX Content Writer</h3>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          <p>Full Time</p>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          <p>.Product</p>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          <p>Dhaka,Bangladesh</p>
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          <h4>02 New Candidates</h4>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
          padding="none"
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack padding="15px 25px">
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <JobStatBlock>
                  <JobStatBlockTitle>25</JobStatBlockTitle>
                  <JobStatBlockSubTitle>dddsfsfsf</JobStatBlockSubTitle>
                </JobStatBlock>
                <JobStatBlock>
                  <JobStatBlockTitle>25</JobStatBlockTitle>
                  <JobStatBlockSubTitle>dddsfsfsf</JobStatBlockSubTitle>
                </JobStatBlock>
                <JobStatBlock>
                  <JobStatBlockTitle>25</JobStatBlockTitle>
                  <JobStatBlockSubTitle>dddsfsfsf</JobStatBlockSubTitle>
                </JobStatBlock>
                <JobStatBlock>
                  <JobStatBlockTitle>25</JobStatBlockTitle>
                  <JobStatBlockSubTitle>dddsfsfsf</JobStatBlockSubTitle>
                </JobStatBlock>
                <JobStatBlock>
                  <JobStatBlockTitle>25</JobStatBlockTitle>
                  <JobStatBlockSubTitle>dddsfsfsf</JobStatBlockSubTitle>
                </JobStatBlock>
                <JobStatBlock>
                  <JobStatBlockTitle>25</JobStatBlockTitle>
                  <JobStatBlockSubTitle>dddsfsfsf</JobStatBlockSubTitle>
                </JobStatBlock>
              </Breadcrumbs>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("UX Content Writer", 159, 6.0, 24, 4.0, 3.99),
  createData("UX Content Writer", 237, 9.0, 37, 4.3, 4.99),
  createData("UX Content Writer", 262, 16.0, 24, 6.0, 3.79),
  createData("UX Content Writer", 305, 3.7, 67, 4.3, 2.5),
  createData("UX Content Writer", 356, 16.0, 49, 3.9, 1.5),
];

export default function JobsTab() {
  const [age, setAge] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  return (
    <Container component="main" maxWidth="md">
      <JobStatus>
        <JobsTabTitle>
          <h3>Jobs</h3>
        </JobsTabTitle>
        <JobsTabCount>
          <p>24 Total Jobs</p>
        </JobsTabCount>
        <ActiveBtn>
          <Button
            variant="text"
            sx={{
              backgroundColor: "#D1FADF;",
              color: " #039855;",
              outline: "none;",
            }}
          >
            5 Active
          </Button>
        </ActiveBtn>
        <InActiveBtn>
          <Button variant="contained" disabled>
            Inactive
          </Button>
        </InActiveBtn>
      </JobStatus>

      <Grid container spacing={2} marginBottom="10px">
        <Grid item sx={{ width: "42%" }}>
          <TextField
            fullWidth
            id="Search"
            label="Search"
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
        <Grid item sx={{ width: "20%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              All departments
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Year"
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={10}>2022</MenuItem>
              <MenuItem value={20}>2023</MenuItem>
              <MenuItem value={30}>2024</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ width: "17%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              All jobs type
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Year"
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={10}>2022</MenuItem>
              <MenuItem value={20}>2023</MenuItem>
              <MenuItem value={30}>2024</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ width: "12%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Active</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Year"
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={10}>2022</MenuItem>
              <MenuItem value={20}>2023</MenuItem>
              <MenuItem value={30}>2024</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ width: "9%" }}>
          <Button variant="text" fullWidth>
            Clear
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container marginTop={5}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Pagination count={10} variant="outlined" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
}

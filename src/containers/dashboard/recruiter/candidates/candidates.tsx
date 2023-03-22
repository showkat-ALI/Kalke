import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Rating,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
import { Container } from "@mui/system";
import Candidate from "./single-cadidate";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "../../../../../styles/style";
import CandidateFilter from "./components/candidate-filter";

export default function Candidates() {
  const [age, setAge] = useState<string | number>("");
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const cadidates = [
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 3.5,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 4,
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
  ];

  return (
    <ThemeProvider theme={CustomTheme}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
            }}
          >
            Candidates
          </Typography>
        </Box>
        <Box sx={{ ml: "20px" }}>
          <Typography sx={{ fontSize: "0.875rem" }}>
            54 Total Candidates
          </Typography>
        </Box>
      </Box>
      <CandidateFilter />
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          height: "660px",
          display: "flex",
          width: "100%",
          px: "10px",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {cadidates.map((candidate: any, idx: any) => (
          <Candidate
            key={idx}
            // onClick={() => setOpenPopUp(true)}
            candidate={candidate}
          />
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            style={{
              color: "white",
            }}
            // onChange={(e, value) => setPage(value)}
            // page={page}
            count={10}
            size="large"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

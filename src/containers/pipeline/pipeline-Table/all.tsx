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
  Checkbox,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useState } from "react";
import { Container } from "@mui/system";

export default function All() {
  const [age, setAge] = useState<string | number>("");
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const cadidates = [
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      origin: "Talent",
      id: 1,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",

        width: "1000px",
        p: "10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ECEFF1",
          // border: "1px solid red",
          borderRadius: "2px",
          py: "6px",
        }}
      >
        <Grid sx={{ alignItems: "center" }} container>
          <Grid item xs={1}>
            <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography>Name</Typography>
              <ArrowDropDownIcon />
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography>Status</Typography>
              <ArrowDropDownIcon />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Origin</Typography>
              <ArrowDropDownIcon />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography>Sourced on</Typography>
              <ArrowDropDownIcon />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography>Score</Typography>
              <ArrowDropDownIcon />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#FFFFFF" }}>
        {cadidates.map((candidate: any, idx: any) => (
          <Grid
            key={idx}
            container
            sx={{
              backgroundColor: "#F9FBFC",
              alignContent: "center",
              my: "5px",
              borderRadius: "2px",
              paddingY: "8px",
              border: "1px solid #ECEFF1",
            }}
          >
            {/* {const{name}=candidate} */}
            <Grid item xs={1}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {/* {candidate.name} */}
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
              item
              xs={4}
            >
              <Typography sx={{ fontSize: "0.875rem" }}>
                {candidate.name}
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ECEFF1",
              }}
              item
              xs={1}
            >
              <Typography
                sx={{
                  color: "#607D8A",
                  fontSize: "0.75rem",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ECEFF1",
                }}
              >
                {candidate.stage}
              </Typography>
            </Grid>

            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.875rem" }}>
                {candidate.origin}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.875rem" }}>
                {candidate.appliedDate}
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
              item
              xs={2}
            >
              <Typography sx={{}}>{candidate.score}</Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

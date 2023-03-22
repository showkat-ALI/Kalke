// import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";

import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";

// chart data
import OverviewMainChart from "./overview-main-chart";
import styled from "@emotion/styled";

const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];
const jobs = [
  {
    value: "today",
    label: "All Jobs",
  },
  {
    value: "month",
    label: "All Application",
  },
  {
    value: "year",
    label: "All Candidates",
  },
];
const ChooseOption = styled(TextField)(() => ({
  padding: "0px",
}));
import { makeStyles } from "@mui/styles";
import KalkeDropDown from "@components/kalke-drop-down";
import KalkeSwitch from "@buttons/switch-button";

// const useStyles = makeStyles({
//   TextField: {
//     padding: "0px",
//   },
// });
const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      // width: 200,
      paddingX: "0px",
      // backgroundColor: "InfoText",
    },
  },
}));
// ==============================|| DASHBOARD DEFAULT - TOTAL Application BAR CHART ||============================== //
const OverviewChart = ({ isLoading }: { isLoading: boolean }) => {
  const [age, setAge] = useState<string | number>("");
  const handleLocatontype = (event: any) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  const theme = useTheme();

  return (
    <>
      {/* // <MainCard> */}
      <Grid
        sx={{
          backgroundColor: "white",
          paddingX: "10px",
          paddingTop: "20px",
          width: "100%",
        }}
        container
        gap={"5"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: 600, color: "#253237" }}>
            Statistics of All Applications
          </Typography>

          <Box
            sx={{
              display: "flex",

              width: "40%",
            }}
          >
            <Box>
              <KalkeSwitch
                KalkebgColor={"#BCE2FF"}
                rightOption={"Applications"}
              />
            </Box>
            <Box>
              <KalkeSwitch KalkebgColor={"#21ACFF"} rightOption={"Rejected"} />
            </Box>
            <Box>
              <KalkeSwitch
                KalkebgColor={"#1168EB"}
                rightOption={"Shortlisted"}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "30%",
            }}
          >
            <Box
              sx={{
                width: "50%",
                marginRight: "8px",
              }}
            >
              <KalkeDropDown
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  border: "1px solid  #ECEFF1",
                  borderRadius: "3px",
                }}
                key={"location-type"}
                id={"location-type"}
                label="location type"
                onChange={handleLocatontype}
                size="small"
                name="All Jobs"
                options={["1", "2", "3"]}
                value={age}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
              }}
            >
              <KalkeDropDown
                sx={{
                  backgroundColor: "white",
                  border: "1px solid  #ECEFF1",
                  borderRadius: "3px",
                  width: "100%",
                }}
                key={"location-type"}
                id={"location-type"}
                label="location type"
                onChange={handleLocatontype}
                size="small"
                name="Year"
                options={["1", "2", "3"]}
                value={age}
              />
            </Box>
          </Box>
        </Box>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <OverviewMainChart />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              Jan 2022 - Dec 2022
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* // </MainCard> */}
    </>
  );
};

export default OverviewChart;

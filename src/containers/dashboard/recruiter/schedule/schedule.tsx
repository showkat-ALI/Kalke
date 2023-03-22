import { TabPanel } from "@components/kalke-tab-panel";
import ScheduleCard from "@components/ScheduleCard";
import { Search } from "@mui/icons-material";
import {
  Box,
  Divider,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { SyntheticEvent, useState } from "react";
import { a11yProps } from "src/services/utils";

export default function Schedule() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box mb={4}>
      <Box display="flex" mb={3} alignItems="center" gap={1}>
        <Typography fontWeight="600" variant="h5">
          Schedule
        </Typography>
        <Typography fontWeight={500} color="textSecondary" variant="body2">
          12 Total schedules
        </Typography>
      </Box>
      <Box p={1} bgcolor="#ffffff">
        <Box display="flex" py={1} gap={2} alignItems="center">
          <TextField
            fullWidth
            sx={{ maxWidth: "400px" }}
            size="small"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <StyledTab label="Upcoming" {...a11yProps(0)} />
            <StyledTab label="Pending" {...a11yProps(1)} />
            <StyledTab label="Past" {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <Divider sx={{ my: 1 }} />
        <TabPanel value={value} index={0}>
          <Box display="flex" flexDirection="column" gap={1}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ScheduleCard key={item} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Pending
        </TabPanel>
        <TabPanel value={value} index={2}>
          Past
        </TabPanel>
      </Box>
    </Box>
  );
}

//COMPONENTS

const StyledTab = styled(Tab)({
  background: "#F2FAFF",
  marginRight: "5px",
  backgroundColor: "transparent",
  borderRadius: "4px",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#455964",
  "&.MuiTab-root": {
    minHeight: "40px",
    padding: "0px",
    textTransform: "capitalize",
  },
  "&.Mui-selected": {
    color: "#037BFD",
    backgroundColor: "#F2FAFF",
    border: "1px solid #8DD0FF",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#F2FAFF",
  },
});

const StyledTabs = styled(Tabs)({
  "&.MuiTabs-root": {
    minHeight: "30px",
    textTransform: "capitalize",
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});

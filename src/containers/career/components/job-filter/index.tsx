import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import KalkeDropDown from "../../../../common/components/kalke-drop-down";

export default function JobFilter() {
  const [age, setAge] = useState<string | number>("");
  const handleLocatontype = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        px: "16px",
        py: "8px",
        borderRadius: "2px",
        background: "#ECEFF1",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box color="#455964" fontWeight={600}>
          Filter by
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "75%",
            mx: "10px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <KalkeDropDown
              sx={{
                backgroundColor: "white",

                width: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              key={"location-type"}
              id={"location-type"}
              label="location type"
              onChange={handleLocatontype}
              size="small"
              name="All Department"
              options={["1", "2", "3"]}
              value={age}
            />
          </Box>
          <Box sx={{ width: "50%", ml: "5px" }}>
            <KalkeDropDown
              sx={{
                backgroundColor: "white",
                width: "100%",

                border: "none",
                borderRadius: "3px",
              }}
              key={"location"}
              id={"location"}
              label="location"
              onChange={handleLocatontype}
              size="small"
              name="All Location"
              options={["1", "2", "3"]}
              value={age}
            />
          </Box>
        </Box>

        <Box color="#455964" fontWeight={600}>
          Clear
        </Box>
      </Box>
    </Box>
  );
}

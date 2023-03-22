import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import KalkeDropDown from "@components/kalke-drop-down";
import KalkeTextField from "@components/kalke-text-field";
import { CustomTheme } from "styles/style";

export default function JobsFilter() {
  const [age, setAge] = useState<string | number>("");
  const [search, setSearch] = useState("");

  const handleLocatointype = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        // border: "1px solid red",
        borderRadius: "2px",
        // px: "12px",
        py: "8px",
        alignItems: "center",
        px: "8px",
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: {
            xl: "35%",
            lg: "27%",
          },
        }}
      >
        <KalkeTextField
          name="candidate-search"
          placeholder=""
          error={false}
          message=""
          size="small"
          value={search}
          onChange={setSearch}
          label={
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <SearchIcon sx={{ width: "25px", marginRight: "5px" }} />
              <Box
                component={"div"}
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Search
              </Box>
            </Box>
          }
          sx={{
            width: "100%",

            height: "40px",
          }}
          border={false}
        />
      </Box>
      <Box
        sx={{
          width: {
            xl: "25%",
            lg: "27%",
          },
          ml: "6px",
        }}
      >
        <KalkeDropDown
          // minWidth={"100px"}
          sx={{
            backgroundColor: "white",
            border: "none",
            width: "100%",

            fontWeight: 600,
            borderRadius: "3px",
          }}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="All departments"
          options={["1", "2", "3"]}
          value={age}
        />
      </Box>
      <Box
        sx={{
          width: {
            xl: "20%",
            lg: "24%",
          },
          mx: "6px",
        }}
      >
        <KalkeDropDown
          // minWidth={"140px"}
          sx={{
            backgroundColor: "white",
            border: "none",

            borderRadius: "3px",

            width: "100%",
            fontWeight: 600,
          }}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="All jobs types"
          options={["1", "2", "3"]}
          value={age}
        />
      </Box>
      <Box
        sx={{
          width: {
            xl: "10%",
            lg: "15%",
          },
          mr: "6px",
        }}
      >
        <KalkeDropDown
          sx={{
            backgroundColor: "white",
            border: "none",
            width: "100%",

            fontWeight: 600,
            borderRadius: "3px",
          }}
          // minWidth={"80px"}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="Active"
          options={["1", "2", "3"]}
          value={age}
        />
      </Box>
      <Box>
        <Box>
          <Typography sx={{ color: "#455964" }}>Clear</Typography>
        </Box>
      </Box>
    </Box>
  );
}

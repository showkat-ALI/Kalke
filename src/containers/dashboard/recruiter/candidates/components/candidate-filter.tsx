import { Box, Container, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import KalkeDropDown from "@components/kalke-drop-down";
import KalkeTextField from "@components/kalke-text-field";
import { CustomTheme } from "styles/style";

export default function CandidateFilter() {
  const [age, setAge] = useState<string | number>("");
  const [search, setSearch] = useState("");

  const handleLocatointype = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ECEFF1",
        // border: "1px solid red",
        borderRadius: "2px",
        // px: "12px",
        py: "6px",

        display: "flex",
        justifyContent: "space-around",
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
          minWidth: "120px",
          maxWidth: "150px",
          height: "40px",
        }}
        border={false}
      />
      <Box sx={{ dipsplay: "flex" }}>
        <KalkeDropDown
          // minWidth={"100px"}
          sx={{
            backgroundColor: "white",
            border: "none",
            minWidth: {
              xs: "85px",
              sm: "85px",
              md: "80px",
              lg: "85px",
              xl: "100px",
            },

            fontWeight: 600,
            borderRadius: "3px",
            ml: {
              xs: "5px",
              sm: "5px",
              md: "5px",
              lg: "2px",
              xl: "0px",
            },
          }}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="Stages"
          options={["1", "2", "3"]}
          value={age}
        />
        <KalkeDropDown
          // minWidth={"140px"}
          sx={{
            backgroundColor: "white",
            border: "none",
            minWidth: {
              xs: "100px",
              sm: "100px",
              md: "95px",
              lg: "110px",
              xl: "170px",
            },
            mx: {
              xs: "1px",
              sm: "1px",
              md: "3px",
              lg: "2px",
              xl: "5px",
            },
            borderRadius: "3px",

            fontWeight: 600,
          }}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="Positions"
          options={["1", "2", "3"]}
          value={age}
        />
        <KalkeDropDown
          sx={{
            backgroundColor: "white",
            border: "none",
            minWidth: {
              xs: "85px",
              sm: "85px",
              md: "90px",
              lg: "90px",
              xl: "100px",
            },
            fontWeight: 600,
            borderRadius: "3px",
          }}
          // minWidth={"80px"}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="Ratings"
          options={["1", "2", "3"]}
          value={age}
        />
        <KalkeDropDown
          sx={{
            backgroundColor: "white",
            border: "none",
            minWidth: {
              xs: "130px",
              sm: "130px",
              md: "125px",
              lg: "125px",
              xl: "140px",
            },
            mx: {
              xs: "1px",
              sm: "1px",
              md: "2px",
              lg: "2px",
              xl: "5px",
            },
            borderRadius: "3px",

            fontWeight: 600,
          }}
          // minWidth={"80px"}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="Applied Date"
          options={["1", "2", "3"]}
          value={age}
        />
        <KalkeDropDown
          sx={{
            backgroundColor: "white",
            border: "none",
            minWidth: {
              xs: "130px",
              sm: "130px",
              md: "125px",
              lg: "80px",
              xl: "100px",
            },
            borderRadius: "3px",

            fontWeight: 600,
          }}
          // minWidth={"80px"}
          id={"location"}
          label="location"
          onChange={handleLocatointype}
          size="small"
          name="Score"
          options={["1", "2", "3"]}
          value={age}
        />
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";
import React, { useState } from "react";
import All from "./all";
// import { ICommon } from "../interfaces/ICommon";
import PipelineAsideBar from "./pipeline-aside-bar/pipelineasidebar";

export default function PipelineTableView() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [secondRow, setSecondRow] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",

        backgroundColor: "white",
      }}
    >
      <PipelineAsideBar
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        secondRow={secondRow}
        setSecondRow={setSecondRow}
      ></PipelineAsideBar>
      <Box
        sx={{
          flexGrow: 1,
          // backgroundColor: "#ECEFF1",
          backgroundColor: "white",
          // height: "100vh",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "700px",
          overflowX: "auto",
        }}
      >
        {selectedItem === 0 ? (
          <All />
        ) : selectedItem === 1 ? (
          1
        ) : selectedItem === 2 ? (
          2
        ) : selectedItem === 3 ? (
          3
        ) : selectedItem === 4 ? (
          4
        ) : selectedItem === 5 ? (
          5
        ) : selectedItem === 6 ? (
          6
        ) : selectedItem === 7 ? (
          7
        ) : selectedItem === 8 ? (
          8
        ) : selectedItem === 9 ? (
          9
        ) : selectedItem === 10 ? (
          10
        ) : selectedItem === 11 ? (
          11
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

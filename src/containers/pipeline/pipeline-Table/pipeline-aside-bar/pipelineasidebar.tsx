import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

import List from "@mui/material/List";

import Typography from "@mui/material/Typography";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import GridViewIcon from "@mui/icons-material/GridView";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";

import { CustomTheme } from "../../../../../styles/style";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function PipelineAsideBar({
  selectedItem,
  setSelectedItem,
  secondRow,
  setSecondRow,
}: {
  selectedItem: any;
  setSelectedItem: any;
  secondRow: any;
  setSecondRow: any;
}) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <List
        sx={{ paddingX: "10px", paddingY: "25px", backgroundColor: "#F9FBFC" }}
      >
        {[
          { name: "All", id: 0, url: "/dashboard/recruiter/" },
          {
            name: "Screening",
            id: 1,
            url: "/dashboard/recruiter/jobs",
            notification: "1",
          },
          {
            name: "Qualified",
            id: 2,
            url: "/dashboard/recruiter/candidates",
            notification: "1",
          },
          {
            name: "Interviews",
            id: 3,
            url: "/dashboard/recruiter/inbox",
            notification: "1",
          },
          {
            name: "Interviews",
            id: 4,
            url: "/dashboard/recruiter/schedule",
          },
          {
            name: "Shortlisted",
            id: 5,
            url: "/dashboard/recruiter/assessments",
            notification: "1",
          },
          {
            name: "Offer",
            id: 6,
            url: "/dashboard/recruiter/billing",
            notification: "1",
          },
          {
            name: "Hired",
            id: 7,
            url: "/dashboard/recruiter/marketplace",
            notification: "1",
          },
          {
            name: "Offer Declined",
            id: 8,
            url: "/dashboard/recruiter/marketplace",
            notification: "1",
          },
          {
            name: "Rejected",
            id: 9,
            url: "/dashboard/recruiter/marketplace",
            notification: "1",
          },
        ].map((option, index) => (
          <ListItem
            // component={Link}
            key={index}
            onClick={(e: any) => {
              // router.push(option?.url);
              setSelectedItem(option.id);
              // e.preventDefault();
            }}
            disablePadding
            sx={{
              display: "block",
              backgroundColor:
                selectedItem === option?.id ? "#F2FAFF" : "white",
              marginBottom: 1,
              borderRadius: "6px",
              // borderBottomRightRadius: selectedItem === option?.id ? "10px" : 0,
              boxShadow:
                selectedItem == option?.id
                  ? " 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                  : "",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                //   justifyContent: open ? "space-between" : "center",
                justifyContent: "space-between",
                px: 1,
              }}
            >
              <Box>
                {/* <ListItemIcon
                  sx={{
                    minWidth: 0,
                    //   mr: open ? "15px" : "auto",
                    mr: "15px",
                    justifyContent: "center",
                    color:
                      selectedItem === option?.id ? "white" : "secondary.main",
                  }}
                >
                  {index === 0 ? (
                    <GridViewIcon />
                  ) : index === 1 ? (
                    <WorkOutlineIcon />
                  ) : index === 2 ? (
                    <PeopleAltOutlinedIcon />
                  ) : index === 3 ? (
                    <ChatOutlinedIcon />
                  ) : index === 4 ? (
                    <CalendarMonthOutlinedIcon />
                  ) : index === 5 ? (
                    <AssignmentOutlinedIcon />
                  ) : index === 6 ? (
                    <ReceiptLongOutlinedIcon />
                  ) : index === 7 ? (
                    <StoreMallDirectoryOutlinedIcon />
                  ) : (
                    ""
                  )}
                </ListItemIcon> */}

                <Typography
                  sx={{
                    color: "#37474F",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {option.name}
                </Typography>
              </Box>

              {option.notification ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    borderRadius: "20%",
                    backgroundColor: "#BCE2FF",
                    width: "30px",
                    height: "30px",
                    marginLeft: "35px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1F47CB",
                    }}
                  >
                    {option.notification}
                  </Typography>
                </Box>
              ) : (
                ""
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
}

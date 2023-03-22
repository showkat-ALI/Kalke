import React from "react";
import Box from "@mui/material/Box";
import googleLogo from "../../../assets/Images/randomPeople.jpg";
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "../../../../styles/style";

export default function Schedule() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mb: "12px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1.125rem",
                fontWeight: 600,
              }}
              color="secondary.dark"
            >
              Schedule
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "0.875rem",
              }}
              color="secondary.light"
            >
              View all
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <List sx={{ padding: 0, width: "100%" }}>
            {[
              {
                name: "Product Design Interview",
                title: "Product Design",
                dateDayName: "Mon",
                dateDay: "10",
                detailsDate: "December 10 2022",
                time: "9:00am - 11:am",
              },
              {
                name: "Product Design Interview",
                title: "Product Design",
                dateDayName: "Mon",
                dateDay: "10",
                detailsDate: "December 10 2022",
                time: "9:00am - 11:am",
              },
              {
                name: "Product Design Interview",
                title: "Product Design",
                dateDayName: "Mon",
                dateDay: "10",
                detailsDate: "December 10 2022",
                time: "9:00am - 11:am",
              },
              {
                name: "Product Design Interview",
                title: "Product Design",
                dateDayName: "Mon",
                dateDay: "10",
                detailsDate: "December 10 2022",
                time: "9:00am - 11:am",
              },
            ].map((option, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "#FFFFFF",
                  padding: 0,
                  borderRadius: "4px",
                  display: "block",
                  width: "100%",
                  mb: index != 3 ? "10px" : "",
                }}
              >
                <ListItemButton
                  sx={{
                    maxHeight: "56px",

                    border: "1px solid",
                    borderColor: "#ECEFF1",

                    paddingTop: "30px",
                    paddingBottom: "30px",
                    paddingRight: "0px",
                    paddingLeft: "8px",
                    borderRadius: "4px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        borderRadius: "4px",
                        paddingX: "8px",
                        paddingY: "7px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #8DD0FF",
                        backgroundColor: "#F2FAFF",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#1168EB",
                          fontSize: "0.75rem",

                          fontWeight: 600,
                        }}
                      >
                        {option.dateDayName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                        }}
                        color="#1168EB"
                        fontWeight="600"
                      >
                        {option.dateDay}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "4px" }}>
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",

                            fontWeight: 600,
                          }}
                          color="secondary.dark"
                        >
                          {option.name}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.875rem",
                        }}
                        color="#798F9C"
                      >
                        {option.detailsDate}
                        <span style={{}}>({option.time})</span>
                      </Typography>
                    </Box>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

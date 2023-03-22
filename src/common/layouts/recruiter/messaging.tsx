import React from "react";
import Box from "@mui/material/Box";
import googleLogo from "../../../assets/Images/random.png";
import {
  Avatar,
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
import { StyledBadge } from "@components/StyledComponents/StyledBadge";
export default function Messaging() {
  // console.log(googleLogo);
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
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
              Messages
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
        <Box>
          <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
            {[
              {
                name: "Sabbir Hasan",
                active: true,
                title: "Product Designer",
                unread: 1,
                image: googleLogo,
              },
              {
                name: "Akib Hasan",
                active: true,
                title: "Product Designer",
                unread: 0,
                image: googleLogo,
              },
              {
                name: "Morshad Hasan",
                active: false,
                title: "Product Designer",
                unread: 0,
                image: googleLogo,
              },
              {
                name: "Sabbir Hasan",
                active: false,
                title: "Product Designer",
                unread: 5,
                image: googleLogo,
              },
              {
                name: "Sabbir Hasan",
                active: true,
                title: "Product Designer",
                unread: 3,
                image: googleLogo,
              },
              {
                name: "Sabbir Hasan",
                active: false,
                title: "Product Designer",
                unread: 1,
                image: googleLogo,
              },
            ].map((option, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "block",
                  marginY: "5px",
                  backgroundColor: option.unread > 0 ? "#F2FAFF" : "#FFFFFF",
                  padding: 0,
                  borderRadius: "4px",
                }}
              >
                <ListItemButton
                  sx={{
                    maxHeight: 56,
                    border: option.unread === 0 ? "1px solid" : 0,
                    borderColor: "#ECEFF1",
                    padding: 0,
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingY: "3px",
                    }}
                  >
                    {option.active == false ? (
                      <Avatar src={googleLogo?.src} alt="random"></Avatar>
                    ) : option.active == true ? (
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar src={googleLogo?.src} alt="random"></Avatar>
                      </StyledBadge>
                    ) : (
                      ""
                    )}
                    <Box
                      sx={{
                        marginX: "10px",
                        width: "220px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                          color="secondary.dark"
                        >
                          {option.name}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "5px",
                          }}
                        >
                          <Box
                            height={5}
                            sx={{
                              backgroundColor: "green",
                              borderRadius: "50%",
                              marginRight: "3px",
                            }}
                            width={5}
                          ></Box>

                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                            }}
                            color="secondary.light"
                          >
                            {option.title}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ fontSize: "0.875rem" }}>
                        <Typography color="secondary.light" sx={{}}>
                          Hi how are you...
                        </Typography>
                      </Box>
                    </Box>

                    {option.unread > 0 ? (
                      <Box
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          borderRadius: "50%",
                          backgroundColor: "#BCE2FF",
                          width: "25px",
                          height: "25px",
                          display: "flex",
                          marginRight: "4px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#008FFF",
                          }}
                        >
                          {option.unread}
                        </Typography>
                      </Box>
                    ) : (
                      ""
                    )}
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

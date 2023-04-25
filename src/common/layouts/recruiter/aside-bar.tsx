import React, { Fragment, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import kat from "../../../pages/signup/imgs/logo.png";
import Image from "next/image";
import {
  SettingsOutlined,
  PersonOutlineOutlined,
  StoreMallDirectoryOutlined,
  AssignmentOutlined,
  CalendarMonthOutlined,
  ChatOutlined,
  PeopleAltOutlined,
  WorkOutline,
  Menu,
  HelpOutlineOutlined,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

import { useRouter } from "next/router";
import { CustomTheme } from "../../../../styles/style";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { ThemeProvider } from "@mui/material/styles";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Collapse, ListItemText, IconButton } from "@mui/material";
import {
  AccountBalanceOutlined,
  BusinessOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import Link from "next/link";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: "hidden",
  borderRight: "none",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderRight: "none",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const MenuBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: "0px",
  height: "0px",
  padding: "0px",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    width: "0px",
    height: "0px",
    padding: "0px",
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
    overflow: "hidden",
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
// const ListItem=styled(ListItem)
export default function AsideBar({
  selectedItem,
  setSelectedItem,
  secondRow,
  setSecondRow,
  selectedSubOption,
  setSelectedSubOption,
}: {
  selectedItem: any;
  setSelectedItem: any;
  secondRow: any;
  setSecondRow: any;
  selectedSubOption: any;
  setSelectedSubOption: any;
}) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [openSettings, setSettingsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { route } = router;

  return (
    <ThemeProvider theme={CustomTheme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <CssBaseline />
        <MenuBox position="fixed" open={open}>
          <Toolbar
            sx={{
              ...(!open && {
                backgroundColor: "white",
              }),
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none", backgroundColor: "inherit" }),
              }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </MenuBox>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            paddingY: "20px",
          }}
        >
          <DrawerHeader sx={{ display: "flex", paddingY: "15px" }}>
            <Box
              sx={{
                ...(!open && { marginLeft: "-100px" }),
                ...(open && {
                  marginRight: "80px",
                  marginLeft: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }),
              }}
            >
              <Image
                src={kat}
                alt=""
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.replace({ pathname: "/career" });
                }}
              />
            </Box>
            <IconButton
              sx={{
                backgroundColor: "white",
                ...(open && {
                  backgroundColor: "rgb(0,0,0,0.04)",
                  marginLeft: "20px",
                  position: "fixed",
                  marginRight: "-20px",
                }),
              }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "rtl" ? (
                <>
                  <ChevronRight />
                </>
              ) : (
                <ChevronLeft />
              )}
            </IconButton>
          </DrawerHeader>
          {}
          <Box sx={{ overflowY: "scroll", overflowX: "hidden" }}>
            <Box
              sx={{
                ...(!open && { display: "none" }),
                ...(open && {
                  display: "inline",
                }),
              }}
            >
              <Typography
                sx={{
                  marginLeft: "22px",
                  letterSpacing: "2px",
                  fontSize: "12px",
                  fontWeight: 700,
                  mb: "12px",
                }}
              >
                RECRUITMENT
              </Typography>
            </Box>
            <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
              {[
                { name: "Overview", id: 0, url: "/dashboard/recruiter" },
                {
                  name: "Jobs",
                  id: 1,
                  url: "/dashboard/recruiter/jobs",
                  notification: "1",
                },
                {
                  name: "Candidates",
                  id: 2,
                  url: "/dashboard/recruiter/candidates",
                  notification: "1",
                },
                {
                  name: "Inbox",
                  id: 3,
                  url: "/dashboard/recruiter",
                  notification: "1",
                },
                {
                  name: "Schedule",
                  id: 4,
                  url: "/dashboard/recruiter/schedule",
                },
                {
                  name: "Assessments",
                  id: 5,
                  url: "/dashboard/recruiter/assessments",
                  notification: "1",
                },

                {
                  name: "Marketplace",
                  id: 6,
                  url: "/dashboard/recruiter/marketplace",
                  notification: "1",
                },
              ].map((option, index) => (
                <>
                  {console.log(option.url)}
                  <div key={index}>
                    <Link href={option.url}>
                      <ListItem
                        // component={Link}
                        key={index}
                        disablePadding
                        sx={{
                          display: "block",
                          backgroundColor:
                            option.url === route ? "primary.main" : "inherit",
                          marginBottom: option.url === route ? 0.6 : 0.6,
                          borderTopRightRadius:
                            option.url === route ? "10px" : 0,
                          borderBottomRightRadius:
                            option.url === route ? "10px" : 0,
                          boxShadow:
                            option.url === route
                              ? " 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                              : "",
                        }}
                      >
                        <ListItemButton
                          sx={{
                            maxHeight: 44,
                            justifyContent: open ? "space-between" : "center",
                            px: 2.5,
                          }}
                        >
                          <Box sx={{ display: "flex" }}>
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? "15px" : "auto",
                                justifyContent: "center",
                                color:
                                  option.url === route
                                    ? "white"
                                    : "secondary.main",
                              }}
                            >
                              {index === 0 ? (
                                <GridViewRoundedIcon />
                              ) : index === 1 ? (
                                <WorkOutline />
                              ) : index === 2 ? (
                                <PeopleAltOutlined />
                              ) : index === 3 ? (
                                <ChatOutlined />
                              ) : index === 4 ? (
                                <CalendarMonthOutlined />
                              ) : index === 5 ? (
                                <AssignmentOutlined />
                              ) : index === 6 ? (
                                <StoreMallDirectoryOutlined />
                              ) : (
                                ""
                              )}
                            </ListItemIcon>
                            {open ? (
                              <Typography
                                sx={{
                                  opacity: open ? 1 : 0,
                                  fontSize: "0.875rem",
                                  fontWeight: 500,
                                }}
                                color={
                                  option.url === route
                                    ? "secondary.contrastText"
                                    : "secondary.main"
                                }
                              >
                                {option.name}
                              </Typography>
                            ) : (
                              ""
                            )}
                          </Box>

                          {option.notification && (
                            <Box
                              sx={{
                                display: open ? "flex" : "none",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                borderRadius: "50%",
                                backgroundColor: "#F2FAFF",
                                width: "25px",
                                height: "25px",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#037BFD",
                                }}
                              >
                                {option.notification}
                              </Typography>
                            </Box>
                          )}
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </div>
                </>
              ))}
            </List>

            <Box sx={{ mt: 4, mb: 4 }}>
              <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
                {[
                  {
                    name: "Settings",
                    id: 7,
                    url: "/dashboard/recruiter/settings",
                    more: true,
                    collapse: true,
                    icon: <SettingsOutlined />,
                  },
                  {
                    name: "Logout",
                    id: 8,
                    url: "/dashboard/recruiter/help",
                    more: false,
                    notification: "",
                    icon: <LogoutRoundedIcon />,
                  },
                ].map((option, index) => (
                  <Fragment key={index}>
                    <ListItem
                      disablePadding
                      onClick={(e) => {
                        setSelectedItem(option.id);
                        setSettingsOpen(!openSettings);
                        setSelectedSubOption(7);
                      }}
                      sx={{
                        display: "block",
                        backgroundColor:
                          option.url === route ? "primary.main" : "inherit",
                        marginBottom: option.url === route ? 0.6 : 0.6,
                        borderTopRightRadius: option.url === route ? "10px" : 0,
                        borderBottomRightRadius:
                          option.url === route ? "10px" : 0,
                        boxShadow:
                          selectedItem == option?.id
                            ? " 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                            : "",
                      }}
                    >
                      <ListItemButton
                        sx={{
                          maxHeight: 44,
                          justifyContent: open ? "space-between" : "center",
                          px: 2.5,
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? "15px" : "auto",
                              justifyContent: "center",
                              color:
                                option.url === route
                                  ? "white"
                                  : "secondary.main",
                            }}
                          >
                            {option.icon}
                          </ListItemIcon>
                          {open ? (
                            <Typography
                              sx={{
                                opacity: open ? 1 : 0,

                                fontSize: "14px",
                                fontWeight: 500,
                              }}
                              color={
                                option.url === route
                                  ? "secondary.contrastText"
                                  : "secondary.main"
                              }
                            >
                              {option.name}
                            </Typography>
                          ) : (
                            ""
                          )}
                        </Box>

                        {option.notification ? (
                          <Box
                            sx={{
                              display: open ? "flex" : "none",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "white",
                              borderRadius: "50%",
                              backgroundColor: "#F2FAFF",
                              width: "25px",
                              height: "25px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#037BFD",
                              }}
                            >
                              {option.notification}
                            </Typography>
                          </Box>
                        ) : (
                          ""
                        )}

                        {option.more ? (
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? "0px" : "auto",
                              justifyContent: "center",
                              color:
                                option.url === route
                                  ? "white"
                                  : "secondary.main",
                            }}
                          >
                            {openSettings
                              ? open && <ExpandLess />
                              : open && <ExpandMore />}
                          </ListItemIcon>
                        ) : (
                          ""
                        )}
                      </ListItemButton>
                    </ListItem>
                    {option.collapse && open && (
                      <Collapse in={openSettings} timeout="auto" unmountOnExit>
                        <List
                          component="div"
                          sx={{
                            ml: 0.5,
                            bgcolor: "#F2FAFF",
                          }}
                        >
                          {[
                            {
                              name: "Company Profile",
                              id: 7,
                              url: "/recruiter/settings",
                              icon: <BusinessOutlined />,
                            },
                            {
                              name: "Team",
                              id: 8,
                              url: "/recruiter/settings/team",
                              icon: <PeopleAltOutlined />,
                            },
                            {
                              name: "Billing",
                              id: 9,
                              url: "/recruiter/settings/billing",
                              icon: <AccountBalanceOutlined />,
                            },
                            {
                              name: "Account",
                              id: 10,
                              url: "/recruiter/settings/account",
                              icon: <PersonOutlineOutlined />,
                            },
                          ].map((item, index: number) => (
                            <ListItemButton
                              key={index}
                              onClick={(e) => {
                                setSelectedSubOption(item.id);
                                router.push(item.url);
                              }}
                              selected={selectedSubOption === item.id}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: "20px",
                                  mr: 2,
                                  color: "#90A3AE",
                                }}
                              >
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText
                                sx={{ fontSize: "14px", color: "#90A3AE" }}
                                primary={item.name}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </Fragment>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

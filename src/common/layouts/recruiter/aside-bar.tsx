import React, { Fragment, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import kat from "../../../pages/signup/imgs/logo.png";
import Image from "next/image";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useRouter } from "next/router";
import { CustomTheme } from "../../../../styles/style";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { ThemeProvider } from "@mui/material/styles";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Collapse, ListItemText } from "@mui/material";
import {
  AccountBalanceOutlined,
  BusinessOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

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
              <MenuIcon />
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
                  <ChevronRightIcon />
                </>
              ) : (
                <ChevronLeftIcon />
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
                { name: "Overview", id: 0, url: "/dashboard/recruiter/" },
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
                  url: "/dashboard/recruiter/inbox",
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
                <ListItem
                  // component={Link}
                  key={index}
                  onClick={(e) => {
                    router.push(option?.url);
                    setSelectedItem(option.id);
                    setSelectedSubOption("");
                    setSettingsOpen(false);
                    // e.preventDefault();
                  }}
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor:
                      selectedItem === option?.id ? "primary.main" : "inherit",
                    marginBottom: selectedItem === option?.id ? 0.6 : 0.6,
                    borderTopRightRadius:
                      selectedItem === option?.id ? "10px" : 0,
                    borderBottomRightRadius:
                      selectedItem === option?.id ? "10px" : 0,
                    boxShadow:
                      selectedItem == option?.id
                        ? " 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      maxheight: 44,
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
                            selectedItem === option?.id
                              ? "white"
                              : "secondary.main",
                        }}
                      >
                        {index === 0 ? (
                          <GridViewRoundedIcon />
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
                          <StoreMallDirectoryOutlinedIcon />
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
                            selectedItem === option?.id
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
                    icon: <SettingsOutlinedIcon />,
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
                          selectedItem === option?.id
                            ? "primary.main"
                            : "inherit",
                        marginBottom: selectedItem === option?.id ? 0.6 : 0.6,
                        borderTopRightRadius:
                          selectedItem === option?.id ? "10px" : 0,
                        borderBottomRightRadius:
                          selectedItem === option?.id ? "10px" : 0,
                        boxShadow:
                          selectedItem == option?.id
                            ? " 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                            : "",
                      }}
                    >
                      <ListItemButton
                        sx={{
                          maxheight: 44,
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
                                selectedItem === option?.id
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
                                selectedItem === option?.id
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
                                selectedItem === option?.id
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
                              icon: <PeopleAltOutlinedIcon />,
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
                              icon: <PersonOutlineOutlinedIcon />,
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

            <Box>
              <List
                sx={{ paddingTop: 0, paddingBottom: 0, marginBottom: "-12px" }}
              >
                {[
                  {
                    name: "Settings",
                    id: 10,
                    url: "/dashboard/recruiter/settings",
                  },
                  {
                    name: "Help",
                    id: 11,
                    url: "/dashboard/recruiter/help",
                  },
                ].map(
                  (
                    option: { name: string; id: number; url: string },
                    index
                  ) => (
                    <ListItem
                      key={index}
                      disablePadding
                      sx={{ display: "block" }}
                      onClick={(e) => {
                        router.push(option?.url);
                        setSelectedItem(option.id);
                        // e.preventDefault();
                      }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
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
                            }}
                          >
                            {index === 0 ? (
                              <SettingsOutlinedIcon />
                            ) : index === 1 ? (
                              <HelpOutlineOutlinedIcon />
                            ) : (
                              ""
                            )}
                          </ListItemIcon>
                          {open && (
                            <Typography
                              sx={{
                                opacity: open ? 1 : 0,

                                fontSize: "14px",
                                fontWeight: 500,
                              }}
                            >
                              {option.name}
                            </Typography>
                          )}
                        </Box>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

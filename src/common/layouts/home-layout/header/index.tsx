import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Image from "next/image";
import kalkeLogo from "@images/kalke-logo.png";
import rippling from "../../../../assets/Images/rippling/rippling.png";
import KalkeTextButton from "@buttons/kalke-text-button";
import Link from "next/link";
import { useAppSelector } from "src/app/hooks";
import Profile from "@layouts/recruiter/profile";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Why", "Product", "Company", "Resources"];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const {
    profilePicture,
    isBanned,
    emailVerified,
    id,
    fullName,
    email,
    role,
    token,
  } = useAppSelector((state) => state.auth.user);
  return (
    <Box sx={{ display: "flex", mb: "80px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "inherit",
          color: "black",
          boxShadow: "none",
        }}
        position="absolute"
      >
        <Toolbar
          sx={{
            width: {
              sm: "90%",
              xs: "90%",
              lg: "85%",
              md: "90%",
              xl: "85%",
            },
            mx: "auto",
          }}
        >
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                },
              }}
            >
              <Link href="/">
                <Image width={90} height={50} alt="" src={rippling} />
              </Link>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                },
                ml: "70px",
              }}
            >
              {navItems.map((item) => (
                <Typography key={item} sx={{ color: "#546D7A", ml: "40px" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                xl: "flex",
                lg: "flex",
                md: "flex",
              },
            }}
          >
            {token ? (
              <Profile />
            ) : (
              <>
                <KalkeTextButton
                  variant="contained"
                  text={"Get started free"}
                  sx={{
                    backgroundColor: "#008FFF",
                    color: "white",
                    px: "16px",
                    py: "8px",
                    fontWeight: 600,
                  }}
                />
                <KalkeTextButton
                  text={"Sign in"}
                  variant="outlined"
                  sx={{
                    px: "16px",
                    py: "8px",
                    ml: "20px",
                    fontWeight: 600,
                  }}
                />
              </>
            )}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                sm: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>7395791735907</Typography>
      </Box> */}
    </Box>
  );
}

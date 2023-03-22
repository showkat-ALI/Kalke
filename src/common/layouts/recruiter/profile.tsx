import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import styled from "@emotion/styled";
import googleLogo from "../../../assets/Images/random.png";

import Image from "next/image";
import { borderColor } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "../../../../styles/style";
import { useAppSelector } from "src/app/hooks";

export default function Profile() {
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
  console.log(email, role, token);
  const StyledBadge: any = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <ThemeProvider theme={CustomTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #E3F3FF",
          borderRadius: "4px",
          padding: "4px",
        }}
      >
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

        <Box sx={{ mx: "10px" }}>
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
            color="secondary.dark"
          >
            {fullName}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.75rem",
            }}
            color="secondary.light"
          >
            {email}
          </Typography>
        </Box>
        <Box>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

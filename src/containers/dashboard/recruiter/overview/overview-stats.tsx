import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import { CustomTheme } from "../../../../../styles/style";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useAppSelector } from "src/app/hooks";
export default function OverviewStats() {
  const { fullName, email, role, token } = useAppSelector(
    (state) => state.auth.user
  );
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box sx={{ mt: "15px" }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: 600, color: "#253237" }}
        >
          Good Morning,{fullName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: "20px",
            gap: 2,
          }}
        >
          {[
            {
              title: "Total Candidates",
              number: 14,
              increment: 111,
              logo: PersonPinRoundedIcon,
              id: 0,
            },
            {
              title: "New assesments",
              number: 15,
              increment: 12,
              logo: AssignmentIcon,
              id: 1,
            },
            {
              title: "Upcoming Interviews",
              number: 13,
              increment: 0,
              logo: CoPresentIcon,
              id: 2,
            },
          ].map((item, idex) => (
            <Item key={idex} item={item} />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
const Item = ({ item }: { item: any }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "16px 16px 6px",

          width: "256px",
          height: "128px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography color="#607D8A" sx={{ fontSize: "0.875rem" }}>
            {item.title}
          </Typography>
          <Typography
            color="#253237"
            sx={{
              fontSize: "2.25rem",
              fontWeight: "600",
            }}
          >
            {item.number}
          </Typography>
          {item.increment > 0 ? (
            <Box
              sx={{
                backgroundColor: "#ECFDF3",
                paddingX: "4px",
                paddingY: "8px",
                color: "#039855",
                borderRadius: "2px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // width: "111px",
                flexGrow: 1,
                height: "24px",
              }}
            >
              <TrendingUpIcon sx={{ color: "#039855" }} />
              <Typography sx={{ fontSize: "0.625rem" }}>
                +{item.increment}% Increased
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "#F2FAFF",
            color: "#037BFD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            borderRadius: "12px",
          }}
        >
          {item.id === 0 ? (
            <PersonPinRoundedIcon sx={{ width: "24px", height: "27px" }} />
          ) : item.id === 1 ? (
            <AssignmentIcon sx={{ width: "24px", height: "27px" }} />
          ) : item.id === 2 ? (
            <CoPresentIcon sx={{ width: "24px", height: "27px" }} />
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

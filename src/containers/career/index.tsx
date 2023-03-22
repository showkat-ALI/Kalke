import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import JobCircular from "./components/job-circular";
import JobFilter from "./components/job-filter";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LanguageIcon from "@mui/icons-material/Language";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
export default function Career() {
  const JobData1 = [
    {
      title: "Director of Product Management, Marketplace & Network Growth",
      time: "Full time",
      category: "product",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Director of Product Management, Marketplace & Network Growth",
      time: "Full time",
      category: "product",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Director of Product Management, Marketplace & Network Growth",
      time: "Full time",
      category: "product",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Director of Product Management, Marketplace & Network Growth",
      time: "Full time",
      category: "product",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Director of Product Management, Marketplace & Network Growth",
      time: "Full time",
      category: "product",
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "16px",
        minHeight: "100vh",
        paddingX: "340px",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Box>
          <Image width={120} alt="" height={60} src="/kalke-logo.png" />
        </Box>
        <Box sx={{ my: "20px" }}>
          <Typography sx={{ color: "#546D7A", lineHeight: "24px" }}>
            Pathao is a Bangladeshi on-demand digital platform company
            headquartered in Dhaka, Bangladesh. The company operates in four
            cities of Bangladesh: Dhaka, Chittagong, Khulna, Sylhet and in two
            cities of Nepal: Kathmandu and Chitwan. Pathao has ride-sharing
            services, food delivery, courier and E-commerce services.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            width: "60%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <LanguageIcon
              sx={{
                color: "#546D7A",

                mr: "2px",
              }}
            />
            <Typography sx={{ color: "#253237" }}>www.kalke.com</Typography>
          </Box>

          <Box sx={{ display: "flex", ml: "10px" }}>
            <PeopleOutlineIcon
              sx={{
                color: "#546D7A",

                mr: "2px",
              }}
            />
            <Typography sx={{ color: "#253237" }}>www.kalke.com</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          py: "20px",

          borderRadius: "5px",
        }}
      >
        <Box>
          <JobFilter />
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#253237",
            }}
          >
            Customer Support
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {JobData1.map((Job, idx) => (
              <Box key={idx}>
                <JobCircular Job={Job} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

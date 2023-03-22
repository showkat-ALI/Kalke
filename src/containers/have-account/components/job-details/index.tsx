import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <>
      <Box>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box component={"div"}>
            <Typography fontWeight="bold">About us</Typography>
            <Typography
              fontWeight="400"
              lineHeight="24px"
              sx={{ color: "#37474F", paddingTop: "6px" }}
            >
              The Provider Quality Assurance Specialist is responsible for
              investigating quality events, negative ratings, and or blocks that
              occur within our marketplace and holding those accountable for any
              “at-fault” scenarios. The role is key to maintaining the integrity
              of our marketplace and offers the chance to work in a fast-paced,
              high-growth environment where new ideas are encouraged and
              collaboration is a must.
            </Typography>
          </Box>

          <br />

          <Box component={"div"}>
            <Typography fontWeight="bold">Department</Typography>
            <Typography
              fontWeight="400"
              lineHeight="24px"
              sx={{ color: "#37474F", paddingTop: "6px" }}
            >
              Branding & Marketing
            </Typography>
          </Box>

          <br />

          <Box component={"div"}>
            <Typography fontWeight="bold">Description</Typography>
            <Typography
              fontWeight="400"
              lineHeight="24px"
              sx={{ color: "#37474F", paddingTop: "6px" }}
            >
              We’re looking for a UI/UX designer to turn our platform into a
              user-friendly product for our users. The responsibilities will be
              to collaborate with the team, gather user requirements, create
              design elements and build prototypes. Applicants should have good
              knowledge of design/wireframe tools for the Curiosity and desire
              to learn and grow skills (This is a must)- Up-to-date knowledge of
              design software like Adobe (Figma, XD, Illustrator, Photoshop) and
              wireframe tools (e.g. Figma, InVision).- Specifically, in Figma
              you have to know the design system- Strong knowledge of
              typography, colour, and other design principles. Ability to
              effectively communicate and persuade around design concepts. Good
              understanding of user experience and customer/industrial
              psychology. Knowledge of industry standards and best practices for
              designing desktop and mobile applications. Experience in designing
              mockups and detail-oriented prototypes. Portfolio of design
              projects. Proven work experience of at least two years as a UI/UX
              Designer or similar role. English language proficiency.
            </Typography>
          </Box>

          <br />

          <Box component={"div"}>
            <Typography fontWeight="bold">Salary information</Typography>
            <Typography
              fontWeight="400"
              lineHeight="24px"
              sx={{ color: "#37474F", paddingTop: "6px" }}
            >
              80,000 BDT
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

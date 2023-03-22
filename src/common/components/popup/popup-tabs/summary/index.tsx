import { Box, Chip, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { CustomTheme } from "../../../../../../styles/style";
export default function Summary() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Grid sx={{ pb: "10px", pt: "10px" }} container>
        <Grid item xs={10}>
          <Box>
            <Typography sx={{ fontWeight: "600 ", fontSize: "1.125rem" }}>
              About
            </Typography>
            <Typography>
              Highly creative with the ability to work well within a team.
              Extensive experience in managing other designers and coordinating
              with them to deliver a single product. Highly skilled with various
              programs within the Adobe Creative Suite, such as Photoshop,
              InDesign, Illustrator, Xd .
            </Typography>
          </Box>
          <Box sx={{ my: "10px" }}>
            <Typography
              sx={{ fontWeight: "600 ", fontSize: "1.125rem", mb: "5px" }}
            >
              Education
            </Typography>
            <Typography sx={{ fontWeight: "600 " }}>
              BSc. in Computer Science & Engineering
            </Typography>
            <Box>
              <Typography>University of Liberal Arts Bangladesh</Typography>
              <Typography>Major in Software Engineering</Typography>
              <Typography>From 2011-2015</Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "600 ", fontSize: "1.125rem", mb: "5px" }}
            >
              Skills
            </Typography>
            <Grid container>
              <Grid item xs={6} sx={{ display: "flex" }} gap={2}>
                {[
                  {
                    name: "UI design",
                  },
                  {
                    name: "UI design",
                  },
                  {
                    name: "UI design",
                  },
                ].map((option, idx) => (
                  <Box key={idx}>
                    <Chip label={option.name} />
                  </Box>
                ))}
              </Grid>
            </Grid>
            <Grid container sx={{ mt: "5px" }}>
              <Grid item xs={6} sx={{ display: "flex" }} gap={2}>
                {[
                  {
                    name: "UI design",
                  },
                  {
                    name: "UI design",
                  },
                  {
                    name: "UI design",
                  },
                ].map((option, idx) => (
                  <Box key={idx}>
                    <Chip label={option.name} />
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

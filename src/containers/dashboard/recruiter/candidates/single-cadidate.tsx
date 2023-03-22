import { Typography, Rating, Box } from "@mui/material";
import React, { useState } from "react";
import DetailsModal from "../../../../common/components/popup/candidate-details";

export default function Candidate({ candidate }: { candidate: any }) {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <>
      <Box
        component={"div"}
        onClick={() => setOpenPopUp(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "50px",
          backgroundColor: "#F9FBFC",
          borderRadius: "2px",
          border: "1px solid #ECEFF1",
        }}
      >
        <Typography>{candidate.name}</Typography>

        <Typography
          sx={{
            color: "#607D8A",
            backgroundColor: "#ECEFF1",
            padding: "3px",
            borderRadius: "2px",
            fontSize: "0.75rem",
            width: {
              xs: "50px",
              sm: "55px",
              md: "60px",
              lg: "65px",
              xl: "77px",
            },
            height: "26px",
            textAlign: "center",
          }}
        >
          {candidate.stage}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.875rem",
          }}
        >
          {candidate.position}
        </Typography>

        <Rating name="read-only" value={candidate.ratting} readOnly />

        <Typography sx={{ fontSize: "0.875rem" }}>
          {candidate.appliedDate}
        </Typography>

        <Typography sx={{ fontSize: "0.875rem" }}>{candidate.score}</Typography>
      </Box>

      <DetailsModal
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        candidate={candidate}
      ></DetailsModal>
    </>
  );
}

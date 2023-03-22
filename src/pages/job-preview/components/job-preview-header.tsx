import React, { Dispatch, SetStateAction } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import KalkeTextButton from "@buttons/kalke-text-button";
import { useRouter } from "next/router";

interface IJobPreviewHeaderProps {
  jobTitle: string;
  jobLink: string;
  jobLocation: string;
  jobDepartment: string;
  jobType: string;
  applyState: boolean;
  setApplyState: Dispatch<SetStateAction<boolean>>;
}

export default function JobPreviewHeader(props: IJobPreviewHeaderProps) {
  const router = useRouter();

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          fontSize={"1.5rem"}
          sx={{ fontWeight: 600, color: "#253237" }}
        >
          {props.jobTitle}
        </Typography>

        <Box
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <Typography color="#546D7A">{props.jobType}</Typography>

          <CircleIcon
            sx={{ width: "5px", height: "10px", mx: "5px" }}
            fontSize="small"
          />

          <Typography color="#546D7A">{props.jobDepartment}</Typography>

          <CircleIcon
            sx={{ width: "5px", height: "10px", mx: "5px" }}
            fontSize="small"
          />

          <Typography color="#546D7A">{props.jobLocation}</Typography>
        </Box>
      </Box>

      {!props.applyState && (
        <KalkeTextButton
          text={"Apply for this job"}
          size="large"
          type="contained"
          sx={{
            fontWeight: 600,
            width: "170px",
            height: "40px",
          }}
          onClick={() => {
            props.setApplyState(true);
            router.push("?apply=true", undefined, { shallow: true });
          }}
        />
      )}
    </Box>
  );
}

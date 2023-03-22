import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "src/common/routes";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface IJobPreviewBreadCrumbProps {
  jobTitle: string;
  jobLink: string;
  applyState: boolean;
  setApplyState: Dispatch<SetStateAction<boolean>>;
}

export default function JobPreviewBreadCrumb(
  props: IJobPreviewBreadCrumbProps
) {
  const router = useRouter();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/jobs">
        Jobs
      </Link>
      <Typography
        color="inherit"
        sx={{
          cursor: "pointer",
        }}
        onClick={() => {
          props.setApplyState(false);
          router.replace({ pathname: ROUTES.JOB_PREVIEW }, undefined, {
            shallow: true,
          });
        }}
      >
        {props.jobTitle}
      </Typography>
      {props.applyState && (
        <Typography
          color="inherit"
          sx={{
            cursor: "pointer",
          }}
        >
          apply
        </Typography>
      )}
    </Breadcrumbs>
  );
}

import Head from "next/head";
import React from "react";
import RecruiterLayout from "../../common/layouts/recruiter-layout";
import AssessmentComponent from "@containers/dashboard/recruiter/assessments/assessments";
export default function Assessments() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <AssessmentComponent />
      </RecruiterLayout>
    </>
  );
}

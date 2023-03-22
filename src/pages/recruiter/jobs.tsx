import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import JobsComponents from "@containers/dashboard/recruiter/jobs";
export default function Jobs() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <JobsComponents />
      </RecruiterLayout>
    </>
  );
}

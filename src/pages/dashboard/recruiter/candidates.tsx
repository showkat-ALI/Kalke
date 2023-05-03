import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import CandidatesComponent from "@containers/dashboard/recruiter/candidates/candidates";
export default function Candidates() {
  return (
    <>
      <Head>
        <title>Recruiter | Rippling</title>
      </Head>
      <RecruiterLayout>
        <CandidatesComponent />
      </RecruiterLayout>
    </>
  );
}

import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import TeamComponents from "@containers/dashboard/recruiter/team/team";
export default function Team() {
  return (
    <>
      <Head>
        <title>Recruiter | Team</title>
      </Head>
      <RecruiterLayout>
        <TeamComponents />
      </RecruiterLayout>
    </>
  );
}

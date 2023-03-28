import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
// import InviteUsers from "@containers/dashboard/recruiter/team/InviteUsers";

export default function InviteTeamMembers() {
  return (
    <>
      <Head>
        <title>Recruiter | Team</title>
      </Head>
      <RecruiterLayout>
        {/* <InviteUsers /> */}
        invite url
      </RecruiterLayout>
    </>
  );
}

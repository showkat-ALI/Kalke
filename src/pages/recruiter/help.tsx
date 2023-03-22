import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import HelpComponent from "@containers/dashboard/recruiter/help/help";

export default function Help() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <HelpComponent />
      </RecruiterLayout>
    </>
  );
}

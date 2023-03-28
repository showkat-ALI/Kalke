import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
// import SettingsComponents from "@containers/dashboard/recruiter/settings";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        {/* <SettingsComponents /> */}
        setting
      </RecruiterLayout>
    </>
  );
}

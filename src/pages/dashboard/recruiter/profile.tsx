import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import ProfileComponents from "@containers/dashboard/recruiter/profile/profile";
export default function Profile() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <ProfileComponents />
      </RecruiterLayout>
    </>
  );
}

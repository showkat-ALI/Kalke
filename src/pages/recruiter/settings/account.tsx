import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
// import Account from "@containers/dashboard/recruiter/settings/account";

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Recruiter | Account</title>
      </Head>
      <RecruiterLayout>
        {/* <Account /> */}
        account
      </RecruiterLayout>
    </>
  );
}

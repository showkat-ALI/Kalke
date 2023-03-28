import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import InboxComponents from "@containers/dashboard/recruiter/inbox/inbox";

export default function Inbox() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <InboxComponents />
      </RecruiterLayout>
    </>
  );
}

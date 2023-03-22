import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import ScheduleComponents from "@containers/dashboard/recruiter/schedule/schedule";
export default function Schedule() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <ScheduleComponents />
      </RecruiterLayout>
    </>
  );
}

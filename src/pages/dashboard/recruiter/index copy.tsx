import type { NextPage } from "next";
import Head from "next/head";
import RecruiterLayout from "@layouts/recruiter-layout";
import OverviewComponents from "@containers/dashboard/recruiter/overview/overview";

const Recruiter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <OverviewComponents />
      </RecruiterLayout>
    </>
  );
};

export default Recruiter;

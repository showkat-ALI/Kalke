import type { NextPage } from "next";
import Head from "next/head";
import RecruiterLayout from "../../../common/layouts/recruiter-layout";
import OverviewComponents from "../../../containers/dashboard/recruiter/overview/overview";

const Recruiter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recruiter | Overview</title>
      </Head>
      <RecruiterLayout>
        <OverviewComponents />
      </RecruiterLayout>
    </>
  );
};

export default Recruiter;

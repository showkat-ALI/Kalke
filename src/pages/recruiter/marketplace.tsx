import Head from "next/head";
import React from "react";
import RecruiterLayout from "@layouts/recruiter-layout";
import MarketPlaceComponents from "@containers/dashboard/recruiter/marketplace/marketplace";
export default function Marketplace() {
  return (
    <>
      <Head>
        <title>Recruiter | Kalke</title>
      </Head>
      <RecruiterLayout>
        <MarketPlaceComponents />
      </RecruiterLayout>
    </>
  );
}

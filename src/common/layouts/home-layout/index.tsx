import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { ICommon } from "../../interfaces/ICommon";
import Footer from "./footer/footer";
import Header from "./header";

const HomeLayout = ({ children }: ICommon) => {
  return (
    <>
      <Head>
        <title>Kalke</title>
      </Head>
      <Header />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default HomeLayout;

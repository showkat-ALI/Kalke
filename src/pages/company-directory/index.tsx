import HomeLayout from "@layouts/home-layout";
import React from "react";
import CompanyDirectory from "./../../containers/company-directory/index";
export default function index() {
  return (
    <HomeLayout>
      <CompanyDirectory />
    </HomeLayout>
  );
}

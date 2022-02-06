import React from "react";
import Signin from "../components/Signin/Signin";
import SimplePageLayout from "../layouts/SimplePageLayout/SimplePageLayout";

const signin = () => {
  return (
    <>
      <Signin />
    </>
  );
};

signin.Layout = SimplePageLayout;

export default signin;

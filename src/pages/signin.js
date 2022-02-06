import React from "react";
import Signup from "../components/Signin/Signin";
import SimplePageLayout from "../layouts/SimplePageLayout/SimplePageLayout";

const signin = () => {
  return <Signup />;
};

signin.Layout = SimplePageLayout;

export default signin;

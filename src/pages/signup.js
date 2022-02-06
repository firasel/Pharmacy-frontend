import React from "react";
import Signup from "../components/Signup/Signup";
import SimplePageLayout from "../layouts/SimplePageLayout/SimplePageLayout";

const signup = () => {
  return (
    <>
      <Signup />
    </>
  );
};

signup.Layout = SimplePageLayout;

export default signup;

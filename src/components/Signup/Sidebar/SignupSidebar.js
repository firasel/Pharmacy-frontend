import React from "react";
import signupAnimationData from "../../../assets/animation/signup.json";
import { LottieAnimation } from "../../../helper/LottieAnimation";

const SignupSidebar = () => {
  return (
    <div className="w-full h-full">
      <LottieAnimation
        animationData={signupAnimationData}
        animationOptions={{
          name: "signupAnimation",
          autoplay: true,
          loop: true,
        }}
      />
      <div>
        <h1 className="sidebarTitle">Welcome to Medicine Manage</h1>
        <p className="sidebarMessage">
          Sign up at <b>Medicine Manage</b>, enjoy our great features. Save your
          time and make your business smarter.
        </p>
      </div>
    </div>
  );
};

export default SignupSidebar;

import React from "react";
import signinAnimation from "../../assets/animation/signin.json";
// import pharmacyImg from "../../assets/images/vectorSignin.svg";
import { LottieAnimation } from "../../helper/LottieAnimation";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-5/6 px-0">
        <LottieAnimation
          animationData={signinAnimation}
          animationOptions={{
            autoplay: true,
            loop: true,
          }}
        />
        <h1 className="sidebarTitle">Welcome back to Medicine Manage</h1>
        <p className="sidebarMessage">
          Manage your medicine store smartly. Set your sales targets for today
          and easily calculate the revenue and costs of your store.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

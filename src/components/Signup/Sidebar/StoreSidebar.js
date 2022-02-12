import React from "react";
import storeAnimationData from "../../../assets/animation/store.json";
import { LottieAnimation } from "../../../helper/LottieAnimation";

const StoreSidebar = () => {
  return (
    <div className="w-full h-full">
      <LottieAnimation
        animationData={storeAnimationData}
        animationOptions={{
          name: "storeAnimation",
          autoplay: true,
          loop: true,
        }}
      />
      <div>
        <h1 className="sidebarTitle">Welcome to Medicine Manage</h1>
        <p className="sidebarMessage">
          Create your store at <b>Medicine Manage</b>, easily track your store
          stocks and sales.
        </p>
      </div>
    </div>
  );
};

export default StoreSidebar;

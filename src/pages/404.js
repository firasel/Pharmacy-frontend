import React from "react";
import SimplePageLayout from "../layouts/SimplePageLayout/SimplePageLayout";

const Custome404 = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center flex items-center">
        <span className="text-4xl mr-5 text-red-700 font-semibold">404</span>{" "}
        <span className="text-3xl font-bold">|</span>
        <span className="text-3xl ml-5">This page could not be found.</span>
      </div>
    </div>
  );
};

Custome404.Layout = SimplePageLayout;

export default Custome404;

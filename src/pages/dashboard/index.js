import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const index = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="relative flex">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <div className="w-full bg-[#FBFBFB]">This is main page</div>
        </div>
      </div>
    </div>
  );
};

export default index;

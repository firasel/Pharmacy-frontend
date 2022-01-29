import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const index = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Topbar/>
          <div className="w-full h-[200%] bg-[#FBFBFB]">
            <span>
            This is main page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

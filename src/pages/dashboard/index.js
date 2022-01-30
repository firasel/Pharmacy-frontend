import React from "react";
import DashboardHome from "../../components/DashboardHome/DashboardHome";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const index = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <DashboardHome />
        </div>
      </div>
    </div>
  );
};

export default index;

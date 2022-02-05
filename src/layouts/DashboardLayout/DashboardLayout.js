import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

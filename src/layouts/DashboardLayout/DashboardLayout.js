import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import style from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className={style.dashboardContainer}>
      <div className="dashboardChild">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          {children}
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import axios from "axios";
import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import style from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/", {
        withCredentials: true,
        credentials: "include",
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("hello");
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

export async function getServerSideProps({ req, res }) {
  console.log("Server side rendering");
  return {};
}

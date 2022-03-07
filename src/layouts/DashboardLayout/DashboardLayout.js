import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { loggedInState } from "../../atoms/authenticationAtom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import VerifyUser from "../../helper/VerifyUser";
import style from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      VerifyUser(setIsLoggedIn, router);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div className={style.dashboardContainer}>
          <div className="dashboardChild">
            <div className="flex w-full">
              <Sidebar />
              <div className="w-full relative overflow-auto">
                <Topbar />
                <div>
                  <ToastContainer className="toastCustomStyle" />
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h2 className="text-7xl text-center">Loading...</h2>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;

export async function getServerSideProps({ req, res }) {
  console.log("Server side rendering");
  return {};
}

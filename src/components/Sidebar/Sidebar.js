import Image from "next/image";
import React from "react";
import analyticsIcon from "../../assets/icons/Analytics.svg";
import clientsIcon from "../../assets/icons/clients.svg";
import dashboardIcon from "../../assets/icons/home.svg";
import invoiceIcon from "../../assets/icons/invoice.svg";
import logoImg from "../../assets/icons/logo.svg";
import signOutIcon from "../../assets/icons/signOut.svg";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div
      className={`h-screen bg-white pb-4 w-max ${style.sidebarRoot}`}
    >
      <div className="w-44">
        <div className="w-100 logo flex items-center justify-center gap-2 py-5 border-b-2">
          <Image src={logoImg} />
          <span className="font-semibold font-[Poppins]">Pharmacy</span>
        </div>
        <div className="sidebarElement active">
          <div>
            <Image src={dashboardIcon} />
            <span>Dashboard</span>
          </div>
        </div>
        <div className="sidebarElement">
          <div>
            <Image src={clientsIcon} />
            <span>Products</span>
          </div>
        </div>
        <div className="sidebarElement">
          <div>
            <Image src={invoiceIcon} />
            <span>Invoices</span>
          </div>
        </div>
        <div className="sidebarElement">
          <div>
            <Image src={analyticsIcon} />
            <span>Analytics</span>
          </div>
        </div>
        <div className="sidebarElement">
          <div>
            <Image src={signOutIcon} />
            <span>SignOut</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

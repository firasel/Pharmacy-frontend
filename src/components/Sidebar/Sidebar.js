import Image from "next/image";
import React, { useState } from "react";
import analyticsIcon from "../../assets/icons/Analytics.svg";
import clientsIcon from "../../assets/icons/clients.svg";
import dashboardIcon from "../../assets/icons/home.svg";
import invoiceIcon from "../../assets/icons/invoice.svg";
import logoImg from "../../assets/icons/logo.svg";
import signOutIcon from "../../assets/icons/signOut.svg";
import style from "./Sidebar.module.scss";
import subMenuFunction from "./subMenuFunction";

const Sidebar = () => {
  const [expandKey, setExpandKey] = useState(1);

  return (
    <div className={`h-screen bg-white pb-4 w-max ${style.sidebarRoot}`}>
      <div className="w-44 relative">
        <div className="fixed w-44">
          {/* Logo start */}
          <div className="w-100 logo flex items-center justify-center gap-2 py-5 border-b-2">
            <Image src={logoImg} />
            <span className="font-semibold font-[Poppins]">Pharmacy</span>
          </div>
          {/* Logo end */}
          {/* Items start */}
          <div className="sidebarElement">
            <div>
              <Image src={dashboardIcon} />
              <span>Dashboard</span>
            </div>
          </div>
          <div className="sidebarElement active">
            <div>
              <Image src={clientsIcon} />
              <span>Products</span>
            </div>
          </div>

          <div
            className={`sidebarElement ${expandKey===1 && 'active' }`} 
            onClick={()=>subMenuFunction([expandKey, setExpandKey],1)}
          >
            <div>
              <Image src={invoiceIcon} />
              <span>Invoices</span>
            </div>
          </div>

          <div
            className={`w-full subMenu ${expandKey === 1 && "subMenuActive"}`}
          >
            <div className="sidebarElement">
              <div>
                <Image src={invoiceIcon} />
                <span>1 Invoices</span>
              </div>
            </div>
            <div className="sidebarElement">
              <div>
                <Image src={invoiceIcon} />
                <span>2 Invoices</span>
              </div>
            </div>
            <div className="sidebarElement">
              <div>
                <Image src={invoiceIcon} />
                <span>3 Invoices</span>
              </div>
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
          {/* Items end */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

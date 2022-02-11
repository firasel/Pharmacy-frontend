import Image from "next/image";
import React from "react";
import pharmacyImg from "../../assets/images/vectorSignin.svg";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-4/6 px-0">
        <Image src={pharmacyImg} />
        <h1 className="sidebarTitle">Welcome back to Medicine Manage</h1>
        <p className="sidebarMessage">
          Manage your medicine store smartly. Set your sales targets for today
          and easily calculate the revenue and costs of your store.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

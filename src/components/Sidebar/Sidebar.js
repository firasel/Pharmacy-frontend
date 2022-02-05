import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineUser
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logoImg from "../../assets/icons/logo.svg";
import style from "./Sidebar.module.scss";
import subMenuFunction from "./subMenuFunction";

const Sidebar = () => {
  const [expandKey, setExpandKey] = useState(1);
  const [activeItem, setActiveItem] = useState(1);
  const router = useRouter();

  return (
    <div className={`h-screen bg-white pb-4 w-max ${style.sidebarRoot}`}>
      <div className="w-44 relative">
        <div className="fixed w-44">
          {/* Logo start */}
          <div className="w-100 logo flex items-center justify-center gap-2 py-5 border-b-[1px] border-gray-200">
            <Image src={logoImg} />
            <span className="font-semibold font-[Poppins]">Pharmacy</span>
          </div>
          {/* Logo end */}
          {/* Items start */}
          <div className="sidebarElement">
            <div>
              <AiOutlineHome />
              <span>Dashboard</span>
            </div>
          </div>
          <div className="sidebarElement">
            <div>
              <AiOutlineUser />
              <span>Products</span>
            </div>
          </div>

          <div
            className={`sidebarElement ${expandKey === 1 && "active"}`}
            onClick={() => subMenuFunction([expandKey, setExpandKey], 1)}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <AiOutlineFileText />
                <span>Invoices</span>
              </div>
              <BiChevronDown
                className={`w-7 h-7 ${
                  expandKey === 1 && "rotate-[-180deg]"
                } transition-all duration-150`}
              />
            </div>
          </div>

          <div
            className={`w-full subMenu ${expandKey === 1 && "subMenuActive"}`}
          >
            <div
              className={`childElement subMenuElement ${
                activeItem === 1 && "activeChild"
              }`}
              onClick={() => {
                setActiveItem(1);
                router.push("/dashboard");
              }}
            >
              <div>
                <span>1 Invoices</span>
              </div>
            </div>
            <div
              className={`childElement subMenuElement ${
                activeItem === 2 && "activeChild"
              }`}
              onClick={() => {
                setActiveItem(2);
                router.push("/dashboard/sales");
              }}
            >
              <div>
                <span>2 Invoices</span>
              </div>
            </div>
            <div
              className={`childElement subMenuElement ${
                activeItem === 3 && "activeChild"
              }`}
              onClick={() => {
                setActiveItem(3);
                router.push("/dashboard/sales23");
              }}
            >
              <div>
                <span>3 Invoices</span>
              </div>
            </div>
          </div>

          <div className="sidebarElement">
            <div>
              <BsGraphUp />
              <span>Analytics</span>
            </div>
          </div>
          <div className="sidebarElement">
            <div>
              <FiLogOut />
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

import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineUser
} from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useRecoilState } from "recoil";
import logoImg from "../../assets/icons/logo.svg";
import { sidebarState } from "../../atoms/sidebarAtom";
import style from "./Sidebar.module.scss";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const [expandKey, setExpandKey] = useState(1);
  const [activeItem, setActiveItem] = useState(0);
  const [subMenuActive, setSubMenuActive] = useState(0);
  const [sidebarExpand] = useRecoilState(sidebarState);

  const sidebarData = [
    {
      key: 1,
      icon: <AiOutlineHome />,
      name: "Dashboard",
      subMenu: false,
    },
    {
      key: 2,
      icon: <AiOutlineUser />,
      name: "Products",
      subMenu: false,
    },
    {
      key: 3,
      icon: <AiOutlineFileText />,
      name: "Invoices",
      subMenuData: [
        {
          key: 1,
          name: "1 Invoices",
          path: "/dashboard",
        },
        {
          key: 2,
          name: "2 Invoices",
          path: "/dashboard/sales",
        },
        {
          key: 3,
          name: "3 Invoices",
          path: "/dashboard/sales1",
        },
      ],
      subMenu: true,
    },
    {
      key: 4,
      icon: <BsGraphUp />,
      name: "Analytics",
      subMenu: false,
    },
    {
      key: 5,
      icon: <FiLogOut />,
      name: "SignOut",
      subMenu: false,
    },
  ];

  return (
    <div
      className={`h-screen bg-white pb-4 w-max ${sidebarExpand && "w-14"} ${
        style.sidebarRoot
      }`}
    >
      <div className={`${sidebarExpand ? "w-14" : "w-56"} relative`}>
        <div className={`fixed ${sidebarExpand ? "w-14" : "w-56"}`}>
          {/* Logo start */}
          <div
            className={` ${
              sidebarExpand ? "w-14" : "w-56"
            } logo flex items-center justify-center gap-2 py-5 border-b-[1px] border-gray-200`}
          >
            <Image src={logoImg} />
            {!sidebarExpand && (
              <span className="font-semibold font-[Poppins]">Pharmacy</span>
            )}
          </div>
          {/* Logo end */}

          {/* Items start */}
          {sidebarData.map((data) => (
            <SidebarItems
              key={data.key}
              sidebarData={data}
              expandState={{ expandKey, setExpandKey }}
              subMenuState={{ subMenuActive, setSubMenuActive }}
              activeState={{ activeItem, setActiveItem }}
            />
          ))}
          {/* Items end */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

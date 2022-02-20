import { AnimatePresence, motion } from "framer-motion";
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
  const sidebarVariants = {
    default: {
      width: "14rem",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 12,
      },
    },
    mobile: {
      width: "3.5rem",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 12,
      },
    },
    contentShow: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.4,
      },
    },
    contentHide: {
      scaleX: 0,
      originX: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      animate={sidebarExpand ? "mobile" : "default"}
      variants={sidebarVariants}
      className={`h-screen relative bg-white pb-4 ${style.sidebarRoot}`}
    >
      <AnimatePresence>
        <div className={`absolute w-full`}>
          {/* Logo start */}
          <div
            className={`w-full logo flex items-center justify-center gap-2 py-5 border-b-[1px] border-gray-200`}
          >
            <Image src={logoImg} />
            <AnimatePresence>
              {!sidebarExpand && (
                <motion.span
                  initial="contentHide"
                  animate="contentShow"
                  exit="contentHide"
                  variants={sidebarVariants}
                  className="font-semibold font-[Poppins]"
                >
                  Pharmacy
                </motion.span>
              )}
            </AnimatePresence>
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
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;

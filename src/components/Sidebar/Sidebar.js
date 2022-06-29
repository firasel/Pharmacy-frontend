import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AiOutlineFileText,
  AiOutlineGold,
  AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser
} from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaCapsules } from "react-icons/fa";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { useRecoilState } from "recoil";
import logoImg from "../../assets/icons/logo.svg";
import { sidebarState } from "../../atoms/sidebarAtom";
import useWindowSize from "../../helper/useWindowSize";
import style from "./Sidebar.module.scss";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const [expandKey, setExpandKey] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [subMenuActive, setSubMenuActive] = useState(0);
  const [sidebarExpand, setSidebarExpand] = useRecoilState(sidebarState);
  const router = useRouter();

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
      key: 9,
      icon: <AiOutlineShoppingCart />,
      name: "Sell",
      path: "/dashboard/sell",
      subMenu: false,
    },
    {
      key: 8,
      icon: <FiUsers />,
      name: "Customer",
      path: "/dashboard/customer",
      subMenu: false,
    },
    {
      key: 7,
      icon: <AiOutlineGold />,
      name: "Stock",
      subMenuData: [
        {
          key: 6,
          name: "Add Stock",
          path: "/dashboard/stock/add",
        },
        {
          key: 7,
          name: "Manage Stock",
          path: "/dashboard/stock/edit",
        },
      ],
      subMenu: true,
    },
    {
      key: 6,
      icon: <FaCapsules />,
      name: "Medicines",
      subMenuData: [
        {
          key: 4,
          name: "Add Medicine",
          path: "/dashboard/medicine/add",
        },
        {
          key: 5,
          name: "Edit Medicine",
          path: "/dashboard/medicine/edit",
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

  useEffect(() => {
    for (const item of sidebarData) {
      if (item?.subMenu) {
        for (const subItem of item?.subMenuData) {
          if (subItem?.path === router?.asPath) {
            setActiveItem(subItem?.key);
            setExpandKey(item?.key);
            setSubMenuActive(item?.key);
          }
        }
      } else {
        if (item?.path === router?.asPath) {
          setActiveItem(0);
          setSubMenuActive(0);
          setExpandKey(item?.key);
        }
      }
    }
  }, []);

  const sidebarVariants = {
    default: {
      width: "16rem",
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

  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize?.width < 768 && !sidebarExpand) {
      setSidebarExpand(true);
    } else if (windowSize?.width > 767 && sidebarExpand) {
      setSidebarExpand(false);
    }
  }, [windowSize]);

  return (
    <motion.div
      animate={sidebarExpand ? "mobile" : "default"}
      variants={sidebarVariants}
      className={`h-screen z-10 sticky top-0 bg-white pb-4 ${style.sidebarRoot}`}
    >
      <AnimatePresence>
        <div className={`sticky w-full`}>
          {/* Logo start */}
          <div
            className={`w-full logo flex items-center justify-center gap-2 py-3 md:py-5 border-b-[1px] border-gray-200`}
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

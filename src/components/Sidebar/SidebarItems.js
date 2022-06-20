import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../atoms/sidebarAtom";
import subMenuFunction from "./subMenuFunction";

const SidebarItems = ({
  sidebarData,
  expandState,
  subMenuState,
  activeState,
}) => {
  const { expandKey, setExpandKey } = expandState;
  const { subMenuActive, setSubMenuActive } = subMenuState;
  const { activeItem, setActiveItem } = activeState;
  const router = useRouter();
  const [sidebarExpand] = useRecoilState(sidebarState);

  const sidebarControl = (itemNum, path) => {
    setActiveItem(itemNum);
    router.push(path);
  };

  const variants = {
    show: {
      height: "auto",
      scaleX: 1,
    },
    hide: {
      height: 0,
    },
    mobileShow: {
      height: "auto",
      scaleX: 1,
      originX: 0,
    },
    mobileHide: {
      scaleX: 0,
      originX: 0,
      height: "auto",
    },
  };

  const sidebarVariants = {
    contentShow: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.3,
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
    <>
      {sidebarData?.subMenu ? (
        <div className="relative">
          <div
            className={`sidebarElement ${
              expandKey === sidebarData?.key && "active"
            }`}
            onClick={() => {
              subMenuFunction([expandKey, setExpandKey], sidebarData?.key);
              if (sidebarData?.key === subMenuActive) {
                setSubMenuActive(0);
              } else {
                setSubMenuActive(sidebarData?.key);
              }
            }}
          >
            <div
              className={`flex justify-between sidebarSubMenuParent ${
                sidebarExpand && "!px-0 py-2 items-center"
              }`}
            >
              <div
                className={`w-full flex items-center ${
                  sidebarExpand && "justify-center"
                } gap-2`}
              >
                {sidebarData?.icon}
                <AnimatePresence>
                  {!sidebarExpand && (
                    <motion.span
                      initial="contentHide"
                      animate="contentShow"
                      exit="contentHide"
                      variants={sidebarVariants}
                    >
                      {sidebarData?.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              {!sidebarExpand && (
                <BiChevronDown
                  className={`w-7 h-7 ${
                    subMenuActive === sidebarData?.key && "rotate-[-180deg]"
                  } transition-all duration-150`}
                />
              )}
            </div>
          </div>
          <AnimatePresence>
            {subMenuActive === sidebarData?.key && (
              <motion.div
                variants={variants}
                initial={sidebarExpand ? "mobileHide" : "hide"}
                animate={sidebarExpand ? "mobileShow" : "show"}
                exit={sidebarExpand ? "mobileHide" : "hide"}
                className={`w-full subMenu ${
                  sidebarExpand && "subMenuSmallStyle"
                } ${expandKey === 1 && "subMenuActive"}`}
              >
                {sidebarData?.subMenuData?.map((data) => (
                  <div
                    key={data?.key}
                    className={`childElement subMenuElement ${
                      activeItem === data?.key && "activeChild"
                    }`}
                    onClick={() => sidebarControl(data?.key, data?.path)}
                  >
                    <div>
                      <span className="p-0 md:pl-7">{data?.name}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div
          className={`sidebarElement ${
            expandKey === sidebarData?.key && "activeItem"
          }`}
          onClick={() => {
            subMenuFunction([expandKey, setExpandKey], sidebarData?.key);
            setActiveItem(0);
            setSubMenuActive(sidebarData?.key);
            if (sidebarData?.path) router.push(sidebarData.path);
          }}
        >
          <div
            className={`${
              sidebarExpand &&
              "w-full flex items-center justify-center !px-0 py-2"
            }`}
          >
            {sidebarData?.icon}
            <AnimatePresence>
              {!sidebarExpand && (
                <motion.span
                  initial="contentHide"
                  animate="contentShow"
                  exit="contentHide"
                  variants={sidebarVariants}
                >
                  {sidebarData?.name}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarItems;

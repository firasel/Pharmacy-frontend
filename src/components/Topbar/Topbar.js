import Image from "next/image";
import React from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { useRecoilState } from "recoil";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import doctorImg from "../../assets/images/doctor.jpg";
import { sidebarState } from "../../atoms/sidebarAtom";

const Topbar = () => {
  const [sidebarExpand, setSidebarExpand] = useRecoilState(sidebarState);
  console.log(sidebarExpand);
  return (
    <div className="w-full h-min bg-white py-3 sticky top-0 z-10">
      <div className="px-5 relative">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSidebarExpand(!sidebarExpand)}
            className="text-3xl p-1"
          >
            {sidebarExpand ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
          </button>
          <span className="text-2xl font-[Poppins]">KD Pharmacy</span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#CFFFFD] rounded-lg">
              <Image width={23} height={23} src={notificationIcon} />
            </div>
            <div className="flex items-center gap-2">
              <div className="border-[#CFFFFD] border-[3px] rounded-full w-12 h-12 p-[3px] overflow-hidden cursor-pointer">
                <Image
                  width={48}
                  height={48}
                  className="rounded-full"
                  src={doctorImg}
                />
              </div>
              <div className="flex items-center gap-[2px] cursor-pointer">
                <span>Md Rasel</span>
                <Image width={20} height={20} src={dropdownIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

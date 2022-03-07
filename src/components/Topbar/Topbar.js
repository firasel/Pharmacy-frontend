import Image from "next/image";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { useRecoilState } from "recoil";
import doctorImg from "../../assets/images/doctor.jpg";
import { sidebarState } from "../../atoms/sidebarAtom";

const Topbar = () => {
  const [sidebarExpand, setSidebarExpand] = useRecoilState(sidebarState);
  return (
    <div className="w-full h-min bg-white py-3 sticky top-0 right-0 z-10">
      <div className="pl-2 pr-5 relative">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSidebarExpand(!sidebarExpand)}
            className="text-2xl md:text-3xl p-1"
          >
            {sidebarExpand ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
          </button>
          <span className="hidden md:block text-2xl font-[Poppins]">
            KD Pharmacy
          </span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-[#CFFFFD] rounded-lg">
              <AiOutlineBell className="text-xl" />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="border-[#CFFFFD] border-[3px] rounded-full 
              w-8 h-8
              md:w-12 md:h-12 p-[3px] overflow-hidden cursor-pointer"
              >
                <Image
                  width={48}
                  height={48}
                  className="rounded-full"
                  src={doctorImg}
                />
              </div>
              <div className="hidden md:flex items-center gap-[2px] cursor-pointer">
                <span>Md Rasel</span>
                <MdKeyboardArrowDown className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

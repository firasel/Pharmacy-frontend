import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { RiShoppingBasketLine } from "react-icons/ri";

const MedicineList = ({ data, handleMedicineAdd }) => {
  return (
    <>
      <tr className="border-b-[1px] border-gray-400 text-base md:text-lg hover:bg-gray-200 transition-all duration-100">
        <td className="text-left py-2 pl-3">{data?.name}</td>
        <td>{data?.genericName}</td>
        <td>{data?.dosage}</td>
        <td>{data?.strength}</td>
        <td>{data?.manufacturer}</td>
        <td>
          <div className="flex divide-x-[1px] hover:divide-x-0 my-[3px]">
            <button className="w-full hover:bg-gray-100 hover:rounded-md py-2 flex justify-center items-center transition-all duration-300">
              <GrAddCircle className="text-2xl" />
            </button>
            <button
              onClick={() => handleMedicineAdd(data)}
              className="w-full hover:bg-gray-100 hover:rounded-md py-2 flex justify-center items-center transition-all duration-300"
            >
              <RiShoppingBasketLine className="text-2xl" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MedicineList;

import React from "react";
import { useRecoilState } from "recoil";
import { addMedicineState } from "../../../../atoms/medicineAtom";
import SelectedMedicineRow from "./SelectedMedicineRow";

const SelectedMedicine = () => {
  const [medicines, setMedicines] = useRecoilState(addMedicineState);
  console.log(medicines);

  return (
    <div className="px-2 py-2">
      {medicines?.length ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-between gap-0 md:gap-2 font-[Lato] px-2 py-2 border-b-[1px] border-gray-300 bg-gray-300 transition-all duration-200 text-sm md:text-base md:font-semibold">
            <div className="py-[1px] md:py-2">Name</div>
            <div className="py-[1px] md:py-2">Generic Name</div>
            <div className="py-[1px] md:py-2">Dosage</div>
            <div className="py-[1px] md:py-2">Strength</div>
            <div className="py-[1px] md:py-2">Manufacturer</div>
            <div className="col-span-full md:col-span-3 lg:col-span-2 flex gap-2 justify-between items-center relative">
              <div>Qty Of Packet</div>
              <div>Qty Of Medicine</div>
              <div>MedicineShelf</div>
            </div>
          </div>
          {medicines.map((data, index) => (
            <SelectedMedicineRow key={index} data={data} />
          ))}
          <div className="flex gap-2 justify-end my-4">
            <button className="py-2 px-5 font-semibold font-[Lato] bg-gray-200 rounded-md">
              cancle
            </button>
            <button className="py-2 px-5 font-semibold font-[Lato] bg-gray-200 rounded-md">
              Add
            </button>
          </div>
        </div>
      ) : (
        <h1 className="my-5 text-xl text-center">No medicines were selected</h1>
      )}
    </div>
  );
};

export default SelectedMedicine;
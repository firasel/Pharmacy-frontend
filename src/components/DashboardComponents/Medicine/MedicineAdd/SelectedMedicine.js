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

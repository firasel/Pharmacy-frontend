import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { addMedicineState } from "../../../../atoms/medicineAtom";

const SelectedMedicineRow = ({ data }) => {
  const [medicines, setMedicines] = useRecoilState(addMedicineState);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dataSubmit = (data) => {
    console.log(data);
  }
  

  return (
    <div className="grid grid-cols-7 justify-between gap-2 font-[Lato] px-2 py-2 border-b-[1px] border-gray-300 hover:bg-gray-200 transition-all duration-200">
      <div className="py-2">{data.name}</div>
      <div className="py-2">{data.genericName}</div>
      <div className="py-2">{data.dosage}</div>
      <div className="py-2">{data.strength}</div>
      <div className="py-2">{data.manufacturer}</div>
      <div className="col-span-2 flex gap-2 justify-between items-center relative">
        <div>
          <input
            className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
            type="number"
            min={1}
            defaultValue={data.qtyOfPacket}
            title="Number of packets in a box"
            {...register("exampleRequired", { required: true })}
          />
        </div>
        <div>
          <input
            className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
            type="number"
            min={1}
            defaultValue={data.qtyOfMedicine}
            title="Number of medicines in a packet"
          />
        </div>
        <div className="">
          {data.medicineShelf}
          <input
            className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
            type="text"
            defaultValue={data.medicineShelf}
            placeholder="Shelf"
            title="Medicine Shelf"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedMedicineRow;

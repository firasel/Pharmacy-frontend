import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { addMedicineState } from "../../../../atoms/medicineAtom";

const SelectedMedicineRow = ({ data }) => {
  const [medicines, setMedicines] = useRecoilState(addMedicineState);
  // const validationOpt = { resolver: yupResolver(MedicineFormSchema) };
  // // React hook form
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm(validationOpt);
  // const dataSubmit = (data) => {
  //   console.log(data);
  // };
  console.log(medicines);
  // Handle selected medicine item delete
  const handleItemDelete = (id) => {
    const filterData = medicines.filter(data=>data._id !== id);
    setMedicines(filterData);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-between gap-0 md:gap-2 font-[Lato] px-2 py-2 border-b-[1px] border-gray-300 hover:bg-gray-200 transition-all duration-200 text-sm lg:text-base">
      <div className="py-[2px] lg:py-2">{data.name}</div>
      <div className="py-[2px] lg:py-2">{data.genericName}</div>
      <div className="py-[2px] lg:py-2">{data.dosage}</div>
      <div className="py-[2px] lg:py-2">{data.strength}</div>
      <div className="pt-[2px] pb-2 lg:py-2">{data.manufacturer}</div>
      <div className="col-span-full md:col-span-3 lg:col-span-2 flex gap-2 justify-between items-center relative">
        <div>
          <input
            className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
            type="number"
            min={1}
            defaultValue={data.qtyOfPacket}
            title="Number of packets in a box"
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
        <div
          onClick={() => handleItemDelete(data._id)}
          className="p-2 bg-red-100 rounded cursor-pointer hover:text-red-600 hover:bg-slate-100 transition-all duration-200"
        >
          <RiDeleteBin6Line size={22} />
        </div>
      </div>
    </div>
  );
};

export default SelectedMedicineRow;

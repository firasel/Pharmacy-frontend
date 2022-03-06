import React, { useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import {
  RiAddCircleFill,
  RiLayoutGridFill,
  RiShoppingBasketFill,
  RiShoppingBasketLine,
  RiTableFill
} from "react-icons/ri";
import { useRecoilState } from "recoil";
import API from "../../../../api/AxiosInstance";
import { addMedicineState } from "../../../../atoms/medicineAtom";
import SelectedMedicine from "./SelectedMedicine";

const MedicineAdd = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [tableFormat, setTableFormat] = useState(false);
  const [medicines, setMedicines] = useRecoilState(addMedicineState);
  const [selectedMedicineShow, setSelectedMedicineShow] = useState(false);

  useEffect(() => {
    API.get("/medicine/get")
      .then((res) => {
        if (res.status === 200 && res.data.status && res?.data?.data) {
          setMedicineData(res?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMedicineAdd = (data) => {
    const { name, genericName, dosage, strength, manufacturer } = data;
    const medicineObj = {
      name,
      genericName,
      dosage,
      strength,
      manufacturer,
      qtyOfPacket: 0,
      qtyOfMedicine: 0,
      medicineShelf: "",
    };
    setMedicines([...medicines, medicineObj]);
  };

  return (
    <div className="mt-3 md:mt-0">
      <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
        <h4 className="text-xl">Add Medicine</h4>
        <div className="flex gap-3 pr-2 md:pr-0">
          <button
            onClick={() => setTableFormat(!tableFormat)}
            className="h-fit md:h-auto py-2 px-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded relative"
            title={tableFormat ? "Table Layout" : "Grid Layout"}
          >
            {tableFormat ? (
              <RiTableFill className="text-2xl md:text-3xl" />
            ) : (
              <RiLayoutGridFill className="text-2xl md:text-3xl" />
            )}
          </button>
          <button
            className="h-fit md:h-auto py-2 px-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded relative"
            title="Add New Medicine"
          >
            <RiAddCircleFill className="text-2xl md:text-3xl" />
          </button>
          <button
            onClick={() => setSelectedMedicineShow(!selectedMedicineShow)}
            className="h-fit md:h-auto py-2 px-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded relative"
            title="Add Selected Medicine"
          >
            <RiShoppingBasketFill className="text-2xl md:text-3xl" />
            <div className="absolute -top-2 -right-2 text-white text-sm md:text-base md:font-semibold bg-black rounded-full px-[6px] md:px-[7px] z-0">
              {medicines?.length}
            </div>
          </button>
        </div>
      </div>
      {selectedMedicineShow && <SelectedMedicine />}
      {!selectedMedicineShow &&
        (tableFormat ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 sm:px-0 gap-y-3 sm:gap-5 justify-between h-auto pb-4">
            {medicineData?.map((data) => (
              <div className="shadow-lg bg-white rounded-md w-full grid hover:scale-[1.02] transition-all duration-200">
                <div className="px-3 pt-3 pb-2 tracking-wide">
                  <h3 className="text-xl font-semibold font-[Lato] text-gray-700">
                    {data.name}
                  </h3>
                  <h4 className="text-lg text-gray-600 font-medium">
                    {data.genericName}
                  </h4>
                  <h4 className="text-base font-medium">{data.dosage}</h4>
                  <h4 className="text-base font-bold font-[Lato]">
                    {data.strength}
                  </h4>
                  <h5 className="text-base">{data.manufacturer}</h5>
                </div>
                <div className="h-fit mt-auto flex divide-x-2 hover:divide-x-0 mb-2 mx-2">
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
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 text-lg font-[Lato] text-left">
                  <th className="py-2 pl-3">Name</th>
                  <th>Generic Name</th>
                  <th>Dosage</th>
                  <th>Strength</th>
                  <th>Manufacturer</th>
                  <th className="text-center">Manage</th>
                </tr>
              </thead>
              <tbody>
                {medicineData.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b-[1px] border-gray-400 text-base md:text-lg hover:bg-gray-200 transition-all duration-100"
                  >
                    <td className="text-left py-2 pl-3">{data.name}</td>
                    <td>{data.genericName}</td>
                    <td>{data.dosage}</td>
                    <td>{data.strength}</td>
                    <td>{data.manufacturer}</td>
                    <td>
                      <div className="flex divide-x-[1px] hover:divide-x-0 my-[3px]">
                        <button className="w-full hover:bg-gray-100 hover:rounded-md py-2 flex justify-center items-center transition-all duration-300">
                          <GrAddCircle className="text-2xl" />
                        </button>
                        <button className="w-full hover:bg-gray-100 hover:rounded-md py-2 flex justify-center items-center transition-all duration-300">
                          <RiShoppingBasketLine className="text-2xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default MedicineAdd;

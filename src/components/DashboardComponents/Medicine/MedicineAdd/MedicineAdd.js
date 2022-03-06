import React, { useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { RiShoppingBasketLine } from "react-icons/ri";
import API from "../../../../api/AxiosInstance";

const MedicineAdd = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [tableFormat, setTableFormat] = useState(false);

  useEffect(() => {
    API.get("/medicine/get")
      .then((res) => {
        if (res.status === 200 && res.data.status && res?.data?.data) {
          setMedicineData(res?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
        <h4 className="text-xl">Add Medicine</h4>
        <div>
          <button
            onClick={() => setTableFormat(!tableFormat)}
            className="py-2 px-5 rounded bg-white"
          >
            Click
          </button>
        </div>
      </div>
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
              <button className="w-full hover:bg-gray-100 hover:rounded-md py-2 flex justify-center items-center transition-all duration-300">
                <RiShoppingBasketLine className="text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default MedicineAdd;

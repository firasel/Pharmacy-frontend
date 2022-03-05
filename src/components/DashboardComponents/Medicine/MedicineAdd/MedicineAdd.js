import React, { useEffect, useState } from "react";
import API from "../../../../api/AxiosInstance";

const MedicineAdd = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [tableFormat, setTableFormat] = useState(false);

  useEffect(() => {
    API.get("/medicine/get")
      .then((res) => {
        if (res.status === 200 && res.data.status) {
          setMedicineData(res?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h4 className="text-xl">Add Medicine</h4>
        <button
          onClick={() => setTableFormat(!tableFormat)}
          className="py-2 px-5 rounded bg-white"
        >
          Click
        </button>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 sm:px-0 gap-y-3 sm:gap-5 justify-between max-h-screen">
        {medicineData?.map((data) => (
          <div className="shadow-lg bg-white px-3 py-3 rounded-md w-full grid hover:scale-105 transition-all duration-200">
            <div>
              <h3 className="text-xl font-semibold text-center">{data.name}</h3>
              <h4 className="text-lg font-medium">{data.genericName}</h4>
              <div className="flex flex-wrap md:gap-x-8 justify-between text-base font-medium">
                <span>{data.dosage}</span>
                <span>{data.strength}</span>
              </div>
            </div>
            <h5 className="text-base mt-auto row-end-auto">
              {data.manufacturer}
            </h5>
          </div>
        ))}
      </div>
      <div>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>GenericName</th>
              <th>Dosage</th>
              <th>Strength</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {medicineData.map((data, index) => (
              <tr key={index}>
                <td className="text-left">{data.name}</td>
                <td>{data.genericName}</td>
                <td>{data.dosage}</td>
                <td>{data.strength}</td>
                <td>{data.manufacturer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineAdd;

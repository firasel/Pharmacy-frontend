import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiLayoutGridFill, RiTableFill } from "react-icons/ri";
import API from "../../../../api/AxiosInstance";
import ErrorToast from "../../../../helper/ErrorToast";
import SuccessToast from "../../../../helper/SuccessToast";
import useWindowSize from "../../../../helper/useWindowSize";
import MedicineCard from "./MedicineCard";
import MedicineList from "./MedicineList";

const MedicineEdit = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [tableFormat, setTableFormat] = useState(true);
  const [btnDisable, setBtnDisable] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  // Load only store medicine data from api
  useEffect(() => {
    API.get("/store/medicine/get?page=1&limit=25", { withCredentials: true })
      .then((res) => {
        if (res.status === 200 && res.data.status && res?.data?.data) {
          setMedicineData(res?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, [reloadData]);

  // Delete medicine function
  const handleMedicineDelete = (id) => {
    API.delete(`/store/medicine/delete/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.status === 200 && res.data.status) {
          SuccessToast(res?.data?.message);
          setReloadData(!reloadData);
        } else {
          ErrorToast(res?.data?.message);
        }
      })
      .catch((err) => {
        ErrorToast(res?.data?.message);
      });
  };

  // Current window size custom hook
  const windowSize = useWindowSize()?.width;
  // Layout responsive design depend on screen size
  useEffect(() => {
    if (windowSize < 768) {
      setTableFormat(true);
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [windowSize]);

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        damping: 13,
        type: "spring",
      },
    },
    hide: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <div className="mt-3 md:mt-0">
        <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
          <h4 className="text-xl">Edit Medicine</h4>
          <div className="flex gap-3 pr-2 md:pr-0">
            {!btnDisable && (
              <button
                onClick={() => {
                  setTableFormat(!tableFormat);
                }}
                className={`h-fit md:h-auto py-2 px-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded relative`}
                title={tableFormat ? "Table Layout" : "Grid Layout"}
                disabled={btnDisable}
              >
                {tableFormat ? (
                  <RiTableFill className="text-2xl md:text-3xl" />
                ) : (
                  <RiLayoutGridFill className="text-2xl md:text-3xl" />
                )}
              </button>
            )}
          </div>
        </div>

        {tableFormat ? (
          <motion.div
            initial="initial"
            animate="show"
            exit="hide"
            variants={variants}
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 sm:px-0 gap-y-3 sm:gap-5 justify-between h-auto pb-4"
          >
            {medicineData?.map((data, index) => (
              <MedicineCard
                data={data}
                handleMedicineDelete={handleMedicineDelete}
                setReloadData={setReloadData}
                key={index}
              />
            ))}
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial="initial"
              animate="show"
              exit="hide"
              variants={variants}
              className="mt-5 hidden md:block"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 text-lg font-[Lato] text-left">
                    <th className="py-2 pl-3">Name</th>
                    <th>Generic Name</th>
                    <th>Dosage</th>
                    <th>Strength</th>
                    <th>Packets</th>
                    <th>Medicines</th>
                    <th>Manufacturer</th>
                    <th className="text-center pr-3">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {medicineData.map((data, index) => (
                    <MedicineList
                      data={data}
                      handleMedicineDelete={handleMedicineDelete}
                      setReloadData={setReloadData}
                      key={index}
                    />
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default MedicineEdit;

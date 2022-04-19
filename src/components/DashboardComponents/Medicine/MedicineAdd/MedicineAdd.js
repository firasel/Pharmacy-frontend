import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  RiAddCircleFill,
  RiLayoutGridFill,
  RiShoppingBasketFill,
  RiTableFill
} from "react-icons/ri";
import { useRecoilState } from "recoil";
import API from "../../../../api/AxiosInstance";
import { addMedicineState } from "../../../../atoms/medicineAtom";
import useWindowSize from "../../../../helper/useWindowSize";
import Modal from "../../../../SharedComponents/Modal/Modal";
import MedicineAddForm from "./MedicineAddForm";
import MedicineCard from "./MedicineCard";
import MedicineList from "./MedicineList";
import SelectedMedicine from "./SelectedMedicine";

const MedicineAdd = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [tableFormat, setTableFormat] = useState(false);
  const [medicines, setMedicines] = useRecoilState(addMedicineState);
  const [selectedMedicineShow, setSelectedMedicineShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  // Load medicine data from api
  useEffect(() => {
    API.get("/medicine/get")
      .then((res) => {
        if (res.status === 200 && res.data.status && res?.data?.data) {
          setMedicineData([...res?.data?.data].slice(0, 25));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Medicine add in global state
  const handleMedicineAdd = (data) => {
    if (!medicines?.find((medicine) => medicine._id == data._id)) {
      const { active, ...medicineData } = data;
      const medicineObj = {
        ...medicineData,
        qtyOfPacket: 0,
        qtyOfMedicine: 0,
        medicineShelf: "",
      };
      setMedicines([...medicines, medicineObj]);
    }
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
    <>
      <AnimatePresence>
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(false)}
            type={"dropIn"}
            bgStyle={"bg-black/60 !items-start min-h-[99vh] h-full z-[1]"}
            style={"max-w-xl !mt-14 md:mt- mx-3 sm:mx-6 mb-8"}
          >
            <h2 className="text-2xl py-5 px-2 text-center">Medicine Add</h2>
            <MedicineAddForm
              handleClose={() => setModalOpen(false)}
              data={{}}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className="mt-3 md:mt-0">
        <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
          <h4 className="text-xl">Add Medicine</h4>
          <div className="flex gap-3 pr-2 md:pr-0">
            <button
              onClick={() => setTableFormat(!tableFormat)}
              className="h-fit md:h-auto py-2 px-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded relative"
              title={tableFormat ? "Table Layout" : "Grid Layout"}
              disabled={btnDisable}
            >
              {tableFormat ? (
                <RiTableFill className="text-2xl md:text-3xl" />
              ) : (
                <RiLayoutGridFill className="text-2xl md:text-3xl" />
              )}
            </button>
            <button
              onClick={() => setModalOpen(!modalOpen)}
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

        <div className="overflow-hidden">
          {selectedMedicineShow && (
            <motion.div
              initial="initial"
              animate="show"
              exit="hide"
              variants={variants}
            >
              <SelectedMedicine />
            </motion.div>
          )}
          {!selectedMedicineShow &&
            (tableFormat ? (
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
                    handleMedicineAdd={handleMedicineAdd}
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
                        <th>Manufacturer</th>
                        <th className="text-center pr-3">Manage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicineData.map((data, index) => (
                        <MedicineList
                          data={data}
                          handleMedicineAdd={handleMedicineAdd}
                          key={index}
                        />
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </AnimatePresence>
            ))}
        </div>
      </div>
    </>
  );
};

export default MedicineAdd;

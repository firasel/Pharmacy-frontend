import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { RiShoppingBasketLine } from "react-icons/ri";
import Modal from "../../../../SharedComponents/Modal/Modal";
import MedicineAddForm from "./MedicineAddForm";

const MedicineCard = ({ data, handleMedicineAdd }) => {
  // React useState is used to control each modal
  const [modalOpen, setModalOpen] = useState(false);
  const bodyScrollControl = () => {
    window?.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(false)}
            type={"dropIn"}
            bgStyle={"bg-black/60 overflow-hidden !items-start"}
            style={"max-w-xl !mt-14 mx-3 sm:mx-6"}
          >
            <h2 className="text-2xl py-5 px-2 text-center">Medicine Add</h2>
            <MedicineAddForm
              handleClose={() => setModalOpen(false)}
              data={data}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className="shadow-lg bg-white rounded-md w-full grid hover:scale-[1.02] transition-all duration-200">
        <div className="px-3 pt-3 pb-2 tracking-wide">
          <h3 className="text-xl font-semibold font-[Lato] text-gray-700">
            {data?.name}
          </h3>
          <h4 className="text-lg text-gray-600 font-medium">
            {data?.genericName}
          </h4>
          <h4 className="text-base font-medium">{data?.dosage}</h4>
          <h4 className="text-base font-bold font-[Lato]">{data?.strength}</h4>
          <h5 className="text-base">{data?.manufacturer}</h5>
        </div>
        <div className="h-fit mt-auto flex divide-x-2 hover:divide-x-0 mb-2 mx-2">
          <button
            onClick={() => {
              setModalOpen(!modalOpen);
              bodyScrollControl();
            }}
            className="w-full hover:bg-gray-100 hover:rounded-md py-2 flex justify-center items-center transition-all duration-300"
          >
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
    </>
  );
};

export default MedicineCard;

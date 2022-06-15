import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "../../../../SharedComponents/Modal/Modal";
import StockAddForm from "./StockAddForm";

const MedicineCard = ({ data }) => {
  // React useState is used to control each modal
  const [modalOpen, setModalOpen] = useState(false);
  // Scroll top function
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
            bgStyle={"bg-black/60 min-h-[99vh] !items-start z-[1]"}
            style={"max-w-xl !mt-28 md:!mt-48 mx-3 sm:mx-6"}
          >
            <h2 className="text-2xl py-5 px-2 text-center">Medicine Stock</h2>
            <StockAddForm handleClose={() => setModalOpen(false)} data={data} />
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
          <h4 className="text-base font-medium">Strength: {data?.strength}</h4>
          <h4 className="text-base font-medium">
            Packets: {data?.qtyOfPacket}
          </h4>
          <h4 className="text-base font-medium">
            Medicines: {data?.qtyOfMedicine}
          </h4>
          <h4 className="text-base font-medium">
            Shelf: {data?.medicineShelf}
          </h4>
          <h5 className="text-base">{data?.manufacturer}</h5>
        </div>
        <div className="h-fit mt-auto flex divide-x-2 hover:divide-x-0 mb-2 mx-2">
          <button
            onClick={() => {
              setModalOpen(!modalOpen);
              bodyScrollControl();
            }}
            className="w-full bg-gray-100 hover:bg-gray-200/80 rounded-md hover:text-[#37c3e9] py-2 flex justify-center items-center transition-all duration-300 font-medium"
            title="Edit medicine details"
          >
            Add Stock
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicineCard;

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Modal from "../../../../SharedComponents/Modal/Modal";
import MedicineEditForm from "./MedicineEditForm";

const MedicineList = ({ data, handleMedicineDelete, setReloadData }) => {
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
            style={"max-w-xl mt-14 md:mt-32 mx-3 sm:mx-6"}
          >
            <h2 className="text-2xl py-5 px-2 text-center">Edit Medicine</h2>
            <MedicineEditForm
              handleClose={() => setModalOpen(false)}
              data={data}
              setReloadData={setReloadData}
            />
          </Modal>
        )}
      </AnimatePresence>
      <tr className="border-b-[1px] border-gray-400 text-base md:text-lg hover:bg-gray-200 transition-all duration-100">
        <td className="text-left py-2 pl-3">{data?.name}</td>
        <td>{data?.genericName}</td>
        <td>{data?.dosage}</td>
        <td>{data?.strength}</td>
        <td>{data?.qtyOfPacket}</td>
        <td>{data?.qtyOfMedicine}</td>
        <td>{data?.medicineShelf}</td>
        <td>{data?.manufacturer}</td>
        <td className="pr-2">
          <div className="flex divide-x-[1px] hover:divide-x-0 my-[3px]">
            <button
              onClick={() => {
                setModalOpen(!modalOpen);
                bodyScrollControl();
              }}
              className="w-full hover:bg-gray-100 hover:rounded-md hover:text-[#37c3e9] py-2 flex justify-center items-center transition-all duration-300"
            >
              <RiEdit2Line className="text-2xl" />
            </button>
            <button
              onClick={() => handleMedicineDelete(data?._id)}
              className="w-full hover:bg-gray-100 hover:rounded-md  hover:text-red-400 py-2 flex justify-center items-center transition-all duration-300"
            >
              <RiDeleteBin6Line className="text-2xl" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MedicineList;

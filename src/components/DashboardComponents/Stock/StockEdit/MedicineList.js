import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiAddFill, RiEdit2Line } from "react-icons/ri";
import Modal from "../../../../SharedComponents/Modal/Modal";
import AddStockForm from "./AddStockForm";
import StockEditForm from "./StockEditForm";

const MedicineList = ({ data, setReloadData }) => {
  // React useState is used to control each modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editForm, setEditForm] = useState(false);
  let expDate = new Date(data?.expireDate);
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
            {editForm ? (
              <StockEditForm
                handleClose={() => setModalOpen(false)}
                setReloadData={setReloadData}
                data={data}
              />
            ) : (
              <AddStockForm
                handleClose={() => setModalOpen(false)}
                setReloadData={setReloadData}
                data={data}
              />
            )}
          </Modal>
        )}
      </AnimatePresence>
      <tr className="border-b-[1px] border-gray-400 text-base md:text-lg hover:bg-gray-200 transition-all duration-100">
        <td className="text-left py-2 pl-3">{data?.medicine_id?.name}</td>
        <td>{data?.medicine_id?.strength}</td>
        <td>{data?.buyingPrice}</td>
        <td>{data?.sellingPrice}</td>
        <td>{data?.stock}</td>
        <td>{`${
          expDate.getMonth() + 1
        }/${expDate.getDate()}/${expDate.getFullYear()}`}</td>
        <td className="pr-2">
          <div className="h-fit flex divide-x-2 hover:divide-x-0 mx-2">
            <button
              onClick={() => {
                setEditForm(true);
                setModalOpen(!modalOpen);
                bodyScrollControl();
              }}
              className="w-full hover:bg-gray-100 hover:rounded-md hover:text-[#37c3e9] py-2 flex justify-center items-center transition-all duration-300"
              title="Edit stock details"
            >
              <RiEdit2Line className="text-2xl" />
            </button>
            <button
              onClick={() => {
                setEditForm(false);
                setModalOpen(!modalOpen);
                bodyScrollControl();
              }}
              className="w-full hover:bg-gray-100 hover:rounded-md hover:text-[#37c3e9] py-2 flex justify-center items-center transition-all duration-300 addBtnStyle"
              title="New stock add"
            >
              <RiAddFill className="text-2xl" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MedicineList;

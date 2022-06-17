import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiAddFill, RiEdit2Line } from "react-icons/ri";
import Modal from "../../../../SharedComponents/Modal/Modal";
import AddStockForm from "./AddStockForm";
import StockEditForm from "./StockEditForm";

const MedicineCard = ({ data, setReloadData }) => {
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
      <div className="shadow-lg bg-white rounded-md w-full grid hover:scale-[1.02] transition-all duration-200">
        <div className="px-3 pt-3 pb-2 tracking-wide">
          <h3 className="text-xl font-semibold font-[Lato] text-gray-700">
            {data?.medicine_id?.name}
          </h3>
          <h4 className="text-base font-medium">
            Strength: {data?.medicine_id?.strength}
          </h4>
          <h4 className="text-base font-medium">
            Buying Price: {data?.buyingPrice}
          </h4>
          <h4 className="text-base font-medium">
            Selling Price: {data?.sellingPrice}
          </h4>
          <h4 className="text-base font-medium">Stock: {data?.stock}</h4>
          <h4
            className="text-base font-medium cursor-pointer"
            title="Month/Date/Year"
          >
            Expire Date:{" "}
            {`${
              expDate.getMonth() + 1
            }/${expDate.getDate()}/${expDate.getFullYear()}`}
          </h4>
        </div>
        <div className="h-fit mt-auto flex divide-x-2 hover:divide-x-0 mb-2 mx-2">
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
            <RiAddFill className="text-2xl addIcon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicineCard;

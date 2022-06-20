import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RiAddCircleFill, RiLayoutGridFill, RiTableFill } from "react-icons/ri";
import API from "../../../api/AxiosInstance";
import ErrorToast from "../../../helper/ErrorToast";
import SuccessToast from "../../../helper/SuccessToast";
import useWindowSize from "../../../helper/useWindowSize";
import Modal from "../../../SharedComponents/Modal/Modal";
import CustomerAddForm from "./CustomerAddForm";
import CustomerCard from "./CustomerCard";
import CustomerList from "./CustomerList";

const Customer = () => {
  const [customerData, setCustomerData] = useState([]);
  const [tableFormat, setTableFormat] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  // Load medicine data from api
  useEffect(() => {
    API.get("/store/customer/get", { withCredentials: true })
      .then((res) => {
        if (res.status === 201 && res?.data?.data) {
          setCustomerData(res?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, [reloadData]);

  const handleCustomerDelete = (id) => {
    API.delete(`/store/customer/delete/${id}`)
      .then((res) => {
        if (res?.data?.status) {
          SuccessToast("Customer deleted successfully");
        }
      })
      .catch((err) => ErrorToast());
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
            style={"max-w-xl mt-14 md:mt-32 mx-3 sm:mx-6 mb-8"}
          >
            <h2 className="text-2xl py-5 px-2 text-center">Customer Add</h2>
            <CustomerAddForm
              handleClose={() => setModalOpen(false)}
              setReloadData={setReloadData}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className="mt-3 md:mt-0">
        <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
          <h4 className="text-xl">Customer</h4>
          <div className="flex gap-3 pr-2 md:pr-0">
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className="h-fit md:h-auto py-2 px-2 bg-gray-200/70 hover:bg-gray-200 transition-all duration-300 rounded relative"
              title="Add New Customer"
            >
              <RiAddCircleFill className="text-2xl md:text-3xl" />
            </button>
            {!btnDisable && (
              <button
                onClick={() => {
                  setTableFormat(!tableFormat);
                }}
                className={`h-fit md:h-auto py-2 px-2 bg-gray-200/70 hover:bg-gray-200 transition-all duration-300 rounded relative`}
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

        <div>
          {tableFormat ? (
            <motion.div
              initial="initial"
              animate="show"
              exit="hide"
              variants={variants}
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 sm:px-0 gap-y-3 sm:gap-5 justify-between h-auto pb-4"
            >
              {customerData?.map((data, index) => (
                <CustomerCard
                  data={data}
                  handleCustomerDelete={handleCustomerDelete}
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
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Note</th>
                      <th className="text-center pr-3">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData.map((data, index) => (
                      <CustomerList
                        data={data}
                        handleCustomerDelete={handleCustomerDelete}
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
    </>
  );
};

export default Customer;

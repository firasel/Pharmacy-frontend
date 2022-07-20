import { useEffect, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import API from "../../../../api/AxiosInstance";
import { addCartState } from "../../../../atoms/cartAtom";
import MedicineCard from "./MedicineCard";
import SelectedMedicine from "./SelectedMedicine";

const SellAdd = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [addCart, setAddCart] = useRecoilState(addCartState);

  useEffect(() => {
    API.get("/store/medicine/stock/get?page=1&limit=25", {
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200 && res.data.status && res?.data?.data) {
          setMedicineData(res?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(addCart);

  const handleAddCart = (data) => {
    if (
      addCart?.filter((prevData) => prevData?._id === data?._id)?.length ===
        0 ||
      !addCart
    ) {
      setAddCart((prevData) => [...prevData, data]);
    }
  };

  const modifyCartProduct = () => {
    return addCart.map((data) => {
      return {
        stock_id: data?._id,
        product_id: data?.medicine_id?._id,
        name: data?.medicine_id?.name,
        quantity: data?.quantity,
      };
    });
  };

  console.log("Modify: ", modifyCartProduct());

  return (
    <>
      <div className="mt-3 md:mt-0">
        <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
          <h4 className="text-xl">Sell</h4>
          <div className="flex gap-3 pr-2 md:pr-0">
            <button
              //   onClick={() => setModalOpen(!modalOpen)}
              className="h-fit md:h-auto py-2 px-2 bg-gray-200/70 hover:bg-gray-200 transition-all duration-300 rounded relative"
              title="Add New Customer"
            >
              <RiAddCircleFill className="text-2xl md:text-3xl" />
            </button>
            {/* {!btnDisable && (
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
            )} */}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 sm:px-0 gap-y-3 sm:gap-5 justify-between h-auto pb-4">
          {medicineData.map((data, index) => (
            <MedicineCard
              key={index}
              data={data}
              handleAddCart={handleAddCart}
            />
          ))}
        </div>
        <div>
          <SelectedMedicine />
        </div>
      </div>
    </>
  );
};

export default SellAdd;

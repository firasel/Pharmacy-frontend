import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import API from "../../../../api/AxiosInstance";
import ErrorToast from "../../../../helper/ErrorToast";
import SuccessToast from "../../../../helper/SuccessToast";
import Loading from "../../../../SharedComponents/Loading/Loading";
import { AddNewStockSchema } from "./StockFormSchema";

const AddStockForm = ({ data, handleClose, setReloadData }) => {
  // State for loading show
  const [loading, setLoading] = useState(false);
  const [qtyOfBox, setQtyOfBox] = useState(0);
  const [qtyOfPackets, setQtyOfPackets] = useState(0);
  const [qtyOfMedicine, setQtyOfMedicine] = useState(0);
  const [totalMedicine, setTotalMedicine] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  // Yup validation schema
  const validationOpt = { resolver: yupResolver(AddNewStockSchema) };
  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm(validationOpt);
  register("stock", { required: true });

  useEffect(() => {
    const stockCalculate =
      qtyOfMedicine +
      qtyOfBox *
        data?.medicine_id?.qtyOfPacket *
        data?.medicine_id?.qtyOfMedicine +
      qtyOfPackets * data?.medicine_id?.qtyOfMedicine;
    setTotalMedicine(stockCalculate);
    setValue("stock", stockCalculate);
    if (stockCalculate < 1) {
      !firstRender && setError("stock", { message: "Minimum stock is 1." });
    } else {
      clearErrors("stock");
    }
    setFirstRender(false);
  }, [qtyOfMedicine, qtyOfPackets, qtyOfBox]);

  // Form submit function
  const onSubmit = (stockData) => {
    setLoading(true);
    // Add medicine id with stock data for reference
    stockData._id = data?._id;
    API.put("/store/medicine/stock/update/stock", stockData, {
      withCredentials: true,
    })
      .then((res) => {
        setLoading(false);
        if (res?.data?.status) {
          reset({ stock: 0 });
          SuccessToast("New stock add successfully.");
          setReloadData((reload) => !reload);
          handleClose();
        } else {
          ErrorToast();
        }
      })
      .catch((err) => {
        ErrorToast();
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="text-2xl py-5 px-2 text-center">Add New Stock</h2>
      <div className="px-3 py-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
            <div className="inputStyle w-full !mb-0">
              <input
                type="number"
                placeholder=" "
                name="qtyOfBox"
                value={qtyOfBox}
                onChange={(e) => {
                  if (
                    typeof parseInt(e.target.value) === "number" &&
                    parseInt(e.target.value) >= 0
                  ) {
                    setQtyOfBox(parseInt(e.target.value));
                  }
                }}
              />
              <label>Qty of Box</label>
              <p className="py-1 px-2 bg-slate-200 rounded-md mt-2 flex items-center justify-center">
                <span className="cursor-pointer" title="Box quantity">
                  {qtyOfBox}
                </span>
                <MdOutlineClose />{" "}
                <span className="cursor-pointer" title="Packets in a box">
                  {data?.medicine_id?.qtyOfPacket}
                </span>{" "}
                <MdOutlineClose />{" "}
                <span className="cursor-pointer" title="Medicines in a packet">
                  {data?.medicine_id?.qtyOfMedicine}
                </span>{" "}
                ={" "}
                <span className="cursor-pointer" title="Total medicines">
                  {data?.medicine_id?.qtyOfPacket *
                    qtyOfBox *
                    data?.medicine_id?.qtyOfMedicine}
                </span>
              </p>
            </div>
            <div className="inputStyle !mb-0 w-full">
              <input
                type="number"
                placeholder=" "
                name="qtyOfPacket"
                value={qtyOfPackets}
                onChange={(e) => {
                  if (
                    typeof parseInt(e.target.value) === "number" &&
                    parseInt(e.target.value) >= 0
                  ) {
                    setQtyOfPackets(parseInt(e.target.value));
                  }
                }}
              />
              <label>Qty of packets</label>
              <p className="py-1 px-2 bg-slate-200 rounded-md mt-2 flex items-center justify-center">
                <span className="cursor-pointer" title="Packet quantity">
                  {qtyOfPackets}
                </span>{" "}
                <MdOutlineClose />{" "}
                <span className="cursor-pointer" title="Medicines in a packet">
                  {data?.medicine_id?.qtyOfMedicine}
                </span>{" "}
                ={" "}
                <span className="cursor-pointer" title="Total medicines">
                  {data?.medicine_id?.qtyOfMedicine * qtyOfPackets}
                </span>
              </p>
            </div>
            <div className="inputStyle !mb-0 w-full col-span-full md:col-span-1 mt-5 md:mt-0">
              <input
                type="number"
                placeholder=" "
                name="qtyOfMedicine"
                value={qtyOfMedicine}
                onChange={(e) => {
                  if (
                    typeof parseInt(e.target.value) === "number" &&
                    parseInt(e.target.value) >= 0
                  ) {
                    setQtyOfMedicine(parseInt(e.target.value));
                  }
                }}
              />
              <label>Qty of medicines</label>
              <p
                className={`py-1 px-2 bg-slate-200 rounded-md mt-2 flex items-center justify-center ${
                  errors?.stock && "text-red-800 bg-red-200/70"
                }`}
              >
                <span className="cursor-pointer" title="Medicines in box">
                  {qtyOfBox *
                    data?.medicine_id?.qtyOfPacket *
                    data?.medicine_id?.qtyOfMedicine}
                </span>{" "}
                <AiOutlinePlus />{" "}
                <span className="cursor-pointer" title="Medicines in packet">
                  {qtyOfPackets * data?.medicine_id?.qtyOfMedicine}
                </span>{" "}
                <AiOutlinePlus />
                <span className="cursor-pointer" title="Medicines quantity">
                  {qtyOfMedicine}
                </span>
                =
                <span
                  className="cursor-pointer"
                  title="Total medicines quantity"
                >
                  {totalMedicine}
                </span>
              </p>
            </div>
          </div>
          {errors.stock && <p className="errorText">{errors.stock.message}</p>}
          <div className="flex items-center gap-2">
            <span className="mt-2 text-base font-medium">Total Stock: </span>
            <p className="py-1 px-3 bg-slate-200 rounded-md mt-2 flex items-center justify-center w-fit">
              <span className="cursor-pointer mr-1" title="Medicines in packet">
                {totalMedicine}
              </span>{" "}
              <AiOutlinePlus />
              <span
                className="cursor-pointer ml-1 mr-1"
                title="Medicines quantity"
              >
                {data?.stock}
              </span>
              =
              <span
                className="cursor-pointer ml-1"
                title="Total medicines quantity"
              >
                {data?.stock + totalMedicine}
              </span>
            </p>
          </div>
          <button
            type="submit"
            className="py-[6px] px-2 bg-[#cffffd] hover:bg-[#c5fcfa] transition-all duration-300 text-[#37c3e9] w-full rounded-md font-semibold font-[Lato] tracking-wider text-lg mb-1 mt-4"
          >
            {loading ? (
              <Loading
                containerStyle={"py-[2px]"}
                dotStyle={"!bg-[#37c3e9] "}
              />
            ) : (
              "Add Stock"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStockForm;

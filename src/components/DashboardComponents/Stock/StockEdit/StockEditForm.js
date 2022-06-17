import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import API from "../../../../api/AxiosInstance";
import ErrorToast from "../../../../helper/ErrorToast";
import SuccessToast from "../../../../helper/SuccessToast";
import Loading from "../../../../SharedComponents/Loading/Loading";
import { StockFormSchema } from "./StockFormSchema";

const StockEditForm = ({ data, handleClose, setReloadData }) => {
  // State for loading show
  const [loading, setLoading] = useState(false);
  const [qtyOfBox, setQtyOfBox] = useState(
    Math.floor(
      data?.stock /
        (data?.medicine_id?.qtyOfPacket * data?.medicine_id?.qtyOfMedicine)
    )
  );
  const [qtyOfPackets, setQtyOfPackets] = useState(
    Math.floor(
      (data?.stock %
        (data?.medicine_id?.qtyOfPacket * data?.medicine_id?.qtyOfMedicine)) /
        data?.medicine_id?.qtyOfMedicine
    )
  );
  const [qtyOfMedicine, setQtyOfMedicine] = useState(
    Math.floor(
      (data?.stock %
        (data?.medicine_id?.qtyOfPacket * data?.medicine_id?.qtyOfMedicine)) %
        data?.medicine_id?.qtyOfMedicine
    )
  );
  const [totalMedicine, setTotalMedicine] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  // Yup validation schema
  const validationOpt = { resolver: yupResolver(StockFormSchema) };
  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm(validationOpt);
  register("stock", { required: true });

  // Handle form reset
  const formReset = () => {
    reset({
      buyingPrice: 0,
      sellingPrice: 0,
      stock: 0,
      expireDate: new Date(),
    });
  };

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

  useEffect(() => setValue("expireDate", new Date(data?.expireDate)), []);

  // Form submit function
  const onSubmit = (stockData) => {
    setLoading(true);
    // Add medicine id with stock data for reference
    stockData._id = data?._id;
    console.log(stockData);
    API.put("/store/medicine/stock/update/details", stockData, {
      withCredentials: true,
    })
      .then((res) => {
        setLoading(false);
        if (res?.data?.status) {
          formReset();
          SuccessToast("Stock details updated.");
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
      <h2 className="text-2xl py-5 px-2 text-center">Edit Stock Details</h2>
      <div className="px-3 py-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 w-full">
            <div
              className={`inputStyle w-full !mb-0 ${
                errors.dosage && "errInputStyle"
              }`}
            >
              <input
                type="number"
                placeholder=" "
                defaultValue={data?.buyingPrice}
                name="buyingPrice"
                min={0}
                {...register("buyingPrice")}
              />
              <label>Buying Price</label>
              {errors.buyingPrice && (
                <p className="errorText">{errors.buyingPrice.message}</p>
              )}
            </div>
            <div
              className={`inputStyle w-full !mb-0 ${
                errors.sellingPrice && "errInputStyle"
              }`}
            >
              <input
                type="number"
                placeholder=" "
                defaultValue={data?.sellingPrice}
                name="sellingPrice"
                min={0}
                {...register("sellingPrice")}
              />
              <label>Selling Price</label>
              {errors.sellingPrice && (
                <p className="errorText">{errors.sellingPrice.message}</p>
              )}
            </div>
          </div>
          <div className="inputStyle">
            <label className="!relative !text-[14.5px]">Expire Date</label>
            <Controller
              control={control}
              name="expireDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select expire date"
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  selected={field.value}
                  className="shadow text-base"
                  title="Month/Day/Year"
                />
              )}
            />
            {errors.expireDate && (
              <p className="errorText">{errors.expireDate.message}</p>
            )}
          </div>
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
              "Update"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default StockEditForm;

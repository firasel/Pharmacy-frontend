import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../../../api/AxiosInstance";
import ErrorToast from "../../../../helper/ErrorToast";
import SuccessToast from "../../../../helper/SuccessToast";
import Loading from "../../../../SharedComponents/Loading/Loading";
import MedicineFormSchema from "./MedicineFormSchema";

const MedicineAddForm = ({ data, handleClose }) => {
  const validationOpt = { resolver: yupResolver(MedicineFormSchema) };
  const [loading, setLoading] = useState(false);
  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm(validationOpt);

  const formReset = () => {
    reset({
      name: "",
      genericName: "",
      dosage: "",
      strength: "",
      manufacturer: "",
      qtyOfPacket: "",
      qtyOfMedicine: "",
      medicineShelf: "",
    });
  };

  // Form submit function
  const onSubmit = (data) => {
    setLoading(true);
    API.post("/store/medicine/add", data, { withCredentials: true })
      .then((res) => {
        console.log(res?.data?.data);
        setLoading(false);
        if (res?.data?.status) {
          formReset();
          SuccessToast("Medicine successfully added.");
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
    <div className="px-3 py-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`inputStyle ${errors.name && "errInputStyle"}`}>
          <input
            type="text"
            placeholder=" "
            defaultValue={data.name}
            name="name"
            {...register("name")}
          />
          <label>Medicine name</label>
          {errors.name && <p className="errorText">{errors.name.message}</p>}
        </div>
        <div className={`inputStyle ${errors.genericName && "errInputStyle"}`}>
          <input
            type="text"
            placeholder=" "
            defaultValue={data?.genericName}
            name="genericName"
            {...register("genericName")}
          />
          <label>Generic name</label>
          {errors.genericName && (
            <p className="errorText">{errors.genericName.message}</p>
          )}
        </div>
        <div className="flex gap-2 w-full">
          <div
            className={`inputStyle w-full ${errors.dosage && "errInputStyle"}`}
          >
            <input
              type="text"
              placeholder=" "
              defaultValue={data?.dosage}
              name="dosage"
              {...register("dosage")}
            />
            <label>Type</label>
            {errors.dosage && (
              <p className="errorText">{errors.dosage.message}</p>
            )}
          </div>
          <div
            className={`inputStyle w-full ${
              errors.strength && "errInputStyle"
            }`}
          >
            <input
              type="text"
              placeholder=" "
              defaultValue={data?.strength}
              name="strength"
              {...register("strength")}
            />
            <label>Strength</label>
            {errors.strength && (
              <p className="errorText">{errors.strength.message}</p>
            )}
          </div>
        </div>
        <div className={`inputStyle ${errors.manufacturer && "errInputStyle"}`}>
          <input
            type="text"
            placeholder=" "
            defaultValue={data?.manufacturer}
            name="manufacturer"
            {...register("manufacturer")}
          />
          <label>Manufacturer</label>
          {errors.manufacturer && (
            <p className="errorText">{errors.manufacturer.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
          <div
            className={`inputStyle !mb-1 w-full ${
              errors.qtyOfPacket && "errInputStyle"
            }`}
          >
            <input
              type="number"
              placeholder=" "
              defaultValue={0}
              name="qtyOfPacket"
              {...register("qtyOfPacket")}
            />
            <label>Qty of packets</label>
            {errors.qtyOfPacket && (
              <p className="errorText">{errors.qtyOfPacket.message}</p>
            )}
          </div>
          <div
            className={`inputStyle !mb-1 w-full ${
              errors.qtyOfMedicine && "errInputStyle"
            }`}
          >
            <input
              type="number"
              placeholder=" "
              defaultValue={0}
              name="qtyOfMedicine"
              {...register("qtyOfMedicine")}
            />
            <label>Qty of medicines</label>
            {errors.qtyOfMedicine && (
              <p className="errorText">{errors.qtyOfMedicine.message}</p>
            )}
          </div>
          <div
            className={`inputStyle w-full mt-4 sm:mt-0 col-span-full md:col-span-1 ${
              errors.medicineShelf && "errInputStyle"
            }`}
          >
            <input
              type="text"
              placeholder=" "
              name="medicineShelf"
              {...register("medicineShelf")}
            />
            <label>Medicine Shelf</label>
            {errors.medicineShelf && (
              <p className="errorText">{errors.medicineShelf.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="py-[6px] px-2 bg-[#cffffd] hover:bg-[#c5fcfa] transition-all duration-300 text-[#37c3e9] w-full rounded-md font-semibold font-[Lato] tracking-wider text-lg mb-1"
        >
          {loading ? (
            <Loading containerStyle={"py-[2px]"} dotStyle={"!bg-[#37c3e9] "} />
          ) : (
            "Add Medicine"
          )}
        </button>
      </form>
    </div>
  );
};

export default MedicineAddForm;

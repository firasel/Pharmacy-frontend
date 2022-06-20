import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../../api/AxiosInstance";
import ErrorToast from "../../../helper/ErrorToast";
import SuccessToast from "../../../helper/SuccessToast";
import Loading from "../../../SharedComponents/Loading/Loading";
import CustomerFormSchema from "./CustomerFormSchema";

const CustomerAddForm = ({ handleClose, setReloadData }) => {
  // State for loading show
  const [loading, setLoading] = useState(false);
  // Yup validation schema
  const validationOpt = { resolver: yupResolver(CustomerFormSchema) };
  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm(validationOpt);

  // Handle form reset
  const formReset = () => {
    reset({
      name: "",
      phone: "",
      address: "",
      note: "",
    });
  };

  // Form submit function
  const onSubmit = (data) => {
    setLoading(true);
    API.post("/store/customer/add", data)
      .then((res) => {
        setLoading(false);
        if (res?.data?.status) {
          formReset();
          SuccessToast("Customer successfully added.");
          setReloadData((reloadData) => !reloadData);
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
            name="name"
            {...register("name")}
          />
          <label>Customer name</label>
          {errors.name && <p className="errorText">{errors.name.message}</p>}
        </div>
        <div className={`inputStyle ${errors.phone && "errInputStyle"}`}>
          <input
            type="number"
            placeholder=" "
            name="phone"
            {...register("phone")}
          />
          <label>Phone Number</label>
          {errors.phone && <p className="errorText">{errors.phone.message}</p>}
        </div>
        <div
          className={`inputStyle w-full ${errors.address && "errInputStyle"}`}
        >
          <input
            type="text"
            placeholder=" "
            name="address"
            {...register("address")}
          />
          <label>Address</label>
          {errors.address && (
            <p className="errorText">{errors.address.message}</p>
          )}
        </div>
        <div className={`w-full mb-4 ${errors.note && "errInputStyle"}`}>
          <textarea
            rows={2}
            className="w-full border-2 border-gray-400/60 px-2 py-1 rounded-md focus:outline-none"
            placeholder="Special Note"
            name="note"
            {...register("note")}
          />
          {errors.note && <p className="errorText">{errors.note.message}</p>}
        </div>

        <button
          type="submit"
          className="py-[6px] px-2 bg-[#cffffd] hover:bg-[#c5fcfa] transition-all duration-300 text-[#37c3e9] w-full rounded-md font-semibold font-[Lato] tracking-wider text-lg mb-1"
        >
          {loading ? (
            <Loading containerStyle={"py-[2px]"} dotStyle={"!bg-[#37c3e9] "} />
          ) : (
            "Add Customer"
          )}
        </button>
      </form>
    </div>
  );
};

export default CustomerAddForm;

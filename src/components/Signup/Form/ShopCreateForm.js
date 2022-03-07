import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import API from "../../../api/AxiosInstance";
import Loading from "../../../SharedComponents/Loading/Loading";

const ShopCreateForm = ({
  animation,
  completeState,
  loadingState,
  signUpDoneSate,
}) => {
  const router = useRouter();
  // State control with props
  const { setStepOneDone } = completeState;
  const { setSignUpDone } = signUpDoneSate;
  const { AnimationController } = animation;

  const { isLoading, setIsLoading } = loadingState;

  // Regular expression
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // Form validation schema
  const shopFormSchema = Yup.object().shape({
    storeName: Yup.string()
      .required("Please enter your store name.")
      .trim("Please enter a valid store name.")
      .min(2, "Please enter a valid store name."),
    phone: Yup.string()
      .required("Please enter your phone number.")
      .matches(phoneRegExp, "Please enter a valid phone number.")
      .min(10, "Please enter a valid phone number.")
      .max(13, "Please enter a valid phone number."),
    storeAddress: Yup.string()
      .required("Please enter your address.")
      .min(2, "Please enter a valid address."),
  });

  const shopValidationOpt = { resolver: yupResolver(shopFormSchema) };

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(shopValidationOpt);

  // Form submit function
  const shopFormHandler = (data) => {
    setIsLoading(2);
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData?.id) {
      data.active = true;
      data.userId = userData.id;

      API.post("/store/add", data)
        .then((res) => {
          console.log(res?.data?.data);
          setIsLoading(1);
          setSignUpDone(true);
          AnimationController.play();
        })
        .catch((err) => {
          console.log(err.response.data);
          setIsLoading(3);
        });
    } else {
      setStepOneDone(false);
    }
  };
  return (
    <div className="login-form md:w-full lg:w-11/12 xl:w-3/4 m-auto">
      <h1 className="md:!text-[1.8rem]">Create your store</h1>
      <div className={`inputStyle ${errors.storeName && "errInputStyle"}`}>
        <input
          type="text"
          placeholder=" "
          name="storeName"
          {...register("storeName")}
        />
        <label>Store name</label>
        {errors.storeName && (
          <p className="errorText">{errors.storeName.message}</p>
        )}
      </div>
      <div className={`inputStyle ${errors.phone && "errInputStyle"}`}>
        <input
          type="number"
          placeholder=" "
          name="phone"
          {...register("phone", { valueAsNumber: true })}
        />
        <label>Phone number</label>
        {errors.phone && <p className="errorText">{errors.phone.message}</p>}
      </div>
      <div className={`inputStyle ${errors.storeAddress && "errInputStyle"}`}>
        <input
          type="text"
          placeholder=" "
          name="storeAddress"
          {...register("storeAddress")}
        />
        <label>Address</label>
        {errors.storeAddress && (
          <p className="errorText">{errors.storeAddress.message}</p>
        )}
      </div>
      <button onClick={handleSubmit(shopFormHandler)} className="formBtn">
        {isLoading === 2 ? <Loading /> : "Create store"}
      </button>
    </div>
  );
};

export default ShopCreateForm;

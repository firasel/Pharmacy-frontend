import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const ShopCreateForm = ({ state }) => {
  const router = useRouter();
  const { setIsLoading } = state;

  // Form validation schema
  const shopFormSchema = Yup.object().shape({
    storeName: Yup.string()
      .required("Please enter your store name.")
      .trim("Please enter a valid store name.")
      .min(2, "Please enter a valid store name."),
    phone: Yup.number()
      .required("Please enter your phone number.")
      .typeError("Phone must be valid and contain 10 digits.")
      .min(10000, "Please enter a valid phone number."),
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
      console.log(data);
    }
    setIsLoading(1);

    // API.post("/user/signup", data)
    //   .then((res) => {
    //     console.log(res.data);
    //     const { email, _id } = res?.data?.data;
    //     localStorage.setItem("user", JSON.stringify({ id: _id, email }));
    //     setIsLoading(1);
    //     setStepOneDone(true);
    //     // router.push("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //     setIsLoading(3);
    //   });
  };
  return (
    <div className="login-form md:w-full lg:w-11/12 xl:w-3/4 m-auto">
      <h1>
        Create your shop in <span>Pharmacy</span>
      </h1>
      <div className={`inputStyle ${errors.storeName && "errInputStyle"}`}>
        <input
          type="text"
          placeholder=" "
          name="storeName"
          {...register("storeName")}
        />
        <label>Store Name</label>
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
        <label>Phone</label>
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
        Sign up
      </button>
    </div>
  );
};

export default ShopCreateForm;

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import API from "../../api/AxiosInstance";

const UserSignupForm = ({ state }) => {
  const router = useRouter();
  const {setIsLoading, setStepOneDone} = state;

  // Form validation schema
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your name.")
      .trim("Please enter your name.")
      .min(2, "Please enter a valid name."),
    email: Yup.string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),
    password: Yup.string()
      .required("Please enter your password.")
      .min(6, "Password length should be at least 6 characters.")
      .max(50, "Password must be within 60 characters."),
    passwordConfirm: Yup.string()
      .required("Please re-enter your password.")
      .oneOf([Yup.ref("password")], "Passwords must and should match."),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(validationOpt);

  // Form submit function
  const onSubmit = (data) => {
    setIsLoading(2);
    data.role = "admin";
    API.post("/user/signup", data)
      .then((res) => {
        console.log(res.data);
        const { email, _id } = res?.data?.data;
        localStorage.setItem("user", JSON.stringify({ id: _id, email }));
        setIsLoading(1);
        setStepOneDone(true);
        // router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data);
        setIsLoading(3);
      });
  };

  return (
    <div className="login-form md:w-full lg:w-11/12 xl:w-3/4 m-auto">
      <h1>
        Sign up to <span>Pharmacy</span>
      </h1>
      <div className={`inputStyle ${errors.name && "errInputStyle"}`}>
        <input type="text" placeholder=" " name="name" {...register("name")} />
        <label>Name</label>
        {errors.name && <p className="errorText">{errors.name.message}</p>}
      </div>
      <div className={`inputStyle ${errors.email && "errInputStyle"}`}>
        <input
          type="email"
          placeholder=" "
          name="email"
          {...register("email")}
        />
        <label>Email</label>
        {errors.email && <p className="errorText">{errors.email.message}</p>}
      </div>
      <div
        className={`inputStyle password ${errors.password && "errInputStyle"}`}
      >
        <input
          type="password"
          placeholder=" "
          name="password"
          {...register("password")}
        />
        <label>Password</label>
        {errors.password && (
          <p className="errorText">{errors.password.message}</p>
        )}
      </div>
      <div
        className={`inputStyle password ${
          errors.passwordConfirm && "errInputStyle"
        }`}
      >
        <input
          type="password"
          placeholder=" "
          name="passwordConfirm"
          {...register("passwordConfirm")}
        />
        <label>Confirm Password</label>
        {errors.passwordConfirm && (
          <p className="errorText">{errors.passwordConfirm.message}</p>
        )}
      </div>
      <button onClick={handleSubmit(onSubmit)} className="formBtn">
        Sign up
      </button>
      <div className="linkText">
        Already have an account?
        <span onClick={() => router.push("/signin")}>Sign in</span>
      </div>
    </div>
  );
};

export default UserSignupForm;

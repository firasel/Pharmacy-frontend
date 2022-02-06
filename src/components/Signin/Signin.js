import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import vectorSvg from "../../assets/images/vectorSignin.svg";
import style from "./Signin.module.scss";

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const Signin = () => {
  const router = useRouter();

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),
    password: Yup.string()
      .required("Please enter your password.")
      .min(6, "Password length should be at least 6 characters.")
      .max(50, "Password must be within 60 characters."),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(validationOpt);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={style.signinSignupRoot}>
      <div className="container md:flex items-center justify-between min-h-screen w-full m-auto px-7 sm:px-2">
        <div className="w-full px-2 sm:px-7 pt-4 sm:pt-0 md:px-0 md:w-5/6 xl:w-4/6 md:max-h-screen md:overflow-hidden">
          <Image src={vectorSvg} />
        </div>
        <div className="w-full m-auto sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6">
          <div className="login-form md:w-full lg:w-11/12 xl:w-3/4 m-auto">
            <h1>
              Sign in to <span>Pharmacy</span>
            </h1>
            <div className={`inputStyle ${errors.email && "errInputStyle"}`}>
              <input
                type="email"
                placeholder=" "
                name="email"
                {...register("email")}
              />
              <label>Email</label>
              {errors.email && (
                <p className="errorText">{errors.email.message}</p>
              )}
            </div>
            <div
              className={`inputStyle password ${
                errors.password && "errInputStyle"
              }`}
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
              <button>Forgot Password?</button>
            </div>
            <button onClick={handleSubmit(onSubmit)} className="formBtn">
              Sign in
            </button>
            <div className="linkText">
              Don't have an account?
              <span onClick={() => router.push("/signup")}>Sign up now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

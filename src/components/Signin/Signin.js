import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import API from '../../api/AxiosInstance';
import vectorSvg from "../../assets/images/vectorSignin.svg";
import style from "./Signin.module.scss";

const Signin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    API.post("/user/signin", data)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <div className={style.signinSignupRoot}>
      <div className="signinPage">
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
                {isLoading ? (
                  <div className="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
              <div className="linkText">
                Don't have an account?
                <span onClick={() => router.push("/signup")}>Sign up now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

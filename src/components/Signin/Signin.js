import { yupResolver } from "@hookform/resolvers/yup";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import API from "../../api/AxiosInstance";
import loadingVectorSvg from "../../assets/images/catVector.svg";
import invalidVectorSvg from "../../assets/images/invalidVector.svg";
import initialVectorSvg from "../../assets/images/vectorSignin.svg";
import useWindowSize from "../../helper/useWindowSize";
import style from "./Signin.module.scss";

const Signin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(0); // 0=first load, 1=default, 2=loading, 3=error

  // Framer motion hook for run animation first time load
  const animateControl = useAnimation();

  // Custom hook for detect window size
  const size = useWindowSize();

  // Set closed animation depending on window size
  let closedAnimation =
    size?.width < 768
      ? {
          x: "100%",
          y: 0,
          opacity: 0,
          transition: {
            duration: 0.3,
          },
          transitionEnd: {
            x: "-100%",
            y: 0,
            display: "none",
          },
        }
      : {
          y: "100%",
          x: 0,
          opacity: 0,
          transition: {
            duration: 0.3,
          },
          transitionEnd: {
            x: "-100%",
            y: 0,
            display: "none",
          },
        };

  // Animation variants
  const variants = {
    hiddenLeft: {
      x: "-100%",
      display: "none",
      opacity: 0,
    },
    hiddenRight: {
      x: "100%",
      display: "none",
      opacity: 0,
    },
    showRight: {
      x: 0,
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    showLeft: {
      x: 0,
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    closed: closedAnimation,
  };

  // Form validation schema
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
    API.post("/user/signin", data)
      .then((res) => {
        console.log(res.data);
        setIsLoading(1);
        // router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data);
        setIsLoading(3);
      });
  };

  // Animation conditional start and stop
  useEffect(() => {
    if (isLoading === 1) {
      animateControl.start("open");
    } else if (isLoading === 0) {
      animateControl.start("showLeft");
    } else {
      animateControl.start("closed");
    }
  }, [isLoading]);

  return (
    <div className={`${style.signinSignupRoot} bg-[#FBFBFB] overflow-hidden`}>
      <div className="signinPages">
        <div className="container md:flex items-center justify-between min-h-screen w-full m-auto px-7 sm:px-2 overflow-hidden">
          <div className="w-full px-2 sm:px-7 pt-4 sm:pt-2 md:pt-0 md:px-2 mb-3 md:mb-0 md:w-5/6 xl:w-4/6 md:max-h-screen md:overflow-hidden">
            <motion.div
              initial="hiddenLeft"
              animate={animateControl}
              variants={variants}
            >
              <Image className="w-full" src={initialVectorSvg} />
            </motion.div>
            <motion.div
              initial="closed"
              animate={isLoading === 2 ? "open" : "closed"}
              variants={variants}
            >
              <Image src={loadingVectorSvg} />
            </motion.div>
            <motion.div
              initial="closed"
              animate={isLoading === 3 ? "open" : "closed"}
              variants={variants}
            >
              <Image src={invalidVectorSvg} />
            </motion.div>
          </div>
          <div className="w-full m-auto sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 pb-3 md:pb-0">
            <motion.div
              variants={variants}
              animate="showRight"
              initial="hiddenRight"
            >
              <div className="login-form md:w-full lg:w-11/12 xl:w-3/4 m-auto">
                <h1>
                  Sign in to <span>Pharmacy</span>
                </h1>
                <div
                  className={`inputStyle ${errors.email && "errInputStyle"}`}
                >
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
                  {isLoading === 2 ? (
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
                  <span onClick={() => router.push("/signup")}>
                    Sign up now
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

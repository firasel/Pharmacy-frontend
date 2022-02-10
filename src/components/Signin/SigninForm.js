import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// import API from "../../api/AxiosInstance";

const SigninForm = ({ loadingState, closeState, Animation }) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = loadingState;
  const { setPageClose } = closeState;
  const { AnimationController } = Animation;

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
    // API.post("/user/signin", data)
    //   .then((res) => {
    //     console.log(res.data);
    //     setIsLoading(1);
    //     // router.push("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //     setIsLoading(3);
    //   });

    setTimeout(() => {
      setIsLoading(1);
      AnimationController.play();
      setTimeout(() => {
        setPageClose(true);
        setTimeout(() => router.push("/dashboard"), 250);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="login-form md:w-full lg:w-11/12 xl:w-3/4 m-auto">
      <h1>
        Sign in to <span>Medicine Manage</span>
      </h1>
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
        <span onClick={() => setTimeout(() => router.push("/signup"), 2000)}>
          Sign up now
        </span>
      </div>
    </div>
  );
};

export default SigninForm;

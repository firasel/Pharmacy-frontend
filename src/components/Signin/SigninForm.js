import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import API from "../../api/AxiosInstance";
import { modalState } from "../../atoms/modalAtom";
import Loading from "../../SharedComponents/Loading/Loading";
import SigninFormSchema from "./SigninFormSchema";

const SigninForm = ({
  loadingState,
  loginSuccessState,
  Animation,
  errorState,
}) => {
  const router = useRouter();
  // State recive with props
  const { isLoading, setIsLoading } = loadingState;
  const { setLoginSuccess } = loginSuccessState;
  const { AnimationController } = Animation;
  const { setErrorCode } = errorState;
  // Recoil state for modal control
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const validationOpt = { resolver: yupResolver(SigninFormSchema) };
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
    setErrorCode(0);

    API.post("/user/signin", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((res) => {
        setIsLoading(1);
        setLoginSuccess(true);
        AnimationController.play();
      })
      .catch((err) => {
        setErrorCode(err?.response?.status);
        setIsLoading(3);
        setLoginSuccess(false);
        setModalOpen(true);
      });
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
        {isLoading === 2 ? <Loading /> : "Sign in"}
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

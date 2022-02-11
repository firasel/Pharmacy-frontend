import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import confettiAnimation from "../../assets/animation/confettiData.json";
import lockAnimation from "../../assets/animation/lockData.json";
import Logo from "../../assets/images/Logo";
import { modalState } from "../../atoms/modalAtom";
import {
  AnimationController,
  LottieAnimation
} from "../../helper/LottieAnimation";
import Modal from "../../SharedComponents/Modal/Modal";
import { pageCloseVariants, variants } from "./animationVariants";
import Sidebar from "./Sidebar";
import style from "./Signin.module.scss";
import SigninForm from "./SigninForm";

const Signin = () => {
  const router = useRouter();
  // State for control loading,close,loginsuccess
  const [pageClose, setPageClose] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(0); // 0=first load, 1=default, 2=loading, 3=error
  // Recoil state for modal control
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  // Check use login success or not
  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        setPageClose(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 200);
      }, 1000);
    }
  }, [loginSuccess]);

  return (
    <div
      className={`${style.signinSignupRoot} bg-[#FBFBFB] overflow-hidden relative`}
    >
      {modalOpen && (
        <Modal
          handleClose={() => setModalOpen(false)}
          type={"dropIn"}
          style={"md:-mt-40"}
        >
          <div className="px-2 py-3">
            <IoMdClose
              onClick={() => setModalOpen(false)}
              className="ml-auto text-5xl p-1 text-red-500 cursor-pointer"
            />
            <LottieAnimation
              style={"w-3/4 md:w-3/6 m-auto"}
              animationData={lockAnimation}
              animationOptions={{
                autoplay: true,
                loop: 2,
                width: "300",
              }}
            />
            <h1 className="text-base text-center font-[Lato] mb-3">
              Your email or password is incorrect. Please try again.
            </h1>
          </div>
        </Modal>
      )}
      <div className="signinPage">
        <div className="closePageStyle">
          <motion.div
            variants={pageCloseVariants}
            initial="hideLeft"
            animate={pageClose ? "showLeft" : "hideLeft"}
            className="leftPart"
          ></motion.div>
          <motion.div
            variants={pageCloseVariants}
            initial="hideRight"
            animate={pageClose ? "showRight" : "hideRight"}
            className="rightPart"
          ></motion.div>
        </div>
        <div className="w-full flex min-h-screen ">
          <motion.div
            variants={variants}
            animate="showLeft"
            initial="hiddenLeft"
            className="w-full hidden md:block bg-[#005081]"
          >
            <Sidebar />
          </motion.div>
          <motion.div
            variants={variants}
            animate="showRight"
            initial="hiddenRight"
            className="w-full min-h-screen overflow-hidden relative"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-5/6 sm:w-4/6 xl:w-[33rem] md:mb-[10%]">
                <div className="logo mx-auto w-28 mt-1 mb-3">
                  <Logo />
                </div>
                <SigninForm
                  loadingState={{ isLoading, setIsLoading }}
                  loginSuccessState={{ setLoginSuccess }}
                  Animation={{ AnimationController }}
                />
              </div>
            </div>
            <div className={`loginSuccess ${loginSuccess && "!block"}`}>
              <LottieAnimation
                style={"loginSuccessAnimation"}
                animationData={confettiAnimation}
                animationOptions={{
                  autoplay: false,
                  loop: 1,
                  width: "300",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

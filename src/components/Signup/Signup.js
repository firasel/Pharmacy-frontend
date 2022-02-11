import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import confettiAnimation from "../../assets/animation/confettiData.json";
import errorAnimation from "../../assets/animation/errorData.json";
import Logo from "../../assets/images/Logo";
import { modalState } from "../../atoms/modalAtom";
import {
  AnimationController,
  LottieAnimation
} from "../../helper/LottieAnimation";
import Modal from "../../SharedComponents/Modal/Modal";
import style from "../Signin/Signin.module.scss";
import { pageCloseVariants, variants } from "./animationVariants";
import ShopCreateForm from "./ShopCreateForm";
import Sidebar from "./Sidebar";
import UserSignupForm from "./UserSignupForm";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(0); // 0=first load, 1=default, 2=loading, 3=error
  // Page close state
  const [pageClose, setPageClose] = useState(false);
  const [signUpDone, setSignUpDone] = useState(false);
  // Signup step is complete state
  const [stepOneDone, setStepOneDone] = useState(false);
  // State for change the page content
  const [contentChnage, setContentChnage] = useState(false);
  // Modal state
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  // Framer motion hook for run animation first time load
  const leftSideRef = useAnimation();
  const rightSideRef = useAnimation();

  useEffect(() => {
    if (stepOneDone) {
      setTimeout(() => setContentChnage(true), 150);
      leftSideRef.start("LeftIsRight");
      rightSideRef.start("RightIsLeft");
    } else {
      leftSideRef.start("LeftIsLeft");
      rightSideRef.start("RightIsRight");
    }
  }, [stepOneDone]);

  useEffect(() => {
    if (signUpDone) {
      setTimeout(() => {
        setPageClose(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 200);
      }, 1000);
    }
  }, [signUpDone]);

  return (
    <div className={`${style.signinSignupRoot} bg-[#FBFBFB] overflow-hidden`}>
      {modalOpen && (
        <Modal
          handleClose={() => setModalOpen(false)}
          type={"dropIn"}
          style={"md:!-mt-32"}
        >
          <div className="px-2 py-3">
            <IoMdClose
              onClick={() => setModalOpen(false)}
              className="ml-auto text-5xl p-1 text-red-500 cursor-pointer"
            />
            <LottieAnimation
              style={"w-3/4 md:w-3/6 m-auto"}
              animationData={errorAnimation}
              animationOptions={{
                autoplay: true,
                loop: 2,
                width: "300",
              }}
            />
            <h1 className="text-base text-center font-[Lato] mb-3">
              Something went wrong, Please try again.
            </h1>
          </div>
        </Modal>
      )}
      <div className="signinSignUpPage">
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
        <div className="w-full flex min-h-screen">
          <motion.div
            variants={variants}
            initial="hiddenLeft"
            animate={leftSideRef}
            className="w-full hidden md:block bg-[#005081] z-10"
          >
            <Sidebar />
          </motion.div>
          {/* Form start */}
          <motion.div
            variants={variants}
            initial="hiddenRight"
            animate={rightSideRef}
            className="w-full min-h-screen overflow-hidden relative z-0"
          >
            <AnimatePresence>
              {contentChnage ? (
                <motion.div
                  variants={variants}
                  initial="formHide"
                  animate="formShow"
                  exit="formExit"
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="w-5/6 sm:w-4/6 xl:w-[33rem] md:mb-[10%]">
                    <div className="logo mx-auto w-28 mt-1 mb-3">
                      <Logo />
                    </div>
                    <ShopCreateForm
                      animation={{ AnimationController }}
                      signUpDoneSate={{ setSignUpDone }}
                      completeState={{ setStepOneDone }}
                      loadingState={{ isLoading, setIsLoading }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  variants={variants}
                  initial="formHide"
                  animate="formShow"
                  exit="formExit"
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="w-5/6 sm:w-4/6 xl:w-[33rem] md:mb-[10%]">
                    <div className="logo mx-auto w-28 mt-1 mb-3">
                      <Logo />
                    </div>
                    <UserSignupForm
                      loadingState={{ isLoading, setIsLoading }}
                      completeState={{ setStepOneDone }}
                    />
                  </div>
                </motion.div>
              )}
              <div className={`loginSuccess ${signUpDone && "!block"}`}>
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
            </AnimatePresence>
          </motion.div>
          {/* Form end */}
        </div>
      </div>
    </div>
  );
};

export default Signup;

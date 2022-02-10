import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import confettiAnimation from "../../assets/animation/confetti.json";
import Logo from "../../assets/images/Logo";
import pharmacyImg from "../../assets/images/vectorSignin.svg";
import { modalState, modalTypeState } from "../../atoms/modalAtom";
import {
  AnimationController,
  LottieAnimation
} from "../../helper/LottieAnimation";
import Modal from "../../SharedComponents/Modal/Modal";
import style from "./Signin.module.scss";
import SigninForm from "./SigninForm";

const Signin = () => {
  const [pageClose, setPageClose] = useState(false);
  const [isLoading, setIsLoading] = useState(0); // 0=first load, 1=default, 2=loading, 3=error
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  console.log(modalOpen);
  // setTimeout(() => {
  //   setModalOpen(true);
  // }, 3000);
  // setTimeout(() => {
  //   AnimationController.play();
  // }, 3000);

  const pageCloseVariants = {
    hideLeft: {
      opacity: 0,
      x: "-100%",
    },
    hideRight: {
      opacity: 0,
      x: "200%",
    },
    showLeft: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    showRight: {
      opacity: 1,
      x: "99%",
      transition: {
        duration: 0.2,
      },
    },
  };

  // Animation variants
  const variants = {
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    showRight: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    showLeft: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  console.log(pageClose);

  return (
    <div
      className={`${style.signinSignupRoot} bg-[#FBFBFB] overflow-hidden relative`}
    >
      {modalOpen && (
        <Modal handleClose={() => setModalOpen(false)} type={"dropIn"}>
          <div className="px-2 py-3">
            <h1 className="text-2xl text-center">Hello World</h1>
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
            <div className="flex items-center justify-center min-h-full">
              <div className="w-4/6 px-0">
                <Image src={pharmacyImg} />
                <h1 className="sidebarTitle">
                  Welcome back to Medicine Manage
                </h1>
                <p className="sidebarMessage">
                  Manage your medicine store smartly. Set your sales targets for
                  today and easily calculate the revenue and costs of your
                  store.
                </p>
              </div>
            </div>
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
                  closeState={{ setPageClose }}
                  Animation={{ AnimationController }}
                />
              </div>
            </div>
            <div className=" z-[-1] ">
              <LottieAnimation
              style={"absolute bottom-[-25px] left-[-25px] w-[15rem] h-auto"}
                animationData={confettiAnimation}
                animationOptions={{
                  autoplay: false,
                  loop: false,
                  width: "300",
                }}
              />
              <LottieAnimation
              style={"absolute bottom-[-25px] right-[25px] w-[15rem] h-auto rotate-[270deg] mr-[-3rem]"}
                animationData={confettiAnimation}
                animationOptions={{
                  autoplay: false,
                  loop: false,
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

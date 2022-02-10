import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import loadingVectorSvg from "../../assets/images/catVector.svg";
import errorVectorSVG from "../../assets/images/errorVector.svg";
import initialVectorSvg from "../../assets/images/vectorSignin.svg";
import style from "../Signin/Signin.module.scss";
import ShopCreateForm from "./ShopCreateForm";
import UserSignupForm from "./userSignupForm";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(0); // 0=first load, 1=default, 2=loading, 3=error
  const [stepOneDone, setStepOneDone] = useState(false);
  setTimeout(() => setStepOneDone(true), 3000); //Remove after test

  // Framer motion hook for run animation first time load
  const leftAnimateControl = useAnimation();
  const rightAnimateControl = useAnimation();
  const shopFormAnimateControl = useAnimation();

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
    openFirstLoad: {
      x: 0,
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.2,
      },
    },
    openForm: {
      x: 0,
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    closedForm: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      scale: 1,
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  // Animation conditional start and stop
  useEffect(() => {
    if (isLoading === 1) {
      leftAnimateControl.start("open");
    } else if (isLoading === 0) {
      leftAnimateControl.start("openFirstLoad");
      rightAnimateControl.start("openFirstLoad");
    } else {
      leftAnimateControl.start("closed");
    }
  }, [isLoading]);

  useEffect(() => {
    if (stepOneDone) {
      rightAnimateControl.start("closedForm");
      shopFormAnimateControl.start("openForm");
    }
  }, [stepOneDone]);

  return (
    <div className={`${style.signinSignupRoot} bg-[#FBFBFB] overflow-hidden`}>
      {/* <div className="w-28 absolute top-4 right-4">
        <Image src={logoVectorSvg} />
      </div> */}
      <div className="container md:flex items-center justify-between min-h-screen w-full m-auto px-7 sm:px-2">
        <div className="w-full sm:px-7 md:px-2 pt-4 sm:pt-2 md:pt-0 mb-3 md:mb-0 md:w-5/6 xl:w-4/6 max-h-screen md:overflow-hidden">
          <motion.div
            initial="hiddenLeft"
            animate={leftAnimateControl}
            variants={variants}
          >
            <Image className="max-h-screen" src={initialVectorSvg} />
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
            <Image src={errorVectorSVG} />
          </motion.div>
        </div>
        <div className="w-full m-auto sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 pb-4 md:pb-0">
          <motion.div
            initial="hiddenRight"
            animate={rightAnimateControl}
            variants={variants}
          >
            <UserSignupForm state={{ setIsLoading, setStepOneDone }} />
          </motion.div>
          <motion.div
            initial="hiddenRight"
            animate={shopFormAnimateControl}
            variants={variants}
          >
            <ShopCreateForm state={{ setIsLoading }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

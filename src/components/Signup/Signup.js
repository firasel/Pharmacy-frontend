import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import loadingVectorSvg from "../../assets/images/catVector.svg";
import invalidVectorSvg from "../../assets/images/invalidVector.svg";
import initialVectorSvg from "../../assets/images/vectorSignin.svg";
import useWindowSize from "../../helper/useWindowSize";
import style from "../Signin/Signin.module.scss";
import ShopCreateForm from "./ShopCreateForm";
import UserSignupForm from "./userSignupForm";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(0); // 0=first load, 1=default, 2=loading, 3=error
  const [stepOneDone, setStepOneDone] = useState(false);
  setTimeout(() => setStepOneDone(true), 2000); //Remove after test

  // Framer motion hook for run animation first time load
  const leftAnimateControl = useAnimation();
  const rightAnimateControl = useAnimation();
  const shopFormAnimateControl = useAnimation();

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
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.2,
      },
    },
    showLeft: {
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
        delay: 0.5,
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

  // Animation conditional start and stop
  useEffect(() => {
    if (isLoading === 1) {
      leftAnimateControl.start("open");
    } else if (isLoading === 0) {
      leftAnimateControl.start("showLeft");
      rightAnimateControl.start("showRight");
    } else {
      leftAnimateControl.start("closed");
    }
  }, [isLoading]);

  useEffect(() => {
    if (stepOneDone) {
      rightAnimateControl.start("closed");
      shopFormAnimateControl.start("openForm");
    }
  }, [stepOneDone]);

  return (
    <div className={`${style.signinSignupRoot} bg-[#FBFBFB] overflow-hidden`}>
      <div className="container md:flex items-center justify-between min-h-screen w-full m-auto px-7 sm:px-2">
        <div className="w-full sm:px-7 md:px-2 pt-4 sm:pt-2 md:pt-0 mb-3 md:mb-0 md:w-5/6 xl:w-4/6 md:max-h-screen md:overflow-hidden">
          <motion.div
            initial="hiddenLeft"
            animate={leftAnimateControl}
            variants={variants}
          >
            <Image src={initialVectorSvg} />
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

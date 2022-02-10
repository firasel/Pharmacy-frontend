import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

const LottieAnimation = ({ animationData, animationOptions, style }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      animationData,
      ...animationOptions,
    });
  }, []);

  return <div className={style} ref={animationContainer}></div>;
};

export { LottieAnimation, Lottie as AnimationController };


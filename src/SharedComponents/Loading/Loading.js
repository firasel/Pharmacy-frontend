import React from "react";
import style from "./Loading.module.scss";

const Loading = ({ containerStyle, dotStyle }) => {
  return (
    <div className={`${style.loading} ${containerStyle}`}>
      <div className={dotStyle}></div>
      <div className={dotStyle}></div>
      <div className={dotStyle}></div>
    </div>
  );
};

export default Loading;

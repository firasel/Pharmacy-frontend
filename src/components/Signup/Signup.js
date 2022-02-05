import React from "react";
import style from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={style.signupRoot}>
      <div className="login-form">
        <h1>Sign In</h1>
        <div class="input email">
          <input type="text" placeholder=" " />
          <label>Email</label>
        </div>
        <div class="input email">
          <input type="password" placeholder=" " />
          <label>Password</label>
        </div>
        <button className="w-full py-3 px-3 text-center font-semibold font-[Lato] bg-cyan-400 hover:bg-cyan-600 text-white transition-all delay-800 rounded-sm">
          Signin
        </button>
      </div>
    </div>
  );
};

export default Signup;

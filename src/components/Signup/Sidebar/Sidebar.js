import React from "react";
import SignupSidebar from "./SignupSidebar";
import StoreSidebar from "./StoreSidebar";

const Sidebar = ({ completeState }) => {
  const { stepOneDone } = completeState;
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-5/6 px-0">
        {stepOneDone ? <StoreSidebar /> : <SignupSidebar />}
      </div>
    </div>
  );
};

export default Sidebar;

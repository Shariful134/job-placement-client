import NavBar from "@/components/modules/shared/NavBar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default CommonLayout;

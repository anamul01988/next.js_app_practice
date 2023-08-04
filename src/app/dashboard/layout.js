import React from "react";
import Sidebar from "@/components/shared/sidebar";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;

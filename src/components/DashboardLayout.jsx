import React from "react";
import Sidebar from "../Pages/StudentDashboard/Sidebar"; // Adjust path as needed
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-richblack-900 text-white p-4">
        <Outlet /> {/* Renders nested routes */}
      </div>
    </div>
  );
};

export default DashboardLayout;

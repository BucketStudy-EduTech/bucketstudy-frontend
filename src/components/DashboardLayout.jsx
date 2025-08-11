import React from "react";
import Sidebar from "../Pages/StudentDashboard/Sidebar"; // Adjust path as needed
import { Outlet } from "react-router-dom";
import DashboardFooter from "./DashboardFooter";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area with sidebar and outlet */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-richblack-900 text-white p-4">
          <Outlet /> {/* Renders nested routes */}
        </div>
      </div>

      
      <DashboardFooter />
    </div>
  );
};


export default DashboardLayout;

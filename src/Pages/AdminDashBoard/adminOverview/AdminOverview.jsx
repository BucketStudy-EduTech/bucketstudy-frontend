import React, { useState } from "react";
import { motion } from "framer-motion";
import KPIStats from "../adminOverview/KPIStats.jsx";
import SystemHealth from "../adminOverview/SystemHealth";
import MiniCharts from "../adminOverview/MiniCharts.jsx";
import Notifications from "../adminOverview/Notifications.jsx";
import CourseCompletion from "./CourseCompletion.jsx";
import CourseModal from "./CourseModal.jsx"; 
import FilterDropdown from "./FilterDropdown.jsx";
import TrendingCourses from "./TrendingCourses.jsx";
import "./AdminOverview.css";

const AdminOverview = () => {
  const [selectedFilter, setSelectedFilter] = useState("7d");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    { name: "React Basics", status: "Live", enrolled: 120, purchased: 80 },
    { name: "Node.js Mastery", status: "Draft", enrolled: 50, purchased: 20 },
    { name: "Data Science Bootcamp", status: "Completed", enrolled: 200, purchased: 150 },
  ];

  return (
    <div className="admin-overview">
      {/* Header + Filter */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>Admin Overview</h2>
        {/* <p className="subtitle">Quick snapshot of platform activity</p> */}

        {/* <FilterDropdown
          selected={selectedFilter}
          onChange={(value) => setSelectedFilter(value)}
        /> */}
      </motion.div>

      {/* Row 1: KPI cards */}
      <KPIStats filter={selectedFilter} />

      {/* Row 2: charts + health */}
      <div className="row-two">
        <MiniCharts filter={selectedFilter} />
        <SystemHealth />
      </div>

      {/* Row 3: course completion + view all button */}
      <div className="courses-section">
  <CourseCompletion />
  
  <div className="trending-wrapper">
    <TrendingCourses />
    <button className="view-all-btn" onClick={() => setIsModalOpen(true)}>
      View All Courses
    </button>
  </div>
</div>


      {/* Row 4: notifications */}
      <Notifications />

      {/* Modal Component */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courses={courses}
      />
    </div>
  );
};

export default AdminOverview;

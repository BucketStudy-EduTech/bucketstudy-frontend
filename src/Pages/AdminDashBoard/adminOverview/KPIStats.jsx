import React from "react";
import "./KPIStats.css";
import StatCard from "./StatCard.jsx";

const KPIStats = () => {
  return (
    <div className="kpi-stats">
      <StatCard title="Total Students" value="1,234" trend="+5%" trendType="up" />
      <StatCard title="Purchased Courses" value="320" trend="+10%" trendType="up" />
      <StatCard title="Live Courses" value="18" trend="+3%" trendType="up" />
      <StatCard title="Revenue" value="$12,500" trend="-2%" trendType="down" />
    </div>
  );
};

export default KPIStats;

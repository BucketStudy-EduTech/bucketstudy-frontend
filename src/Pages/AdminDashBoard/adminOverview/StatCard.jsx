import React from "react";
import { motion } from "framer-motion";
import "./StatCard.css";

const StatCard = ({ title, value, trend, trendType = "up" }) => {
  return (
    <motion.div
      className="stat-card"
      whileHover={{ scale: 1.02, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="stat-title">{title}</p>
      <div className="stat-value-row">
        <span className="stat-value">{value}</span>
        {trend && (
          <span className={`stat-trend ${trendType}`}>
            {trendType === "up" ? "▲" : "▼"} {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;

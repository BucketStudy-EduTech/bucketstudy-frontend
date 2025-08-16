import React from "react";
import { motion } from "framer-motion";
import "./CourseCompletion.css";

const rows = [
  { course: "React Basics", user: "User 117", percent: 40, status: "In Progress", color: "#2563eb" },
  { course: "UI/UX Starter", user: "User 74", percent: 20, status: "Completed", color: "#10b981" },
  { course: "Python DS", user: "User 58", percent: 18, status: "Inactive", color: "#f59e0b" },
  { course: "Node Mastery", user: "User 11", percent: 7, status: "Expired", color: "#ef4444" },
  { course: "SQL Basics", user: "User 90", percent: 40, status: "In Progress", color: "#2563eb" },
  { course: "Tailwind CSS", user: "User 74", percent: 20, status: "Completed", color: "#10b981" },
];

const CourseCompletion = () => {
  return (
    <motion.div
      className="course-completion"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="cc-header">
        <h4>Course Completion</h4>
      </div>

      {rows.map((r, i) => (
        <motion.div
          key={i}
          className="cc-row"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="cc-top">
            <motion.span className="cc-percent">{r.percent}%</motion.span>
            <span className="cc-meta">{r.course} — {r.user}</span>
          </div>

          <div className="cc-bar">
            <motion.div
              className="cc-fill"
              style={{ background: r.color }}
              initial={{ width: 0 }}
              animate={{ width: `${r.percent}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              whileHover={{
                scaleY: 1.2,
                boxShadow: `0 0 10px ${r.color}`,
              }}
            />
          </div>

          <div className="cc-status" style={{ color: r.color }}>
            {r.status}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CourseCompletion;

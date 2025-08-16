import React from "react";
import { motion } from "framer-motion";
import "./TrendingCourses.css";
import react from '../../../assets/react.png'
import node from '../../../assets/node.jpeg'
import python from '../../../assets/python.jpeg'
import uiux from '../../../assets/uiux.jpeg'
import sql from '../../../assets/sql.png'

const trendingData = [
  { name: "React Basics", enrollments: 120, logo: react  },
  { name: "Python DS", enrollments: 95,  logo:python },
  { name: "Node Mastery", enrollments: 80, logo:node },
  { name: "UI/UX Starter", enrollments: 75,logo:uiux },
  { name: "SQL Basics", enrollments: 60, logo:sql},
];

const TrendingCourses = () => {
  return (
    <motion.div
      className="trending-courses"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h4>Trending Courses</h4>
      <ul>
        {trendingData.map((course, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="course-info">
              <img src={course.logo} alt={course.name} className="course-logo" />
              <span className="course-name">{course.name}</span>
            </div>
            <span className="enrollments">
              {course.enrollments} Enrollments
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TrendingCourses;

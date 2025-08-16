import React from "react";
import { motion } from "framer-motion";
import "./Notifications.css";

const data = [
  { id: 1, text: "New student registered", time: "2m ago" },
  { id: 2, text: "Course “React Basics” updated", time: "12m ago" },
  { id: 3, text: "3 assignments awaiting review", time: "1h ago" },
];

const Notifications = () => {
  return (
    <motion.div
      className="notifications-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div className="header">
        <h4>Notifications</h4>
        {/* <button>View all</button> */}
      </div>
      <ul>
        {data.map(n => (
          <li key={n.id}>
            <span className="msg">{n.text}</span>
            <span className="time">{n.time}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Notifications;

import React from "react";
import { motion } from "framer-motion";
import "./SystemHealth.css";

const Dot = ({ status }) => <span className={`dot ${status}`} />;

const SystemHealth = () => {
  const items = [
    { label: "Server Uptime", value: "99.9%", status: "good" },
    { label: "Database", value: "Running", status: "good" },
    { label: "Storage Usage", value: "85%", status: "warn" },
    { label: "Error Rate (24h)", value: "0.7%", status: "warn" },
    { label: "API Latency", value: "120 ms", status: "good" },
  ];

  return (
    <motion.div
      className="health-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <h4>System Health</h4>
      <ul>
        {items.map((it, i) => (
          <li key={i}>
            <div className="left">
              <Dot status={it.status} />
              <span>{it.label}</span>
            </div>
            <span className={`value ${it.status}`}>{it.value}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SystemHealth;

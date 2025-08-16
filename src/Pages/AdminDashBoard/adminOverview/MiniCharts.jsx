import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chart from "react-apexcharts";
import "./MiniCharts.css";

const MiniCharts = () => {
  const filters = ["24h", "7d", "30d", "1h"];

  const [selectedFilter, setSelectedFilter] = useState({
    signups: "24h",
    newCourses: "24h",
    activeUsers: "24h",
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    signups: false,
    newCourses: false,
    activeUsers: false,
  });

  // Refs for dropdowns
  const dropdownRefs = {
    signups: useRef(null),
    newCourses: useRef(null),
    activeUsers: useRef(null),
  };

  // Close on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside = Object.keys(dropdownRefs).some(
        (key) =>
          dropdownRefs[key].current &&
          dropdownRefs[key].current.contains(event.target)
      );

      if (!isClickInside) {
        setDropdownOpen({ signups: false, newCourses: false, activeUsers: false });
      }
    };

    const handleScroll = () => {
      setDropdownOpen({ signups: false, newCourses: false, activeUsers: false });
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const chartData = {
    signups: {
      "24h": [10, 15, 12, 8, 20, 25, 18, 22, 30, 28, 35, 40, 32, 25, 20, 18, 22, 25, 28, 30, 26, 24, 22, 20],
      "7d": [50, 70, 65, 80, 90, 100, 95],
      "30d": [200, 220, 210, 250, 300, 280, 260, 270, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500],
      "1h": [1200, 1400, 1500, 1600, 1550, 1700],
    },
    newCourses: {
      "24h": [1, 2, 1, 3, 2, 2, 4, 3, 2, 1, 3, 2, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3],
      "7d": [2, 3, 1, 4, 2, 5, 4],
      "30d": [10, 8, 12, 9, 15, 11, 14, 13, 12, 15, 14, 16, 18, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      "1h": [40, 42, 38, 45, 47, 50],
    },
    activeUsers: {
      "24h": [200, 220, 210, 230, 240, 260, 250, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430],
      "7d": [210, 240, 260, 230, 280, 300, 320],
      "30d": [800, 820, 850, 870, 900, 920, 950, 960, 970, 980, 990, 1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100, 1110, 1120, 1130, 1140, 1150, 1160, 1170, 1180],
      "1h": [3000, 3200, 3100, 3300, 3500, 3400],
    },
  };

  const getCategories = (filter) => {
    if (filter === "1h") {
      return ["1:00", "1:10", "1:20", "1:30", "1:40", "1:50"];
    } else if (filter === "24h") {
      return Array.from({ length: 12 }, (_, i) => `${i * 2 + 1}h`);
    } else if (filter === "7d") {
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } else if (filter === "30d") {
      return Array.from({ length: 15 }, (_, i) => `Day ${i * 2 + 1}`);
    }
    return [];
  };

  const getChartData = (data, filter) => {
    if (filter === "1h") return data.slice(0, 6);
    if (filter === "24h") return data.filter((_, i) => i % 2 === 0);
    if (filter === "30d") return data.filter((_, i) => i % 2 === 0);
    return data;
  };

  const chartOptions = (filter) => ({
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 350 },
      },
    },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#6c63ff"],
    xaxis: { categories: getCategories(filter) },
    grid: { borderColor: "#e0e0e0", strokeDashArray: 4 },
    markers: {
      size: 4,
      hover: { size: 8, sizeOffset: 4 },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      followCursor: true,
      marker: { show: true },
    },
  });

  const toggleDropdown = (key) => {
    setDropdownOpen({
      signups: false,
      newCourses: false,
      activeUsers: false,
      [key]: !dropdownOpen[key],
    });
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilter({ ...selectedFilter, [key]: value });
    setDropdownOpen({ signups: false, newCourses: false, activeUsers: false });
  };

  const renderChartCard = (title, key) => (
    <div className="chart-card" ref={dropdownRefs[key]}>
      <h4 onClick={() => toggleDropdown(key)}>
        {title} ({selectedFilter[key]})
      </h4>

      <AnimatePresence>
        {dropdownOpen[key] && (
          <motion.ul
            className="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {filters.map((f) => (
              <li key={f} onClick={() => handleFilterChange(key, f)}>
                {f}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <Chart
        options={chartOptions(selectedFilter[key])}
        series={[
          {
            name: title,
            data: getChartData(chartData[key][selectedFilter[key]], selectedFilter[key]),
          },
        ]}
        type="line"
        height={200}
      />
    </div>
  );

  return (
    <motion.div
      className="mini-charts"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      {renderChartCard("Signups", "signups")}
      {renderChartCard("New Courses", "newCourses")}
      {renderChartCard("Active Users", "activeUsers")}
    </motion.div>
  );
};

export default MiniCharts;

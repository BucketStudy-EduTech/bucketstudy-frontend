import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

function AdminAnalytics() {
  // Mock Data
  const [users] = useState(1520);
  const [courses] = useState(48);
  const [revenue] = useState(85420);
  const [enrollments] = useState(4210);

  const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 7200 },
    { month: "Mar", revenue: 9100 },
    { month: "Apr", revenue: 6800 },
    { month: "May", revenue: 12000 },
    { month: "Jun", revenue: 15000 },
  ];

  const userTypeData = [
    { name: "Students", value: 1200 },
    { name: "Instructors", value: 200 },
    { name: "Admins", value: 10 },
  ];
  const COLORS = ["#6366f1", "#10b981", "#f59e0b"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Admin Analytics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg  hover:scale-105 transition-transform duration-300">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-2xl font-bold text-indigo-600">{users}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg  hover:scale-105  ease-in-out transition-transform duration-300">
          <h2 className="text-gray-500 text-sm">Courses</h2>
          <p className="text-2xl font-bold text-green-600">{courses}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg  hover:scale-105  ease-in-out  transition-transform duration-300">
          <h2 className="text-gray-500 text-sm">Revenue</h2>
          <p className="text-2xl font-bold text-yellow-600">₹{revenue}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105  ease-in-out ">
          <h2 className="text-gray-500 text-sm">Enrollments</h2>
          <p className="text-2xl font-bold text-purple-600">{enrollments}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Type Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">User Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userTypeData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {userTypeData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Enrollments Table */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-gray-600">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Recent Enrollments</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-gray-600">Student</th>
              <th className="p-3 text-gray-600">Course</th>
              <th className="p-3 text-gray-600">Date</th>
              <th className="p-3 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Neha Patil</td>
              <td className="p-3">React Basics</td>
              <td className="p-3">2025-08-20</td>
              <td className="p-3"><span className="text-green-600">Completed</span></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Amit Sharma</td>
              <td className="p-3">Node.js Advanced</td>
              <td className="p-3">2025-08-19</td>
              <td className="p-3"><span className="text-yellow-600">Pending</span></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Priya Verma</td>
              <td className="p-3">UI/UX Design</td>
              <td className="p-3">2025-08-18</td>
              <td className="p-3"><span className="text-green-600">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAnalytics;

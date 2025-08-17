import React, { useState } from "react";

// Mock data
const students = [
  {
    id: 1,
    name: "Neha Patil",
    email: "nehap23@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=5",
    status: "Active",
    progress: 80,
    courses: [
      { title: "React Basics", progress: 80 },
      { title: "Node.js Fundamentals", progress: 60 },
    ],
    payments: { total: "2500", lastPayment: "2025-08-01" },
    activity: ["Logged in", "Completed React Basics", "Viewed Node.js Lesson 3"]
  },
  {
    id: 2,
    name: "Shubham Mahajan",
    email: "ShubhamM@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=3",
    status: "Inactive",
    progress: 40,
    courses: [
      { title: "Tailwind CSS Mastery", progress: 40 },
      { title: "React Basic", progress: 60 },
      { title: "UI/UX Design", progress: 20 },
    ],
    payments: { total: "1200", lastPayment: "2025-07-15" },
    activity: ["Updated profile", "Enrolled in Tailwind CSS Mastery"]
  },
  {
    id: 3,
    name: "OM Sonavane",
    email: "OMSonavane@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=7",
    status: "Active",
    progress: 40,
    courses: [
      { title: "Tailwind CSS Mastery", progress: 40 },
      { title: "UI/UX Design", progress: 20 },
    ],
    payments: { total: "2000", lastPayment: "2025-07-15" },
    activity: ["Updated profile", "Enrolled in Tailwind CSS Mastery"]
  },
  {
    id: 4,
    name: "Shreya Jadhav",
    email: "Shreyajadhav@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=8",
    status: "Active",
    progress: 40,
    courses: [
      { title: "Advanced JavaScript", progress: 60 },
      { title: "Tailwind Css", progress: 40 },
      { title: "React Basics", progress: 80 },
    ],
    payments: { total: "2500", lastPayment: "2025-08-01" },
    activity: ["Logged in", "Completed React Basics", "Viewed Tailwind Lesson 5", ]
  },
];

const StudentManagement = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Close the slide-over panel
  const handleClose = () => setSelectedStudent(null);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen text-gray-950">
      <h1 className="text-2xl font-bold mb-6">Student Management</h1>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
                <th className="p-4">Progress</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedStudent(student)}
                >
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium text-base">{student.name}</span>
                  </td>
                  <td className="p-4 text-sm">{student.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        <div className="grid gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white p-4 rounded-lg shadow-xl cursor-pointer"
              onClick={() => setSelectedStudent(student)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{student.name}</h3>
                  <p className="text-gray-500 text-sm">{student.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="font-medium text-sm text-gray-700">Status</h4>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-700">Progress</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-violet-200/70 to-indigo-300/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white w-full sm:max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white">
              <h2 className="font-semibold text-lg">{selectedStudent.name}</h2>
              <button
                className="text-white text-2xl hover:text-gray-200"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 overflow-y-hidden">
              <div className="flex flex-col items-center text-center">
                <img
                  src={selectedStudent.avatar}
                  alt={selectedStudent.name}
                  className="w-24 h-24 rounded-full mb-3 shadow-md"
                />
                <p className="text-gray-500 text-sm">{selectedStudent.email}</p>
                <span
                  className={`mt-2 px-3 py-1 text-xs rounded-full ${
                    selectedStudent.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedStudent.status}
                </span>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Block User
                </button>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Enrolled Courses</h3>
                {selectedStudent.courses.map((course, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span>{course.title}</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payments */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Payments</h3>
                <p>Total Paid: {selectedStudent.payments.total}</p>
                <p>Last Payment: {selectedStudent.payments.lastPayment}</p>
              </div>

              {/* Activity */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {selectedStudent.activity.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;

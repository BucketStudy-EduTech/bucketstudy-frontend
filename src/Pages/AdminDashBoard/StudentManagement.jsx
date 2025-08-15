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
    id: 1,
    name: "Shreya Jadhav",
    email: "Shreyajadhav@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=5",
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

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Close the slide-over panel
  const handleClose = () => setSelectedStudent(null);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen text-gray-950">
      <h1 className="text-2xl font-bold mb-6">Student Management</h1>

      {/* Responsive Layout for Students */}

      
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

      {/* Mobile View (hidden on larger screens) */}
      <div className="lg:hidden">
        <div className="grid gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white p-4 rounded-lg shadow-xl cursor-pointer"
              onClick={() => setSelectedStudent(student)}
            >
              {/* Student and Email */}
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

              {/* Status and Progress */}
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

      {/* Slide-over Student Details (Modal) */}
      {selectedStudent && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white w-full sm:max-w-md h-auto max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b">
              <button
                className="text-gray-500 hover:text-gray-800 text-2xl"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>

            {/* Profile */}
            <div className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={selectedStudent.avatar}
                  alt={selectedStudent.name}
                  className="w-24 h-24 rounded-full mb-3"
                />
                <h2 className="text-xl font-semibold">{selectedStudent.name}</h2>
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

              {/* Enrolled Courses */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Enrolled Courses</h3>
                {selectedStudent.courses.map((course, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span>{course.title}</span>
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
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Payments</h3>
                <p>Total Paid: {selectedStudent.payments.total}</p>
                <p>Last Payment: {selectedStudent.payments.lastPayment}</p>
              </div>

              {/* Activity Log */}
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

export default App;

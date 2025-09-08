
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount"
  },
  {
    id: 2,
    name: "OverView",
    path: "/dashboard/Admin-overview",
    type: "ADMIN",
    icon: "VscDashboard"
  },
  {
    id: 3,
    name: "Courses",
    path: "/dashboard/courses",
    type: "STUDENT",
    icon: "VscLibrary"
    
  },
  {
    id: 4,
    name: "My Courses",
    path: "/dashboard/enrolled-courses",
    icon: "VscBook",
    type: "STUDENT", // Shown only for student accounts
  },
   {
    id: 5,
    name: "Admin Analytics",
    path: "/dashboard/analytical",
    icon: "VscCircuitBoard",
    type: "ADMIN", // Shown only for Admin accounts
  },
  {
    id: 6,
    name: "Student Management",
    path: "/dashboard/student-management",
    icon: "VscBroadcast",
    type: "ADMIN", // Shown only for Admin accounts
  },
    {
    id: 7,
    name: "Course Management",
    path: "/dashboard/course-management",
    icon: "VscBook",
    type: "ADMIN", // Shown only for Admin accounts
  },

 
  
  
];
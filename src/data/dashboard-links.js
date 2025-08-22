
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
    type: "Admin",
    icon: "VscDashboard"
  },
  {
    id: 3,
    name: "Courses",
    path: "/dashboard/courses",
    type: "Student",
    icon: "VscLibrary"
    
  },
  {
    id: 4,
    name: "My Courses",
    path: "/dashboard/enrolled-courses",
    icon: "VscBook",
    type: "Student", // Shown only for student accounts
  },
   {
    id: 5,
    name: "Admin Analytics",
    path: "/dashboard/analytical",
    icon: "VscCircuitBoard",
    type: "Admin", // Shown only for Admin accounts
  },
  {
    id: 6,
    name: "Student Management",
    path: "/dashboard/student-management",
    icon: "VscBroadcast",
    type: "Admin", // Shown only for Admin accounts
  },
    {
    id: 7,
    name: "Course Management",
    path: "/dashboard/course-management",
    icon: "VscBook",
    type: "Admin", // Shown only for Admin accounts
  },

 
  
  
];
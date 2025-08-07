
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount"
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: "Instructor",
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
  
  
];
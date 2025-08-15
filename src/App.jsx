import { useLocation } from "react-router-dom";
import Home from './Pages/Home/index';
import Nav from './Pages/Nav/index';
import About from './Pages/About/index';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound/index';
import Careers from './Pages/Careers';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import InternCom from './Pages/InternshipCom/InternCom';
import Challenges from './Pages/Challange/challendeCom';
import Login from './Pages/LoginSignup/Login/Login';
import Profile from './Pages/Profile/index';
import Signup from './Pages/LoginSignup/Signup/Signup';
import DashboardLayout from './components/DashboardLayout';
import EnrolledCourses from './Pages/StudentDashboard/EnrolledCourses';
import Settings from './Pages/StudentDashboard/Settings';
import CourseSection from './Pages/StudentDashboard/CoursesReg/CourseSection';
import StudentManagement from './Pages/AdminDashBoard/StudentManagement';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");


  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Notfound />} /> 
        <Route path="/career" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/internships" element={<InternCom />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 

        {/* Standalone course routes */}
        

        {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />} />
          <Route path="/dashboard/my-profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          <Route path="/dashboard/*" element={<CourseSection />} />
          <Route path="/dashboard/student-management" element={<StudentManagement/>} />

          
        </Route>

      </Routes>

      
      

      {/* Footer */}
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;

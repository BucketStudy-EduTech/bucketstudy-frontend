//------------ Importing components and routes ------------

import Home  from './Pages/Home/index';
import Nav  from './Pages/Nav/index';
import About  from './Pages/About/index';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound/index';
import Careers from './Pages/Careers';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import InternCom from './Pages/InternshipCom/InternCom';
import Challenges from './Pages/Challange/challendeCom';
import Login from './Pages/LoginSignup/Login/Login';
import Profile from './Pages/Profile/index';
// import Signup from './Pages/LoginSignup/Signup/Signup'


function App() {
  return (
    <div className="App">
         < Nav />
          {/*------------ Applying Routing ------------  */}
          <Routes> 
          <Route path ="/" element={ < Home />}/>
          <Route path ="/about" element={ < About />}/> 
          <Route path="*" element={ < Notfound />}/> 
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/internships" element={<InternCom />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/Signup" element={<Signup />} /> */}
          <Route path="/profile" element={<Profile />} />
         </Routes>
         
         {/*------------ Footer Component ------------  */}
         <Footer />
    </div>
  );
}

export default App;


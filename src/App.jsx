//------------ Importing components and routes ------------

import Home  from './Pages/Home/index';
import Nav  from './Pages/Nav/index';
import About  from './Pages/About/index';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound/index';
import Careers from './Pages/Careers';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import InternCom from './InternshipCom/InternCom';

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
         </Routes>
         
         {/*------------ Footer Component ------------  */}
         <Footer />
    </div>
  );
}

export default App;


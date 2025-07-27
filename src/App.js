//------------ Importing components and routes ------------

import Home  from './Pages/Home';
import Nav  from './Pages/Nav';
import About  from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound';
import Careers from './Pages/Careers';
import ContactUs from './Pages/ContactUs';
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
         </Routes>
    </div>
  );
}

export default App;


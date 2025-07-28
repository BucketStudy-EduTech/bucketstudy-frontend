import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InternshipSection from "./components/InternshipSection";
import InternshipPlan from "./components/InternshipPlan";
import AvailablePrograms from "./components/AvailablePrograms";
import FAQ from "./components/FAQ";
import JoinUsSection from "./components/JoinUsSection";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <InternshipSection />
        <InternshipPlan />
        <AvailablePrograms />
        <FAQ />
        <JoinUsSection />
     
        <WhyChooseUs/>
       
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
import React from "react";
import InternshipCard from "./InternShipCard";
import "./AvailablePrograms.css";

function AvailablePrograms() {
  return (
    <section className="available-programs">
     
      <div className="card-grid">
        <InternshipCard title="Duration: 4 Weeks" img="/src/assets/waa.jpg"/>
        <InternshipCard title="Perfect For: Beginners" img="/src/assets/be.jpg" />
        <InternshipCard title="Certificate Provided" img="/src/assets/ba.jpg" />
      </div>
    </section>
  );
}

export default AvailablePrograms;
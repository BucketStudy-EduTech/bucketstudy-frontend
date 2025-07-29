import React from 'react'
import InternshipSection from './InternshipSection';    
import InternshipPlan from './InternshipPlan';
import AvailablePrograms from './AvailablePrograms';
import FAQ from './FAQ';
import JoinUsSection from './JoinUsSection';
import WhyChooseUs from './WhyChooseUs';

function InternCom() {
  return (
    <div>
                 <InternshipSection />
                <InternshipPlan />
                <AvailablePrograms />
                <FAQ />
                <JoinUsSection />
             
                <WhyChooseUs/>
    </div>
  )
}

export default InternCom
import React from 'react'
import Challenge from './challenge/Challenge.jsx';
import ChallengeCard from './ChallengeCard/ChallengeCard.jsx';
import ChallangeResult from './ChallengeResult/ChallengeResult.jsx';
import WhyChooseUs from '../InternshipCom/WhyChooseUs.jsx';

function Main() {
  return (
    
       <div className='main'>
         <Challenge />
        <ChallengeCard />
        <ChallangeResult />
        <WhyChooseUs />
       </div>
    
  )
}

export default Main
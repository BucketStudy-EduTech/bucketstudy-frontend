
// import React from 'react';
// import './ChallengeResult.css';
// import srv from '../../assets/SRVLogo.png'
// import third from '../../assets/third_logo.jpg'
// import CodeCraftLogo from '../../assets/CodeCrafterLogo.png'


// const ChallengeResult = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Challenge Results</h1>

//       <div className="winner-box">
//         <h2>TEAM CPU</h2>
//         <p className="winner-subtitle">Winner - Completed the BucketStudy Hackathon 2025</p>
//         <p className="members">👤 Alice Johnson, Bob Smith</p>
//       </div>

//       <div className="team-cards">
//         <div className="card second-place">
//         <img src={srv} alt="img"/>
//           <h3> 2<sup>nd</sup></h3>
//           <p className="team-name">Team Delta</p>
//           <p className="member">Eve Brown</p>
//           <p className="member">John Doe</p>
//           <p className="place">6nd Place</p>
//         </div>

//         <div className="card third-place">
//         <img src={third} alt="img"/>
//           <h3>3<sup>rd</sup></h3>
//           <p className="team-name">Team Beta</p>
//           <p className="member">Carol White</p>
//           <p className="member">Dave Lee</p>
//         </div>

//         <div className="card fourth-place">
//         <img src={CodeCraftLogo} alt="img"/>
//           <h3>4<sup>th</sup></h3>
//           <p className="team-name">Frank Black</p>
//           <p className="member">Grace Kim</p>
//           <p className="member">Frank Black</p>
//           <p className="member">Grace Kim</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChallengeResult;

import React from 'react';
import './ChallengeResult.css';
import srv from '../../assets/SRVLogo.png';
import third from '../../assets/third_logo.jpg';
import CodeCraftLogo from '../../assets/CodeCrafterLogo.png';

const ChallengeResult = () => {
  return (
    <div className="result-container">
      <h1 className="result-title">🏆 Challenge Results</h1>

      <div className="winner-highlight">
        <h2>🥇 TEAM CPU</h2>
        <p className="winner-subtitle">Winner of BucketStudy Hackathon 2025</p>
        <p className="members">👤 Alice Johnson, Bob Smith</p>
      </div>

      <div className="team-cards">
        <div className="team-card second">
          <img src={srv} alt="Second Place" />
          <h3>🥈 2<sup>nd</sup> Place</h3>
          <p className="team-name">Team Delta</p>
          <p className="member">Eve Brown</p>
          <p className="member">John Doe</p>
        </div>

        <div className="team-card third">
          <img src={third} alt="Third Place" />
          <h3>🥉 3<sup>rd</sup> Place</h3>
          <p className="team-name">Team Beta</p>
          <p className="member">Carol White</p>
          <p className="member">Dave Lee</p>
        </div>

        <div className="team-card fourth">
          <img src={CodeCraftLogo} alt="Fourth Place" />
          <h3>🏅 4<sup>th</sup> Place</h3>
          <p className="team-name">CodeCrafters</p>
          <p className="member">Grace Kim</p>
          <p className="member">Frank Black</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeResult;

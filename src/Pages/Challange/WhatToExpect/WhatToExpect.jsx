import React from 'react';
import './WhatToExpect.css'; // assuming you're using external CSS

const cardsData = [
  {
    icon: '📅',
    title: 'Weekly Challenges',
    description: 'Participate in new challenges on a weekly basis',
    color: 'yellow',
  },
  {
    icon: '📊',
    title: 'Leaderboards',
    description: 'Track your progress against other participants',
    color: 'blue',
  },
  {
    icon: '🏆',
    title: 'Prizes & Awards',
    description: 'Earn awards and gain recognition',
    color: 'purple',
  },
];

const WhatToExpect = () => {
  return (
    <section className="expectation-section">
      <h2 className="section-title">What to Expect</h2>
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <div className={`card ${card.color}`} key={index}>
            <h3>{card.icon} {card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatToExpect;

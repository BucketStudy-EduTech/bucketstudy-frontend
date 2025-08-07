import React, { useState } from 'react';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FiMessageSquare } from 'react-icons/fi';
import { LuHeart } from 'react-icons/lu';
import { RiGroupLine } from 'react-icons/ri';

import { positions } from '../data/jobPositions';
import { filters } from '../data/filters';
import JobCard from '../components/JobCard';
import PerkItem from '../components/PerkItem';
import { PiGraduationCapDuotone } from "react-icons/pi";


export default function Careers() {
  const [filter, setFilter] = useState('All Positions');

  // Filter the job positions according to the category
  const filteredPositions = filter === 'All Positions'
    ? positions
    : positions.filter(pos => pos.category === filter);

  return (
    // Start of the page
    <div className="font-sans min-h-screen bg-gray-100">
      <section className="text-center py-16 px-4">
        <h1 className="lg:text-5xl font-extrabold text-gray-900 mb-2 text-3xl">Join Our Mission</h1>
        <p className="text-xl text-gray-700 italic">
          Help us revolutionize skill-based learning and shape the future of education
        </p>
      </section>

      <div className='w-full bg-white'>
        <div className="container mx-auto px-2 py-12 flex flex-col lg:flex-row gap-12 max-w-11/12">
        <section className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why BucketStudy ?</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 ">
            BucketStudy is a fast-growing edtech startup focused on making skill-based learning accessible, practical, 
            and enjoyable for students across India. We're building a platform that bridges the gap between academic 
            education and industry requirements.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our team consists of educators, developers, and innovators who are passionate about 
            transforming how students learn and prepare for their careers. If you're excited about 
            making a real impact in education while working in a dynamic startup environment, we'd love to have you on board!
          </p>
        </section>

          {/* Perks and Benefits imported from PerkItems.jsx */}
        <section className="lg:w-2xl lg:h-[17rem] bg-gray-200 rounded-tl-4xl rounded-br-4xl shadow-2xl p-5 mt-3  hover:scale-105 transition-transform duration-300 border-2 border-gray-400 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PerkItem icon={HiOutlineRocketLaunch} title="Growth-Focused" description="Rapid learning and career advancement opportunities" />
            <PerkItem icon={RiGroupLine} title="Collaborative Culture" description="Work with passionate educators and tech enthusiasts" />
            <PerkItem icon={FiMessageSquare} title="Open Communication" description="Direct access to founders and leadership team" />
            <PerkItem icon={LuHeart} title="Impact-Driven" description="Help shape the future of education in India" />
          </div>
        </section>
      </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-11/12">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Current Openings</h2>

        {/* Tab for the job positions  */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-md bg-gray-300 p-1">
              {filters.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${
                      filter === tab
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-600 hover:text-black'
                    }`}
                >
                  {tab}
                </button>
              ))}
          </div>
        </div>

              {/* Imported the JobCard from jobcard components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPositions.map((pos, idx) => (
              <JobCard key={idx} {...pos} />
            ))}
          </div>
        </div>
      </section>

      {/* Message from the founder section */}
      <div className="bg-gray-200 p-8 rounded-lg max-w-11/12 mx-auto my-12 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-6 sm:space-y-0 shadow-2xl">
        <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
          {/* Graduation cap icon container */}
          <div className="bg-gray-300 p-4 lg:h-35 lg:rounded-4xl w-24 flex items-center justify-center mx-auto sm:mx-0 rounded-full shadow-lg ">
            <PiGraduationCapDuotone className="text-purple-600 w-16 h-24" />
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-xl">
            A Message from Our Founder
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "At BucketStudy, we're not just building a platform; we're nurturing a community of lifelong learners. We believe in giving opportunities to passionate individuals who want to make a difference. If you're looking for a place where your ideas matter and your growth is prioritized, you've found your tribe."
          </p>
          <p className="mt-4 text-gray-600 font-bold">- Founder, BucketStudy</p>
        </div>
      </div>


      {/* Unofficial Perks Section */}
      <div className="bg-gray-200 rounded-xl py-10 px-4  max-w-11/12 mx-auto my-12 mt-24 shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          The Unofficial Perks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 text-center items-start justify-center">
          {/* Perk 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Unlimited Virtual High-Fives
            </h3>
            <p className="text-gray-600">
              For those days when you crush your tasks and need digital validation.
            </p>
          </div>

          {/* Perk 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bragging Rights
            </h3>
            <p className="text-gray-600">
              Tell your friends you're helping revolutionize education (it sounds impressive at parties).
            </p>
          </div>

          {/* Perk 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Meme Appreciation Channel
            </h3>
            <p className="text-gray-600">
              Where your humor is valued as much as your professional skills.
            </p>
          </div>
        </div>
      </div>

        
    </div>
  );
}


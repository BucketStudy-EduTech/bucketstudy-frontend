import React from 'react';
import { IoLocationOutline } from "react-icons/io5";


//Card component for the job positions
const JobCard = ({ title, type, location, category, description, skills, perks }) => {
  const categoryColors = {
    Tech: 'bg-indigo-500 text-gray-50',
    Marketing: 'bg-gray-200 text-green-800',
    Education: 'bg-purple-200 text-purple-800',
  };

  return (
    <div className=" rounded-lg shadow-md p-6 flex flex-col h-full  border-1 border-gray-500  hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{type}</p>
        </div>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            categoryColors[category] || 'bg-gray-400 text-gray-800'
          }`}
        >
          {category}
        </span>
      </div>

      <div className="flex items-center text-gray-500 text-sm mb-6">
        <IoLocationOutline className="mr-2 text-base" />
        <span>{location}</span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Skills & Requirements:</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div> 
      

      <div className="mb-16">
        <h4 className="font-semibold text-gray-800 mb-2">What You'll Get:</h4>
        <p className="text-gray-700 text-sm">
            {perks.join(', ')}.
        </p>
      </div>

      <button
        onClick={() => alert(`Applying for ${title}`)}
        className="mt-auto w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-semibold"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;

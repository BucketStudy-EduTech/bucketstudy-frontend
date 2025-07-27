import React from 'react';


const PerkItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-indigo-600 bg-gray-200 rounded-full p-2">
      <Icon className="h-8 w-10 rounded-full border-2 p-1 border-gray-300" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default PerkItem;

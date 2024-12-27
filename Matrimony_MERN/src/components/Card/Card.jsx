import React from 'react';

const Card = ({ title, icon, description }) => {
  return (
    <div className="max-w-sm font-poppins group rounded overflow-hidden shadow-lg bg-white hover:drop-shadow-2xl p-6 m-4">
      <div className="flex items-center justify-center mb-4">
        {icon && <div className="text-6xl text-blue-500 group-hover:stroke-white">{icon}</div>}
      </div>
      <div className="font-bold text-xl mb-2 text-center group-hover:stroke-white">{title}</div>
      <p className="text-gray-700 text-base text-center group-hover:stroke-white">{description}</p>
    </div>
  );
};

export default Card;

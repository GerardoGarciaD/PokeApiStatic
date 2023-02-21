import React from 'react';

const StatsSize = ({ title, value, mainType }) => {
  return (
    <p className=" capitalize font-semibold" style={{ color: mainType.color }}>
      {title}: <span className="text-gray-600 "> {value}</span>
    </p>
  );
};

export default StatsSize;

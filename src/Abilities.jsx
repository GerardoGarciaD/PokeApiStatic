import React from 'react';

const Abilities = ({ abilities }) => {
  return (
    <div className="px-6 pb-4 grid grid-cols-2">
      {abilities.map((ability) => (
        <p
          key={ability.name}
          className="text-center font-semibold capitalize text-gray-600"
        >
          {ability.name}
        </p>
      ))}
    </div>
  );
};

export default Abilities;

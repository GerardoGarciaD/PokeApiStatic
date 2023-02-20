import React from 'react';

const PokemonPage = () => {
  return (
    <div className="flex items-center p-10 ">
      <ul className="w-full">
        <li className="flex justify-between items-center bg-slate-200 px-3 py-2 m-2 rounded-md shadow-md hover:cursor-pointer hover:shadow-lg ">
          <p>Bulbasaur</p>
          <img className="h-7" src="pokeball.png" alt="pokeball" />
        </li>
      </ul>
    </div>
  );
};

export default PokemonPage;

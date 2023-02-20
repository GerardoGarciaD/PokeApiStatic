import React from 'react';

const SidebarPokemonImage = () => {
  return (
    <div className="p-10 flex flex-col justify-evenly items-center ">
      <img className="max-w-fit" src="pokeapi.png" alt="Logo" />
      <img
        className="max-w-fit"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="PokemonImage"
      />
    </div>
  );
};

export default SidebarPokemonImage;

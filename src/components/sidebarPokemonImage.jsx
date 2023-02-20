import React from 'react';
import { useSelector } from 'react-redux';

const SidebarPokemonImage = () => {
  const pokemonSidebar = useSelector((state) => state.pokemons.pokemonSidebar);
  return (
    <div className="p-10 flex flex-col justify-evenly items-center ">
      <img className="max-w-fit" src="pokeapi.png" alt="Logo" />
      {pokemonSidebar && (
        <img
          className="max-w-fit"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonSidebar}.svg`}
          alt="PokemonImage"
        />
      )}
    </div>
  );
};

export default SidebarPokemonImage;

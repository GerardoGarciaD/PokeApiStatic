import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonSidebar } from '../features/pokeAPI/pokemonSlice';
import { getPokemonsPagination } from '../utilities/getPokemons';

const SidebarPokemon = () => {
  const { pokemons, offset } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const handleClick = (pokemonName, pokemonUrl) => {
    const pokemonId = pokemonUrl.split('/')[6];
    dispatch(setPokemonSidebar(pokemonId));
  };

  const handlePrevPage = () => {
    dispatch(getPokemonsPagination(offset - 20));
  };

  const handleNextPage = () => {
    dispatch(getPokemonsPagination(offset + 20));
  };
  return (
    <div className="flex items-center p-10   ">
      <ul className="w-full max-h-screen ">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => handleClick(pokemon.name, pokemon.url)}
            className="flex justify-between items-center bg-slate-200 px-3 py-2 m-2 rounded-md shadow-md hover:cursor-pointer hover:shadow-lg "
          >
            <p className="capitalize">{pokemon.name}</p>
            <img className="h-7" src="pokeball.png" alt="pokeball" />
          </li>
        ))}
        <li className="flex justify-between items-center mt-4 mx-2">
          <button
            disabled={!offset}
            onClick={handlePrevPage}
            className="bg-slate-200 p-2 rounded-md shadow-md  hover:cursor-pointer hover:shadow-lg"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-slate-200 p-2 rounded-md shadow-md  hover:cursor-pointer hover:shadow-lg "
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarPokemon;

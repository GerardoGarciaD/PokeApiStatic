import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPokemon } from '../features/pokeAPI/pokemonSlice';
import { getFullPokemon, getPokemonsPagination } from '../utils/getPokemons';
import { useNavigate } from 'react-router-dom';

const SidebarPokemon = () => {
  const {
    pokemons,
    offset,
    selectedPokemon: { name },
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event, pokemonName, pokemonUrl) => {
    if (event.detail === 2) {
      navigate(`/pokemon/${pokemonName}`);
    }
    const pokemonId = pokemonUrl.split('/')[6];
    dispatch(getFullPokemon(pokemonName));
    dispatch(setSelectedPokemon({ id: pokemonId, name: pokemonName }));
  };

  const handlePrevPage = () => {
    dispatch(getPokemonsPagination(offset - 20));
  };

  const handleNextPage = () => {
    dispatch(getPokemonsPagination(offset + 20));
  };
  return (
    <div className="flex items-center p-10">
      <ul className="w-full max-h-[80vh] overflow-y-auto scrollbar">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={(event) => handleClick(event, pokemon.name, pokemon.url)}
            className={`flex justify-between items-center bg-slate-200 px-3 py-2 m-2 rounded-md shadow-md hover:cursor-pointer hover:shadow-lg ${
              name === pokemon.name
                ? 'shadow-[#3466AF] hover:shadow-[#3466AF]'
                : ''
            }`}
          >
            <p className="capitalize">{pokemon.name}</p>
            <img className="h-7" src="pokeball.png" alt="pokeball" />
          </li>
        ))}

        <li className="flex justify-between items-center my-4 mx-2">
          <button
            disabled={!offset}
            onClick={handlePrevPage}
            className={`bg-slate-200 p-2 rounded-md shadow-md ${
              offset && 'hover:cursor-pointer hover:shadow-xl'
            } `}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-slate-200 p-2 rounded-md shadow-md  hover:cursor-pointer hover:shadow-xl"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarPokemon;

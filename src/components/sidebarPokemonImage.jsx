import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SidebarPokemonImage = () => {
  const { id } = useSelector((state) => state.pokemons.selectedPokemon);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="p-10 flex flex-col justify-evenly items-center ">
      <img
        onClick={handleClick}
        className="hover:cursor-pointer"
        src="pokeapi.png"
        alt="Logo"
      />
      {id && (
        <img
          style={{ width: '40%' }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
          alt="PokemonImage"
        />
      )}
    </div>
  );
};

export default SidebarPokemonImage;

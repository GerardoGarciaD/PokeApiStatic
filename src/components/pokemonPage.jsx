import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/pokemonCard.module.css';
import { typeColors } from '../constants/pokemon';
import PokemonStats from './PokemonStats';
import StatsSize from './StatsSize';
import Abilities from './Abilities';

const PokemonPage = () => {
  const {
    selectedPokemon: { id },
    pokemonInfo: { stats, types, weight, height, abilities },
  } = useSelector((state) => state.pokemons);
  const { name: pokemonName } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate('/');
    return;
  }

  const typePokemonColors = types.map((type) => ({
    name: type.name,
    color: typeColors[type.name],
  }));

  const [mainType] = typePokemonColors;

  return (
    <div className="flex flex-col justify-center">
      <Link
        to="/"
        className="self-center max-w-xs bg-slate-200 p-2 rounded-md shadow-md hover:cursor-pointer hover:shadow-lg mb-10"
      >
        Go Back
      </Link>
      <div className="flex items-center justify-center">
        <div
          style={{
            background: `radial-gradient(circle at 50% 0%, ${mainType.color} 36%, #ffffff 36%)`,
            width: '45%',
            maxWidth: '400px',
          }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <div className="flex flex-col items-center p-3">
            <p className="self-end px-4 py-2  bg-white rounded-full font-semibold">
              # {id}
            </p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              style={{ width: '80%', maxHeight: '250px' }}
              alt={pokemonName}
            />
            <p className="font-bold text-xl mb-2 capitalize mt-4 text-gray-600">
              {pokemonName}
            </p>
          </div>

          <div className="flex justify-center px-6 pt-4 pb-2">
            {typePokemonColors.map((pokemonType) => (
              <span
                key={pokemonType.name}
                style={{ backgroundColor: pokemonType.color }}
                className="capitalize inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
              >
                {pokemonType.name}
              </span>
            ))}
          </div>

          <PokemonStats stats={stats} mainType={mainType}></PokemonStats>

          <div className="px-6 pb-3 flex justify-between">
            <StatsSize
              title="weight"
              value={weight}
              mainType={mainType}
            ></StatsSize>

            <StatsSize
              title="weight"
              value={height}
              mainType={mainType}
            ></StatsSize>
          </div>

          <p
            className="px-6 pb-4 text-center font-semibold"
            style={{ color: mainType.color }}
          >
            Abilities
          </p>
          <Abilities abilities={abilities}></Abilities>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;

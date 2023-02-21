import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/pokemonCard.module.css';

const typeColors = {
  rock: '#b69e31',
  ghost: '#70559b',
  steel: '#b7b9d0',
  water: '#6493eb',
  grass: '#74cb48',
  psychic: '#fb5584',
  ice: '#9ad6df',
  dark: '#75574c',
  fairy: '#e69eac',
  normal: '#aaa67f',
  fighting: '#c12239',
  flying: '#a891ec',
  poison: '#a43e9e',
  ground: '#dec16b',
  bug: '#a7b723',
  fire: '#f57d31',
  electric: '#f9cf30',
  dragon: '#7037ff',
};

const statsNames = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  specialattack: 'SATK',
  specialdefense: 'SDEF',
  speed: 'SPD',
};

const PokemonPage = () => {
  const {
    selectedPokemon: { id },
    pokemonInfo: { stats, types },
  } = useSelector((state) => state.pokemons);
  const { name: pokemonName } = useParams();
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
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={pokemonName}
            />
            <p className="font-bold text-xl mb-2 capitalize mt-4">
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
          <div className="p-6">
            {stats.map((stat) => (
              <div key={stat.name} className="stat-row flex justify-center ">
                <div
                  className={styles['stat-desc']}
                  style={{ color: mainType.color }}
                >
                  {statsNames[stat.name]}
                </div>
                <p className={styles['stat-number']}>{stat.base_stat}</p>
                <div className={styles['stat-bar']}>
                  <div className={styles['bar-outer']}>
                    <p
                      className={styles['bar-inner']}
                      style={{
                        width: `${stat.base_stat}%`,
                        backgroundColor: mainType.color,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;

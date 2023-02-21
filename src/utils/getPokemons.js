import axios from 'axios';
import { getPokemons, getPokemon } from '../features/pokeAPI/pokemonSlice';

export const getPokemonsPagination =
  (offset = 0) =>
  async (dispatch) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    );
    dispatch(getPokemons({ pokemons: response.data.results, offset }));
  };

export const getFullPokemon = (pokemonName) => async (dispatch) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  dispatch(getPokemon(formatPokemon(data)));
};

const formatPokemon = (fullPokemon) => {
  const stats = fullPokemon.stats.map((stat) => {
    return {
      base_stat: stat.base_stat,
      name: stat.stat.name.split('-').join(''),
    };
  });
  const types = fullPokemon.types.map((type) => {
    return { name: type.type.name };
  });

  const abilities = fullPokemon.abilities.map((ability) => {
    return {
      name: ability.ability.name,
    };
  });
  const { weight, height } = fullPokemon;
  return { stats, types, weight, height, abilities };
};

import axios from 'axios';
import { getPokemons } from '../features/pokeAPI/pokemonSlice';

export const getPokemonsPagination =
  (offset = 0) =>
  async (dispatch) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    );
    dispatch(getPokemons({ pokemons: response.data.results, offset }));
  };

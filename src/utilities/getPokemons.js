import axios from 'axios';
import { getPokemons } from '../features/pokeAPI/pokemonSlice';

export const get151Pokemons = () => async (dispatch) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
  dispatch(getPokemons(response.data.results));
};

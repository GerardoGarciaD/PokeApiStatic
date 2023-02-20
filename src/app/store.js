import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokeAPI/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

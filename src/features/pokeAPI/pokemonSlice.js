import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPokemons: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      state.allPokemons.push(action.payload);
    },
  },
});

export const { getPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;

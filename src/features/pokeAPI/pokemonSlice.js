import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  offset: 0,
  pokemonInfo: {},
  pokemonSidebar: '',
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      const { pokemons, offset } = action.payload;
      state.pokemons = [];
      state.offset = offset;
      state.pokemons.push(...pokemons);
    },
    setPokemonSidebar: (state, action) => {
      state.pokemonSidebar = action.payload;
    },
  },
});

export const { getPokemons, setPokemonSidebar } = pokemonSlice.actions;
export default pokemonSlice.reducer;

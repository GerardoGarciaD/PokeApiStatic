import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  offset: 0,
  pokemonInfo: {},
  selectedPokemon: {
    id: '',
    name: '',
  },
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
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    getPokemon: (state, action) => {
      state.pokemonInfo = action.payload;
    },
  },
});

export const { getPokemons, setSelectedPokemon, getPokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;

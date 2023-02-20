import './App.css';
import SidebarPokemonImage from './components/sidebarPokemonImage';
import SidebarPokemon from './components/sidebarPokemon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get151Pokemons } from './utilities/getPokemons';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get151Pokemons());
  }, []);

  return (
    <div className=" mx-auto bg-slate-200">
      <div className="min-h-screen min-w-full grid grid-cols-2 gap-3 ">
        <SidebarPokemonImage></SidebarPokemonImage>
        <SidebarPokemon></SidebarPokemon>
      </div>
    </div>
  );
}

export default App;

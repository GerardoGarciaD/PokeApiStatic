import './App.css';
import SidebarPokemonImage from './components/sidebarPokemonImage';
import SidebarPokemon from './components/sidebarPokemon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsPagination } from './utilities/getPokemons';
import { Route, Routes } from 'react-router-dom';
import PokemonPage from './components/pokemonPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsPagination());
  }, []);

  return (
    <div className=" mx-auto bg-slate-200">
      <div className="min-h-screen min-w-full grid grid-cols-2 gap-3 ">
        <SidebarPokemonImage></SidebarPokemonImage>

        <Routes>
          <Route path="/" element={<SidebarPokemon />}></Route>
          <Route path="/pokemon/:name" element={<PokemonPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

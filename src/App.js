import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsPagination } from './utils/getPokemons';
import { Route, Routes } from 'react-router-dom';
import PokemonPage from './components/PokemonPage';
import SidebarPokemonImage from './components/SidebarPokemonImage';
import SidebarPokemon from './components/SidebarPokemon';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsPagination());
  }, [dispatch]);

  return (
    <div className="bg-slate-200">
      <div className="min-h-screen min-w-full  md:grid md:grid-cols-2 md:gap-3 ">
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

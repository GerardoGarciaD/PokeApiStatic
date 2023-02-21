import './App.css';
import SidebarPokemonImage from './components/SidebarPokemonImage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsPagination } from './utils/getPokemons';
import { Route, Routes } from 'react-router-dom';
import SidebarPokemon from './components/SidebarPokemon';
import PokemonPage from './components/PokemonPage';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsPagination());
  }, []);

  return (
    <div className="bg-slate-200">
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

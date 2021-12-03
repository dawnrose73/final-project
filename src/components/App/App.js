import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContentLayout from '../ContentLayout/ContentLayout';
import Header from '../Header/Header';
import PokemonList from '../PokemonList/PokemonList';
import PokemonPage from '../PokemonPage/PokemonPage';
import NotFound from '../NotFound/NotFound';
import './App.scss';

function App() {
  return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ContentLayout />}>
            <Route index element={<PokemonList />} />
            
            <Route path="pokemons/:pokemonId" element={<PokemonPage />} />
           
            {/* <Route path="caught" element={<caughtPokemons />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;

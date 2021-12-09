import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Content from '../Content/Content';
import AllPokemonsPage from '../../containers/AllPokemonsPage';
import CaughtPokemonsPage from '../../containers/CaughtPokemonsPage';
import PokemonPage from '../../containers/PokemonPage';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import NavState from '../../context/NavState';
import AppState from '../../context/AppState';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header>
        <Logo />
        <NavState>
          <Navigation />
          <BurgerMenu />
        </NavState>
      </Header>
      <AppState>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<AllPokemonsPage />} />
            <Route path="pokemons/:pokemonId" element={<PokemonPage />} />
            <Route path="caught" element={<CaughtPokemonsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppState>
      <Footer />
    </div>
  );
}

export default App;

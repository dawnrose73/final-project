import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Content from '../components/Content/Content';
import AllPokemonsPage from './AllPokemonsPage';
import CaughtPokemonsPage from './CaughtPokemonsPage';
import PokemonPage from './PokemonPage';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
import NavState from './NavState';
import AppState from './AppState';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

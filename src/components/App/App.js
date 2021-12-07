import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Content from '../Content/Content';
import PokemonList from '../PokemonList/PokemonList';
import PokemonPage from '../PokemonPage/PokemonPage';
import CaughtPokemons from '../CaughtPokemons/CaughtPokemons';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import NavState from '../../context/NavState';

const style = {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
}

function App() {
  const [pokemons, setPokemons] = useState([]); 
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [fetching, setFetching] = useState(true);
  // const [totalCount, setTotalCount] = useState(0);

  let navigate = useNavigate();

  const clickHandler = (id) => {
    return function(e) {
      if (e.target.classList.contains("card__catchBtn")) {
        const caughtDate = new Date();
        const updatedList = pokemons.map((pokemon) => (pokemon.id === id) ? { ...pokemon, caught: caughtDate } : pokemon);
        setPokemons(updatedList);
      } else {
        navigate(`pokemons/${id}`);
      }
    }
  }

  useEffect(() => {
    if (fetching) {
        getData(nextPage);
    }
  }, [fetching]);

  useEffect(() => {
    if (document.body.getBoundingClientRect().height <= window.innerHeight) {
        getData(nextPage);
    }
  }, [fetching]);

  function getData(url) {
    if (url) {
      axios.get(url)
      .then(response => {
          const newPokemons = response.data.results.map((pokemon, index) => {
            return { ...pokemon, id: pokemons.length + index + 1}
          })
          setPokemons([...pokemons, ...newPokemons]); 
          setNextPage(response.data.next);
          // setTotalCount(response.data.count); 
      })
      .finally(() => {
        setFetching(false);   
      });
    }
  }

  useEffect(() => {
      document.addEventListener('scroll', scrollHandler);
      return function() {
          document.removeEventListener('scroll', scrollHandler);
      }
  }, []);

  const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
          setFetching(true);
      }
  }

  return (
      <div className="app" style={style}>
        <Header>
          <Logo />
          <NavState>
            <Navigation />
            <BurgerMenu />
          </NavState>
        </Header>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<PokemonList pokemons={pokemons} clickHandler={clickHandler}/>} />
            <Route path="pokemons/:pokemonId" element={<PokemonPage pokemons={pokemons} />} />
            <Route path="caught" element={<CaughtPokemons pokemons={pokemons} clickHandler={clickHandler}/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

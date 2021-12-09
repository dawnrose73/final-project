import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Context = createContext({
    pokemons: [],
    clickHandler: () => {},
    scrollHandler: () => {}
});
  
function AppState({ children }) {
    const mainPage = 'https://pokeapi.co/api/v2/pokemon/';
    const lastPage = 'https://pokeapi.co/api/v2/pokemon/?offset=880&limit=18';
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(mainPage);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
      if ((fetching && nextPage) || 
          (document.body.scrollHeight <= window.innerHeight && document.body.scrollTop === 0)) {  
          getData(nextPage);
      }
    }, [fetching]);

    function getData(url) {
        url = checkIfLastPage(url) ? lastPage : url;
        console.log(url);
        axios.get(url)
        .then(response => {
            const newPokemons = response.data.results.map((pokemon, index) => {
              return { ...pokemon, id: pokemons.length + index + 1}
            })
            setPokemons([...pokemons, ...newPokemons]); 
            (url === lastPage) ? setNextPage(null) : setNextPage(response.data.next);
        })
        .finally(() => {
          setFetching(false);   
        });
    }

    function checkIfLastPage(url) {
      if (url.length > mainPage.length) {
        const entries = url.substring(mainPage.length + 1).split('&').map(setting => setting.split('='));
        const settings = Object.fromEntries(entries);
        if (Number(settings.offset) === 880) {
          return true;
        }     
      }
      return false;
    }

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10 && 
            document.body.scrollHeight > window.innerHeight) {
          setFetching(true);
        }
    }

    let navigate = useNavigate();
    const clickHandler = (id) => {
      return function(e) {
        if (e.target.classList.contains("card__catchBtn")) {
          const catchDate = new Date();
          const updatedList = pokemons.map((pokemon) => 
            (pokemon.id === id) 
              ? { ...pokemon, caught: String(`${catchDate.getDate()}.${catchDate.getMonth() + 1}.${catchDate.getFullYear()}`) } 
              : pokemon);
          setPokemons(updatedList);
        } else {
          navigate(`pokemons/${id}`);
        }
      }
    }

    return (
        <Context.Provider value={{pokemons, clickHandler, scrollHandler}}>{children}</Context.Provider>
    );
};

export default AppState;
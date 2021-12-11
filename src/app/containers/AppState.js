import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Context = createContext({
    pokemons: [],
    clickHandler: () => {},
    scrollHandler: () => {},
    isEverythingOK: true,
});
  
function AppState({ children }) {
    const mainPage = 'https://pokeapi.co/api/v2/pokemon/';
    const lastPage = 'https://pokeapi.co/api/v2/pokemon/?offset=880&limit=18';
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(mainPage);
    const [fetching, setFetching] = useState(true);
    const [isEverythingOK, setIsEverythingOK] = useState(true);

    function getDataFromLocal(newPokemons) {
      const caughtPokemons = JSON.parse(localStorage.getItem('caughtPokemons'));
      const caughtPokemonsMap = new Map(caughtPokemons.map(item => [item.id, item.caught]));
      return newPokemons.map(pokemon => 
        (caughtPokemonsMap.get(pokemon.id)) ? 
          {...pokemon, caught: caughtPokemonsMap.get(pokemon.id)} :
          pokemon
      );
      }

    useEffect(() => {
      if ((fetching && nextPage) || 
          (document.body.scrollHeight <= window.innerHeight && document.body.scrollTop === 0)) {  
          getData(nextPage);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching]);

    function getData(url) {
        url = checkIfLastPage(url) ? lastPage : url;
        axios.get(url)
        .then(response => {
            let newPokemons = response.data.results.map((pokemon, index) => {
              return { ...pokemon, id: pokemons.length + index + 1}
            })
            newPokemons = getDataFromLocal(newPokemons);
            setPokemons([...pokemons, ...newPokemons]); 
            (url === lastPage) ? setNextPage(null) : setNextPage(response.data.next);
        })
        .catch(err => { 
          setIsEverythingOK(false); 
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
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && 
            document.body.scrollHeight > window.innerHeight) {
          setFetching(true);
        }
    }

    let navigate = useNavigate();
    const clickHandler = (id) => {
      return function(e) {
        if (e.target.classList.contains("card__catchBtn")) {
          const catchDate = new Date();
          let caughtPokemons = JSON.parse(localStorage.getItem('caughtPokemons'));

          const updatedList = pokemons.map(pokemon => {
            if (pokemon.id === id) {
              if (!caughtPokemons) {
                caughtPokemons = [];
              }
              localStorage.setItem('caughtPokemons', 
                JSON.stringify([ ...caughtPokemons, 
                {...pokemon, caught: String(`${catchDate.getDate()}.${catchDate.getMonth() + 1}.${catchDate.getFullYear()}`)}])
              )
              return { ...pokemon, caught: String(`${catchDate.getDate()}.${catchDate.getMonth() + 1}.${catchDate.getFullYear()}`) };
            }
            return pokemon;
          });
          setPokemons(updatedList);
        } else {
          navigate(`pokemons/${id}`);
        }
      }
    }

    return (
        <Context.Provider value={{pokemons, clickHandler, scrollHandler, isEverythingOK}}>{children}</Context.Provider>
    );
};

export default AppState;
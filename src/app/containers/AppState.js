import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Context = createContext({
    pokemons: [],
    clickHandler: () => {},
    scrollHandler: () => {},
    isEverythingOK: true,
    isThereLocalData: false,
});
  
function AppState({ children }) {
    const mainPage = 'https://pokeapi.co/api/v2/pokemon/';
    const lastPage = 'https://pokeapi.co/api/v2/pokemon/?offset=880&limit=18';

    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(mainPage);
    const [fetching, setFetching] = useState(true);
    const [isEverythingOK, setIsEverythingOK] = useState(true);
    const [isThereLocalStorage, setIsThereLocalStorage] = useState(true);
    const [isThereLocalData, setIsThereLocalData] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage) {
            setIsThereLocalStorage(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (getLocalData().length > 0) {
            setIsThereLocalData(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        if ((fetching && nextPage) || 
            (document.body.scrollHeight <= window.innerHeight && document.body.scrollTop === 0)) {  
            getPokemonsData(nextPage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching]);

    const getPokemonsData = (url) => {
        url = checkIfLastPage(url) ? lastPage : url;
        axios.get(url)
        .then(response => {
            const newPokemonsPack = response.data.results.map((pokemon, index) => ({ ...pokemon, id: pokemons.length + index + 1 }));
            isThereLocalStorage ?
                setPokemons([...pokemons, ...setCaughtFromLocalData(newPokemonsPack)]) :
                setPokemons([...pokemons, ...newPokemonsPack]); 
            (url === lastPage) ? setNextPage(null) : setNextPage(response.data.next);
        })
        .catch(err => { 
            setIsEverythingOK(false); 
        })
        .finally(() => {
            setFetching(false); 
        });
    }

    const checkIfLastPage = (url) => {
        if (url.length > mainPage.length) {
            const entries = url.substring(mainPage.length + 1).split('&').map(setting => setting.split('='));
            const settings = Object.fromEntries(entries);
            if (Number(settings.offset) === 880) {
                return true;
            }     
        }
        return false;
    }

    const getLocalData = () => {
        return  localStorage.getItem('caughtPokemons') ? 
                    JSON.parse(localStorage.getItem('caughtPokemons')) : 
                    [];
    }
    const createPokemonsMap = () => {
        return new Map(getLocalData().map(item => [item.id, item.caught]));
    }
    const setCaughtFromLocalData = (pokemons) => {
        const caughtPokemonsMap = createPokemonsMap();
        return pokemons.map(pokemon => 
            (caughtPokemonsMap.get(pokemon.id)) ? 
                {...pokemon, caught: caughtPokemonsMap.get(pokemon.id)} :
                pokemon);
    }

    const setNewLocalData = (pokemon, catchDate, caughtPokemons) => {
        localStorage.setItem('caughtPokemons', 
            JSON.stringify([ ...caughtPokemons, 
            {...pokemon, caught: String(`${catchDate.getDate()}.${catchDate.getMonth() + 1}.${catchDate.getFullYear()}`)}]));
    }

    const updateWhenCatch = (pokemons, catchDate, id) => {
        return pokemons.map(pokemon => {
            if (pokemon.id === id) {
                if (isThereLocalStorage) {
                    setNewLocalData(pokemon, catchDate, getLocalData());
                }
                return { ...pokemon, caught: String(`${catchDate.getDate()}.${catchDate.getMonth() + 1}.${catchDate.getFullYear()}`) };
            }
            return pokemon;
        });
    }

    const updateWhenRelease = (pokemons, id) => {
        if (isThereLocalStorage) {
            let indexToDelete = null;
            const localData = getLocalData();
            localData.map((localPokemon, index) => {
                if (localPokemon.id === id) {
                    indexToDelete = index;
                }
                return localPokemon;
            })
            localData.splice(indexToDelete, 1);
            console.log('removing local');
            localStorage.setItem('caughtPokemons', JSON.stringify(localData));
        }
        return pokemons.map(pokemon => {
            if (pokemon.id === id) {
                delete pokemon.caught;
            }
            return pokemon;
        });
    }

    const clickHandler = (id) => {
        return function(e) {
            if (e.target.classList.contains("card__catch-btn")) {
                const catchDate = new Date();
                const updatedList = updateWhenCatch(pokemons, catchDate, id);
                setPokemons(updatedList);
            } else if (e.target.classList.contains("card__release-btn")) {
                console.log('release')
                const updatedList = updateWhenRelease(pokemons, id);
                setPokemons(updatedList);
            } else {
                navigate(`pokemons/${id}`);
            }
        }
    }

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && 
            document.body.scrollHeight > window.innerHeight) {
            setFetching(true);
        }
    }

    return (
        <Context.Provider value={{pokemons, clickHandler, scrollHandler, isEverythingOK, isThereLocalData}}>{children}</Context.Provider>
    );
};

export default AppState;
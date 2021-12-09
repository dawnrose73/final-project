import React, { useContext, useEffect } from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import Loader from '../components/Loader/Loader';
import { Context } from '../context/AppState';

function AllPokemonsPage() {
  const { pokemons, scrollHandler} = useContext(Context);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function() {
        document.removeEventListener('scroll', scrollHandler);
    }
}, []);

  return (
    <>
      {pokemons.length ? 
        <PokemonList pokemons={pokemons}/> : 
        <Loader />
      }
    </>
  );
}
  
export default AllPokemonsPage;
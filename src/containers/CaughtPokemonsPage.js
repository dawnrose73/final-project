import React, { useContext, useEffect } from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import NothingHere from '../components/NothingHere/NothingHere';
import { Context } from '../context/AppState';

function CaughtPokemonsPage() {
  const { pokemons } = useContext(Context);
  const caughtPokemons = pokemons.filter(pokemon => pokemon.caught);
  return (
    <>
      {caughtPokemons.length ? 
        <PokemonList pokemons={caughtPokemons}/> : 
        <NothingHere />
      }
    </>
  );
}
  
export default CaughtPokemonsPage;
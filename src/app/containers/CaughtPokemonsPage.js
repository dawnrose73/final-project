import React, { useContext } from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import NothingHere from '../components/NothingHere/NothingHere';
import { Context } from './AppState';

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
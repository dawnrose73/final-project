import React from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import NothingHere from '../components/NothingHere/NothingHere';

function CaughtPokemonsPage() {
  const caughtPokemons = JSON.parse(localStorage.getItem('caughtPokemons')).sort((a, b) => a.id - b.id);
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
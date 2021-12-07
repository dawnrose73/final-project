import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import NothingHere from '../NothingHere/NothingHere';

function CaughtPokemons({pokemons, clickHandler}) {
  const caughtPokemons = pokemons.filter(pokemon => pokemon.caught);
  return (
    <div className="pokemonlist">
        <div className="container">
            <div className="pokemonlist__inner">
              {caughtPokemons.length ? caughtPokemons.map((pokemon, index) => 
                  <PokemonCard pokemon={pokemon} key={index} clickHandler={clickHandler}/>
              ) : <NothingHere />}
            </div>
        </div>
    </div>
  );
}
  
export default CaughtPokemons;
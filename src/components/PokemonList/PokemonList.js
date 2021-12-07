import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';
import './PokemonList.scss';

function PokemonList({pokemons, clickHandler}) {
  return (
    <div className="pokemonlist">
        <div className="container">
            <div className="pokemonlist__inner">
              
                {pokemons.length ? pokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} clickHandler={clickHandler}/>) : <Loader />}
             
            </div>
        </div>
    </div>
  );
}
  
export default PokemonList;
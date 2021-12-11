import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';
import './PokemonList.scss';

function PokemonList({ pokemons }) {
  return (
    <div className="pokemonlist">
        <div className="container">
            <div className="pokemonlist__inner">
                {pokemons.length ? pokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />) : <Loader />}
            </div>
        </div>
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
}

  
export default PokemonList;
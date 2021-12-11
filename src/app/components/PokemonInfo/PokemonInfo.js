import React from 'react';
import PropTypes from 'prop-types';
import './PokemonInfo.scss';

function PokemonInfo({pokemonId, name, abilities, types, weight, pokemons}) {
  return (
          <div className="pokemon__info">
            <div className="pokemon__id">id: {pokemonId}</div>
            <div className="pokemon__name">name: {name}</div>
            <div className="pokemon__abilities">abilities: {abilities.join(', ')}</div>
            <div className="pokemon__types">types: {types.join(', ')}</div>
            <div className="pokemon__weight">weight: {weight}</div>
            <div className="pokemon__caught">caught: {pokemons[pokemonId - 1].caught ? String(pokemons[pokemonId - 1].caught) : 'no'}</div>
          </div>
  );
}

PokemonInfo.propTypes = {
  pokemonId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  abilities: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  weight: PropTypes.number.isRequired,
  pokemons: PropTypes.array.isRequired
}

export default PokemonInfo;
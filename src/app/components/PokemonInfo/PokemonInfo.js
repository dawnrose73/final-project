import React from 'react';
import PropTypes from 'prop-types';
import './PokemonInfo.scss';

function PokemonInfo({ pokemonId, name, abilities, types, weight, pokemons }) {
    return (
        <div className="pokemon__info">
            <p>id: {pokemonId}</p>
            <p>name: {name}</p>
            <p>abilities: {abilities.join(', ')}</p>
            <p>types: {types.join(', ')}</p>
            <p>weight: {weight}</p>
            <p>caught: {pokemons[pokemonId - 1].caught ? String(pokemons[pokemonId - 1].caught) : 'no'}</p>
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
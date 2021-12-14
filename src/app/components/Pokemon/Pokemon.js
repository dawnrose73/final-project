import React from 'react';
import PropTypes from 'prop-types';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import PokemonImage from '../PokemonImage/PokemonImage';
import './Pokemon.scss';

function Pokemon({ pokemonId, name, abilities, types, weight, imageURL, pokemons }) {
    return (
        <div className="pokemon">
            <div className="container">
                <div className="pokemon__inner">
                    <PokemonInfo  pokemonId={pokemonId}
                                  name={name}
                                  abilities={abilities}
                                  types={types}
                                  weight={weight}
                                  pokemons={pokemons} 
                    />
                    <PokemonImage name={name}
                                  imageURL={imageURL} 
                    />
                </div>
            </div>
        </div>
    );
}

Pokemon.propTypes = {
    pokemonId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abilities: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    weight: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    pokemons: PropTypes.array.isRequired
}

export default Pokemon;
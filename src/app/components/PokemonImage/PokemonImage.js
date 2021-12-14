import React from 'react';
import PropTypes from 'prop-types';
import './PokemonImage.scss';

function PokemonImage({ name, imageURL }) {
    return (
        <div className="pokemon__image">
            <img src={imageURL} alt={name} />
        </div>
    );
}

PokemonImage.propTypes = {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
}

export default PokemonImage;
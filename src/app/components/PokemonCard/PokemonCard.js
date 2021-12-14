import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../containers/AppState';
import CatchButton from '../CatchButton/CatchButton';
import ReleaseButton from '../ReleaseButton/ReleaseButton';
import './PokemonCard.scss';

function PokemonCard({ pokemon }) {
    const { clickHandler } = useContext(Context);
    return (
        <div className="card" onClick={clickHandler(pokemon.id)}>
            <div className="card__id">id: {pokemon.id}</div>
            <div className="card__name">name: {pokemon.name}</div>
            {pokemon.caught ? 
                <ReleaseButton /> : 
                <CatchButton />}
        </div>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

export default PokemonCard;
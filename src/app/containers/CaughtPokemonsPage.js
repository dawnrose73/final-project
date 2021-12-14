import React, { useContext } from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import NothingHere from '../components/NothingHere/NothingHere';
import { Context } from './AppState';

function CaughtPokemonsPage() {
    const { pokemons, isThereLocalData } = useContext(Context);

    const getLocalData = () => {
        return JSON.parse(localStorage.getItem('caughtPokemons'));
    }
    const caughtPokemons = isThereLocalData ? getLocalData().sort((a, b) => a.id - b.id) : pokemons.filter(pokemon => pokemon.caught);
    
    return (
        <>
            {caughtPokemons.length ? 
                <PokemonList pokemons={caughtPokemons}/> : 
                <NothingHere />}
        </>
    );
}
  
export default CaughtPokemonsPage;
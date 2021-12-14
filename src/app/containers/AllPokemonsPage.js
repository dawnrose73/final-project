import React, { useContext, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import PokemonList from '../components/PokemonList/PokemonList';
import Loader from '../components/Loader/Loader';
import { Context } from './AppState';

function AllPokemonsPage() {
    const { pokemons, scrollHandler } = useContext(Context);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function() {
            document.removeEventListener('scroll', scrollHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ErrorBoundary>
                {pokemons.length ? 
                    <PokemonList pokemons={pokemons}/> : 
                    <Loader />}
            </ErrorBoundary>
        </>
    );
}
  
export default AllPokemonsPage;
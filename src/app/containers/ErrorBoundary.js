import React, { useContext } from 'react';
import NotFound from '../components/NotFound/NotFound';
import { Context } from './AppState';

function ErrorBoundary({ children }) {
    const { isEverythingOK } = useContext(Context);
    
    return (
        <>
            {isEverythingOK ? children : <NotFound />}
        </>
    )
}

export default ErrorBoundary;
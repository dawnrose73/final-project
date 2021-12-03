import React from 'react';
import './Loader.scss'

function Loader() {
    return (
        <div style = {{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
            <div className="lds-dual-ring"></div>
        </div>
    )
};

export default Loader;
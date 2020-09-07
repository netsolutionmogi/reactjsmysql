import React from 'react';

// import { Container } from './styles';

import Home from '../Home';

function Alterar() {

    const id = localStorage.getItem("id");

    return (
        <>
            <Home />
            <div className="container">
                <h3>{id}</h3>
            </div>



        </>

    );
}

export default Alterar;
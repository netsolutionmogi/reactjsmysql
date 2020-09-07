import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Consultar from './components/Consultar';
import Alterar  from './components/Alterar';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/consultar' component={Consultar} />
                <Route path='/alterar' component={Alterar} />

            </Switch>
        </BrowserRouter>

    );
}
export default Routes;
import React from 'react';
import { router } from '@mini-core/core';
import Welcome from './Welcome';
import Home from './Home';
import AddDeck from './AddDeck';

import './index.scss';

const App = () => {
    return (
        <router.Router initialPage="main">
            <router.Page id="main" initialPanel="home">
                <Welcome id="welcome" />
                <Home id="home" />
                <AddDeck id="add-deck"/>
            </router.Page>
        </router.Router>
    );
};

export default App;

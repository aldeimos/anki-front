import React from 'react';
import { router } from '@mini-core/core';
import Welcome from './Welcome';
import Home from './Home';

import './index.scss';
import AddDeck from "./AddDeck";

const App = () => {
    return (
        <router.Router initialPage="main">
            <router.Page id="main" initialPanel="add-deck">
                <Welcome id="welcome" />
                <Home id="home" />
                <AddDeck id="add-deck"/>
            </router.Page>
        </router.Router>
    );
};

export default App;

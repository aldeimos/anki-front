import 'core-js/features/map';
import 'core-js/features/set';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/';
import bridge from '@vkontakte/vk-bridge';
import { utils } from '@mini-core/core';

import App from './containers';
import '@vkontakte/vkui/dist/vkui.css';
import './store/decks';
import './store/user';

window.vk_settings = utils.parseParams(window.location.search);
bridge.subscribe(utils.schemeChanger);

const store = createStore(rootReducer);

bridge.send('VKWebAppInit');

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

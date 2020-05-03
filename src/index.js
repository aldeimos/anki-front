import 'core-js/features/map';
import 'core-js/features/set';

import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import { utils } from '@mini-core/core';

import App from './containers';
import '@vkontakte/vkui/dist/vkui.css';

window.vk_settings = utils.parseParams(window.location.search);
bridge.subscribe(utils.schemeChanger);

bridge.send('VKWebAppInit');

ReactDOM.render(<App />, document.getElementById('root'));

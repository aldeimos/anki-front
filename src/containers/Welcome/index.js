import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../networking/api';
import { store } from '@mini-core/core';
import {Button, Panel} from '@vkontakte/vkui';
import FlipperLogo from '../../components/FlipperLogo';

import './index.scss';

const Welcome = ({id, router}) => {
    const [user, userActions] = store.useModel('user');
    const { profile } = user;

    useEffect(() => {
        API.getProfile().then(profile => userActions.load(profile));
    }, []);

    return (
        <Panel id={id} centered>
            <div className="welcome">
                <div className="welcome__cards">
                    <div className="welcome__card welcome__card--1">
                        Hello
                    </div>
                    <div className="welcome__card welcome__card--2">
                        Hallo
                    </div>
                    <div className="welcome__card welcome__card--3">
                        Salut
                    </div>
                    <div className="welcome__card welcome__card--4">
                        你好
                    </div>
                </div>
                <div className="container">
                    <div className="welcome__logo">
                        <FlipperLogo/>
                    </div>
                    <div className="welcome__text">
                        Привет, {profile && profile.first_name}<br/>
                        Decks — это приложение, которое позволяет эффективно расширить словарный запас изучаемого языка.
                    </div>
                    <Button
                        size="xl"
                        mode="overlay-primary"
                        onClick={() => router.openPanel('home')}
                    >
                        Продолжить
                    </Button>
                </div>
            </div>
        </Panel>
    )
};

Welcome.propTypes = {
    id: PropTypes.string.isRequired
};

export default Welcome;

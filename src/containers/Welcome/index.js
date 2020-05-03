import React from 'react';
import PropTypes from 'prop-types';
import {Button, FixedLayout, Panel} from '@vkontakte/vkui';

import './index.scss';

const Welcome = ({id, router}) => {
    return (
        <Panel id={id} centered>
            <div className="welcome">
                <div className="container">
                    <div className="welcome__logo">
                        Decks
                    </div>
                    <div className="welcome__text">
                        Привет, Юзернейм!<br/>
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

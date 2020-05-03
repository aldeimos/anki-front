import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Progress} from '@vkontakte/vkui';

import './index.scss';
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';

const Deck = ({title, words, isFavorite, progress}) => {
    return (
            <Card
                mode="outline"
            >
                <div className="deck">
                    <div className="deck__header">
                        <div className="deck__title">
                            Заголовок
                        </div>
                        <div className="deck__controls">
                            <Icon28EditOutline
                                width={20}
                                height={20}
                                fill="royalblue"
                            />
                            <Icon28Favorite
                                width={20}
                                height={20}
                                fill="royalblue"
                            />
                        </div>
                    </div>
                    <div className="deck__words">
                        10 карточек
                    </div>
                    <div className="deck__progress">
                        <Progress value={50}/>
                        <div className="deck__progress-count">
                            50%
                        </div>
                    </div>
                    <Button
                        size="l"
                    >
                        Учить
                    </Button>
                </div>
            </Card>
    )
};

Deck.propTypes = {
    title: PropTypes.string.isRequired,
    words: PropTypes.array.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
};

export default Deck;

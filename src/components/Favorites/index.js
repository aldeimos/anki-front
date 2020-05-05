import React from 'react';
import {CardScroll} from '@vkontakte/vkui';
import Deck from '../Deck';
import { store } from '@mini-core/core'

import './index.scss'

const Favorites = () => {
    const [ decks, decksAction ] = store.useModel('decks');
    return (
        <div className="favorites">
            <CardScroll>
                {decks.decks.length !== 0 ?
                    decks.decks.filter(deck => deck.isFavorite)
                        .map(deck => <Deck {...deck}/>) :
                    null
                }
            </CardScroll>
        </div>
    )
};

export default Favorites;

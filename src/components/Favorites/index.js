import React from 'react';
import {CardScroll} from '@vkontakte/vkui';
import Deck from '../Deck';
import { store } from '@mini-core/core'

import './index.scss'
import {useSelector} from "react-redux";

const Favorites = () => {
    const decks = useSelector(store => store.decks.decks);

    return (
        <div className="favorites">
            <CardScroll>
                {decks.length !== 0 ?
                    decks.filter(deck => deck.isFavorite)
                        .map(deck => <Deck {...deck}/>) :
                    null
                }
            </CardScroll>
        </div>
    )
};

export default Favorites;

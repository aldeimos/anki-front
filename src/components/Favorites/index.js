import React from 'react';

import './index.scss'
import {CardScroll} from "@vkontakte/vkui";
import Deck from "../Deck";

const Favorites = () => {
    return (
        <div className="favorites">
            <CardScroll>
                <Deck progress={50} isFavorite={false} title={'Моя колода'} words={[1, 2, 3]}/>
                <Deck progress={50} isFavorite={false} title={'Моя колода'} words={[1, 2, 3]}/>
                <Deck progress={50} isFavorite={false} title={'Моя колода'} words={[1, 2, 3]}/>
                <Deck progress={50} isFavorite={false} title={'Моя колода'} words={[1, 2, 3]}/>
            </CardScroll>
        </div>
    )
};

export default Favorites;

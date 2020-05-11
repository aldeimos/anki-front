import React from 'react';

import './index.scss';
import Icon28DeleteOutlineAndroid from '@vkontakte/icons/dist/28/delete_outline_android';

const PhraseCard = ({phrase_1, phrase_2}) => {

    return (
        <div className="phrase-card">
            <div
                className="phrase-card__wrapper"
            >
                {phrase_1} / {phrase_2}
            </div>
            <Icon28DeleteOutlineAndroid fill="royalblue"/>
        </div>
    )
};

export default PhraseCard;

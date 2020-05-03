import React from 'react';

import './index.scss';
import Icon28DeleteOutlineAndroid from '@vkontakte/icons/dist/28/delete_outline_android';

const PhraseCard = ({text, handler}) => {
    return (
        <div className="phrase-card">
            <div
                className="phrase-card__wrapper"
            >
                {text}
            </div>
            <Icon28DeleteOutlineAndroid fill="royalblue"/>
        </div>
    )
};

export default PhraseCard;

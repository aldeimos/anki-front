import React from 'react';

import './index.scss';
import Icon28DeleteOutlineAndroid from '@vkontakte/icons/dist/28/delete_outline_android';

const PhraseCard = ({content, handler}) => {
    return (
        <div className="phrase-card">
            <div
                className="phrase-card__wrapper"
            >
                {content.phrase_1} / {content.phrase_2}
            </div>
            <Icon28DeleteOutlineAndroid fill="royalblue"/>
        </div>
    )
};

export default PhraseCard;

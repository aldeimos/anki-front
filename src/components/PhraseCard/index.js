import React from 'react';

import './index.scss';
import Icon28DeleteOutline from '@vkontakte/icons/dist/28/delete_outline';

const PhraseCard = ({id, phrase_1, phrase_2, deleteCard}) => {

    const onDeleteClickHandler = () => {
        deleteCard((prev) => ({
            ...prev,
            cards: prev.cards.filter(card => card.id !== id)
        }))
    };

    return (
        <div className="phrase-card">
            <div
                className="phrase-card__wrapper"
            >
                {phrase_1} / {phrase_2}
            </div>
            <Icon28DeleteOutline
                onClick={onDeleteClickHandler}
                fill="royalblue"
            />
        </div>
    )
};

export default PhraseCard;

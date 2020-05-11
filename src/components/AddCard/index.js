import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addCard} from '../../store/decks/actionsCreators';
import { nanoid } from 'nanoid';
import {Button, Checkbox, FormLayout, FormLayoutGroup, Input} from '@vkontakte/vkui';

import './index.scss';

const AddCard = ({setShowPopup, addCard}) => {
    const [isRepeat, setIsRepeat] = useState(false);

    const [card, setCard] = useState({
        id: nanoid(),
        phrase_1: '',
        phrase_2: ''
    });

    const setStateField = (value, field) => {

        setCard((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const clearState = () => {
        setCard({id: nanoid(), phrase_1: '', phrase_2: ''})
    };

    const onAddButtonClickHandler = () => {
        addCard((prev) => ({
            ...prev,
            cards: [...prev.cards, card]
        }));

        console.log(card);
        setShowPopup(isRepeat);
        clearState();
    };

    const validateAddCard = () => {
        return card.phrase_1.trim().length === 0 || card.phrase_2.trim().length === 0
    };

    return (
        <div className="add-card">
            <div
                className="add-card__mask"
                onClick={() => setShowPopup(false)}
            >
            </div>
            <div className="add-card__content">
                <div className="add-card__title">
                    Создание карточки
                </div>
                <FormLayout>
                    <FormLayoutGroup top="Введите слово на основном языке">
                        <Input
                            type="text"
                            value={card.phrase_1}
                            onChange={(e) => setStateField(e.target.value, 'phrase_1')}
                        />
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Введите слово на изучаемом языке">
                        <Input
                            type="text"
                            value={card.phrase_2}
                            onChange={(e) => setStateField(e.target.value, 'phrase_2')}
                        />
                        <Checkbox
                            value={isRepeat}
                            onChange={(e) => setIsRepeat(e.target.checked)}
                        >
                            Создать ещё одну карточку
                        </Checkbox>
                    </FormLayoutGroup>

                    <div className="add-card__controls">
                        <Button
                            stretched
                            size="xl"
                            onClick={onAddButtonClickHandler}
                            disabled={validateAddCard()}
                        >
                            Добавить
                        </Button>
                        <div
                            className="add-card__cancel"
                            onClick={() => setShowPopup(false)}
                        >
                            Отменить
                        </div>
                    </div>
                </FormLayout>
            </div>
        </div>
    )
};

export default AddCard;

import React from 'react';
import {Button, Checkbox, FormLayout, FormLayoutGroup, Input} from '@vkontakte/vkui';

import './index.scss';

const AddCard = ({setShowPopup}) => {
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
                        <Input type="text"/>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Введите слово на изучаемом языке">
                        <Input type="text"/>
                        <Checkbox>Создать ещё одну карточку</Checkbox>
                    </FormLayoutGroup>

                    <div className="add-card__controls">
                        <Button
                            stretched
                            size="xl"
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDeck } from '../../store/decks/actionsCreators';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    FormLayout,
    FormLayoutGroup,
    Input,
    Checkbox, FixedLayout, Button,
    Div
} from '@vkontakte/vkui';
import AddCard from '../../components/AddCard';
import CustomButton from '../../components/CustomButton';
import PhraseCard from '../../components/PhraseCard';

import './index.scss';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';



const AddDeck = ({id, router}) => {
    const dispatch = useDispatch();
    const [newDeck, setNewDeck] = useState(
        {
            id: nanoid(),
            title: '',
            isFavorite: false,
            cards: [],
            progress: 0
        }
    );
    const [showPopup, setShowPopup] = useState(false);

    const setStateField = (value, field) => {
        setNewDeck(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const onAddDeckClickHandler = () => {
        dispatch(addDeck(newDeck));
        router.openPanel('home');
    };

    const validateAddButton = () => {
        return newDeck.title.trim().length === 0 || newDeck.cards.length === 0;
    };



    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderBack
                        onClick={() => router.goBack()}
                    />
                }
            >
                Создание колоды
            </PanelHeader>
            <FormLayout>
                <FormLayoutGroup top="Название колоды">
                    <Input
                        type="text"
                        default="Работа"
                        value={newDeck.title}
                        onChange={(e) => setStateField(e.target.value, 'title')}
                    />
                    <Checkbox
                        value={newDeck.isFavorite}
                        onChange={(e) => setStateField(e.target.checked, 'isFavorite')}
                    >
                        Добавить колоду в Избранные
                    </Checkbox>
                    <CustomButton
                        text="Добавить карточку"
                        icon={<Icon28AddSquareOutline fill="royalblue"/>}
                        handler={() => setShowPopup(true)}
                    />
                </FormLayoutGroup>
            </FormLayout>
            <Div>
                <div className="add-deck__title">
                    Карточки в колоде
                </div>
                {newDeck.cards.length !== 0 ?
                    newDeck.cards.map((card) =>
                        <PhraseCard
                            key={card.id}
                            deleteCard={setNewDeck}
                            {...card}
                    />) :
                    'Ваша колода пуста'
                }
            </Div>
            <FixedLayout vertical="bottom">
                <div className="add-deck__btn">
                    <Button
                        stretched
                        size="xl"
                        onClick={onAddDeckClickHandler}
                        disabled={validateAddButton()}
                    >
                        Создать колоду
                    </Button>
                </div>
            </FixedLayout>
            {showPopup && <AddCard
                setShowPopup={setShowPopup}
                addCard={setNewDeck}
            />
            }
        </Panel>
    )
};

AddDeck.propTypes = {
    id: PropTypes.string.isRequired
};

export default AddDeck;

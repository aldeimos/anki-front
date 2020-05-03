import React, { useState } from 'react';
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

import './index.scss';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import CustomButton from "../../components/CustomButton";
import PhraseCard from "../../components/PhraseCard";

const AddDeck = ({id}) => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderBack/>
                }
            >
                Создание колоды
            </PanelHeader>
            <FormLayout>
                <FormLayoutGroup top="Название колоды">
                    <Input type="text" default="Работа"/>
                    <Checkbox>Добавить колоду в Избранные</Checkbox>
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
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
                <PhraseCard text="привет / hello"/>
            </Div>
            <FixedLayout vertical="bottom">
                <div className="add-deck__btn">
                    <Button
                        stretched
                        size="xl"
                    >
                        Создать колоду
                    </Button>
                </div>
            </FixedLayout>
            {showPopup && <AddCard setShowPopup={setShowPopup}/>}
        </Panel>
    )
};

AddDeck.propTypes = {
    id: PropTypes.string.isRequired
};

export default AddDeck;

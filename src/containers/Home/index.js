import React from 'react';
import {Group, Panel, PanelHeader} from '@vkontakte/vkui';
import Favorites from '../../components/Favorites';
import Deck from '../../components/Deck';

import './index.scss';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import CustomButton from "../../components/CustomButton";


const Home = ({id, router}) => {
    return (
        <Panel id={id}>
            <PanelHeader>
                Список колод
            </PanelHeader>
            <Group>
                <div className="home__title">
                    Избранное
                </div>
                <Favorites/>
            </Group>
            <div className="container">
                <div className="home__decks">
                    <CustomButton
                        text="Добавить колоду"
                        icon={<Icon28AddSquareOutline fill="royalblue"/>}
                        handler={() => router.openPanel('add-deck')}
                    />
                    <div className="home__my-decks">
                        <div className="home__title home__title--sub">
                            Мои колоды
                        </div>
                        <Group>
                            <Deck progress={50} isFavorite={false} title={'Заголовок'} words={[1,2,3]}/>
                            <Deck progress={50} isFavorite={false} title={'Заголовок'} words={[1,2,3]}/>
                            <Deck progress={50} isFavorite={false} title={'Заголовок'} words={[1,2,3]}/>
                            <Deck progress={50} isFavorite={false} title={'Заголовок'} words={[1,2,3]}/>
                        </Group>
                    </div>
                </div>
            </div>
        </Panel>
    )
};

export default Home;

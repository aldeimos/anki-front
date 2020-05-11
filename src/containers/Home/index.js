import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Group, Panel, PanelHeader} from '@vkontakte/vkui';
import Favorites from '../../components/Favorites';
import Deck from '../../components/Deck'
import CustomButton from '../../components/CustomButton';
import { store } from '@mini-core/core';

import './index.scss';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';


const Home = ({id, router}) => {
    const decks = useSelector(store => store.decks.decks);
    console.log(decks);
    return (
        <Panel id={id}>
            <PanelHeader>
                Список колод
            </PanelHeader>
            <Group>
                {decks.filter(deck => deck.isFavorite).length !== 0 &&
                    <div className="home__title">
                        Избранное
                    </div>
                }
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
                            {decks.length !== 0 ?
                                decks.filter(deck => deck.isFavorite === false)
                                    .map(deck => <Deck {...deck}/>) :
                                'Список колод пуст'
                            }
                        </Group>
                    </div>
                </div>
            </div>
        </Panel>
    )
};

export default Home;

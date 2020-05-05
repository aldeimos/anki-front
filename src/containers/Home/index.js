import React from 'react';
import {Group, Panel, PanelHeader} from '@vkontakte/vkui';
import Favorites from '../../components/Favorites';
import Deck from '../../components/Deck'
import CustomButton from '../../components/CustomButton';
import { store } from '@mini-core/core';

import './index.scss';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';


const Home = ({id, router}) => {
    const [decks, decksActions] = store.useModel('decks');
    return (
        <Panel id={id}>
            <PanelHeader>
                Список колод
            </PanelHeader>
            <Group>
                {decks.decks.filter(deck => deck.isFavorite).length !== 0 &&
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
                            {decks.decks.length !== 0 ?
                                decks.decks.filter(deck => deck.isFavorite === false)
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

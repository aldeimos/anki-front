import * as types from './actions';

export const loadDecks = (decks) => {
    return {
        type: types.LOAD_DECKS,
        decks,
    }
};

export const addDeck = (newDeck) => {
    return {
        type: types.ADD_DECK,
        newDeck
    }
};

export const addCard = (card) => {
    return {
        type: types.ADD_CARD,
        card
    }
};

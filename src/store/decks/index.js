import { store } from '@mini-core/core';

const initialState = {
    decks: [],
};

const actions = {
    load: (decks) => {
        return {
            decks
        }
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load': {
            const { decks } = action;
            return {
                ...state,
                decks
            }
        }
        case 'add': {
            const { newDeck } = action;
            return {
                ...state,
                decks: [...state.decks, newDeck],
            }
        }
        default: return state;
    }
};

store.registerModel('decks', null, initialState, actions, reducer);




import * as types from './actions';

const initialState = {
    decks: [],

    newDeck: {
        title: 'хуй',
        isFavorite: false,
        cards: []
    }
};

const decks = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_DECKS: {
            const { decks } = action;
            return {
                ...state,
                decks
            }
        }
        case types.ADD_DECK: {
            const { newDeck } = action;
            state.decks = [...state.decks, newDeck];
            return {
                ...state,
            }
        }
        default: return state;
    }
};

export default decks;




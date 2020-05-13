import { store } from '@mini-core/core';

const initialState = {
    profile: null
};

const actions = {
    load: (profile) => {
        return {
            profile
        }
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load':
            const { profile } = action;
            return {
                ...state,
                profile
            };
        default: return state;
    }
};

store.registerModel('user', null, initialState, actions, reducer);

import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE:
            return { ...state, storageLoaded: true };
        default:
            return state;
    }
};

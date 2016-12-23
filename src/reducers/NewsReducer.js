import { NEWS_FETCH_OK } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_FETCH_OK:
            return action.payload;
        default:
            return state;
    }
};

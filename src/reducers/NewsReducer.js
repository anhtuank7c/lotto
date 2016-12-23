import {
    NEWS_FETCH_OK,
    NEWS_FETCH_ERROR,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_FETCH_OK:
            return action.news;
        case NEWS_FETCH_ERROR:
            return action.message;
        default:
            return state;
    }
};

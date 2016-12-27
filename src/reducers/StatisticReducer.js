import {
    STATISTIC_UPDATE
} from '../actions/types';

const INITIAL = {
    win: 0,
    play: 0
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case STATISTIC_UPDATE:
            return { ...state, win: action.win, play: action.play };
        default:
            return state;
    }
};

import {
    DRAWER_OPEN,
    DRAWER_CLOSE
} from '../actions/types';

const INITIAL = {
    open: false
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return { ...state, open: true };
        case DRAWER_CLOSE:
            return INITIAL;
        default:
            return state;
    }
};

import {
    DRAWER_OPEN,
    DRAWER_CLOSE
} from '../actions/types';

export default (state, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return true;
        case DRAWER_CLOSE:
            return false;
        default:
            return false;
    }
};

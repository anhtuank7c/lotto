import {
    AUTHENTICATION_SUCCESSFUL,
    AUTHENTICATION_FAILED
} from '../actions/types';

const INITIAL = {
    authenticated: false,
    user: undefined
};
export default (state = INITIAL, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCESSFUL:
            return { ...state, authenticated: true, user: action.payload };
        case AUTHENTICATION_FAILED:
            return INITIAL;
        default:
            return state;
    }
};

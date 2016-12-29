import {
    AUTHENTICATING,
    AUTHENTICATION_SUCCESSFUL,
    AUTHENTICATION_FAILED,
    DISMISS_ALERT,
    SIGN_OUT
} from '../actions/types';

const INITIAL = {
    user: undefined,
    error: undefined,
    loading: false
};
export default (state = INITIAL, action) => {
    switch (action.type) {
        case AUTHENTICATING:
            return { ...state, loading: true };
        case AUTHENTICATION_SUCCESSFUL:
            console.log('AUTHENTICATION_SUCCESSFUL', action.payload);
            return { ...state, ...INITIAL, user: action.payload };
        case AUTHENTICATION_FAILED:
            return { ...state, ...INITIAL, error: action.payload };
        case DISMISS_ALERT:
            return INITIAL;
        case SIGN_OUT:
            return INITIAL;
        default:
            return state;
    }
};

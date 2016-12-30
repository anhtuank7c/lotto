import {
    AUTHENTICATING,
    AUTHENTICATION_SUCCESSFUL,
    AUTHENTICATION_FAILED,
    DISMISS_ALERT,
    SIGN_OUT
} from '../actions/types';

const INITIAL = {
    error: undefined,
    loading: false,
    displayName: '',
    email: '',
    emailVerified: false,
    photoUrl: '',
    refreshToken: undefined,
    uid: undefined,
};
export default (state = INITIAL, action) => {
    switch (action.type) {
        case AUTHENTICATING:
            return { ...state, loading: true };
        case AUTHENTICATION_SUCCESSFUL:
            return {
                ...state,
                ...INITIAL,
                email: action.payload.email,
                displayName: action.payload.displayName,
                emailVerified: action.payload.emailVerified,
                photoUrl: action.payload.photoUrl,
                refreshToken: action.payload.refreshToken,
                uid: action.payload.uid
            };
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

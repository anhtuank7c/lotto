import {
    AUTHENTICATION_SUCESSFUL,
    AUTHENTICATION_FAILED,
} from './types';

// SIGN UP
export const signUp = ({ fullName, phone, email, password, app }) => {
    console.log(fullName, phone, email, password, app);
    return (dispatch) => {
        app.service('users')
            .create({
                fullName,
                phone,
                email,
                password
            })
            .then(result => () => {
                dispatch({ type: 'SIGN_UP_SUCESSFUL', user: result });
            })
            .catch((err) => () => {
                dispatch({ type: 'SIGN_UP_FAILED', error: err.message });
            });
    };
};

// SIGN IN
export const signIn = ({ email, password, app }) => {
    console.log('signIn Action', app);
    return (dispatch) => {
        app.authenticate({
            type: 'local',
            email,
            password
        })
            .then(response => {
                console.log('Authenticated, ', response.accessToken);
                const verifyJWT = app.passport.verifyJWT(response.accessToken);
                console.log('Verify JWT', verifyJWT);
            })
            .then(payload => {
                console.log('Payload', payload);
            })
            .then(user => {
                console.log('User', user);
                dispatch({ type: AUTHENTICATION_SUCESSFUL, payload: user });
            })
            .catch(error => {
                console.log('AUTHENTICATION_FAILED', error);
                dispatch({ type: AUTHENTICATION_FAILED, error });
            });
    };
};

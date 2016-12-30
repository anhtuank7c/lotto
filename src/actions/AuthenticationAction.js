import { Actions, ActionConst } from 'react-native-router-flux';
import firebase from 'firebase';

import {
    AUTHENTICATING,
    AUTHENTICATION_SUCCESSFUL,
    AUTHENTICATION_FAILED,
    DISMISS_ALERT,
    SIGN_OUT
} from './types';

// DISMISS ALERT
export const dismissAlert = () => ({ type: DISMISS_ALERT });

// SIGN IN
export const signIn = ({ email, password }) => (dispatch) => {
    dispatch({ type: AUTHENTICATING });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            dispatch({ type: AUTHENTICATION_SUCCESSFUL, payload: result });
            Actions.tabbar({ type: ActionConst.REPLACE });
        })
        .catch((error) => {
            console.log('LOGIN FAILED', error);
            if (error.code === 'auth/wrong-password') {
                console.log(AUTHENTICATION_FAILED, error);
                dispatch({ type: AUTHENTICATION_FAILED, payload: error.message });
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(result => {
                    dispatch({ type: AUTHENTICATION_SUCCESSFUL, payload: result });
                    Actions.tabbar({ type: ActionConst.REPLACE });
                })
                .catch(err => {
                    console.log('SIGN UP FAILED', err);
                    dispatch({ type: AUTHENTICATION_FAILED, payload: err.message });
                });
        });
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: SIGN_OUT });
        Actions.auth({ type: ActionConst.REPLACE });
    };
};

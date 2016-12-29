// import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import {
    NEWS_FETCH_OK,
    NEWS_CREATE,
    NEWS_UPDATE,
    NEWS_DELETE,
    NEWS_READ
} from './types';

export const fetchNews = () => {
    return (dispatch) => {
        firebase.database().ref('/news')
            .on('value', snapshot => {
                dispatch({
                    type: NEWS_FETCH_OK,
                    payload: snapshot.val()
                });
            });
    };
};

export const viewNews = ({ uid }) => {
    return (dispatch) => {
        firebase.database().ref(`/news/${uid}`).then(news => {
            dispatch({
                type: NEWS_READ,
                payload: news
            });
        }).catch(error => {
            console.log(`Unable to find news: ${uid}`, error);
        });
    };
};

export const updateNews = ({uid}) => {
    return {

    };
};

// import { Actions } from 'react-native-router-flux';
import {
    NEWS_FETCH_OK,
    NEWS_CREATE,
    NEWS_UPDATE,
    NEWS_DELETE
} from './types';

export const fetchNews = ({ app }) => {
    const Albums = app.service('albums');

    return (dispatch) => {
        Albums.find({}).then(result => {
            dispatch({
                type: NEWS_FETCH_OK,
                payload: result.data
            });
        }).catch(error => {
            console.log('error', error);
        });
    };
};

import Parse from 'parse/react-native';
// import { Actions } from 'react-native-router-flux';
import {
    NEWS_FETCH_OK,
    NEWS_FETCH_ERROR,
    NEWS_CREATE,
    NEWS_UPDATE,
    NEWS_DELETE
} from './types';

const News = Parse.Object.extend('News');

export const fetchNews = () => (dispatch) => {
    let query = new Parse.Query(News);
    query.find().then(result => {
        console.log(result);
        dispatch({
            type: NEWS_FETCH_OK,
            news: result
        });
    }).catch(error => {
        console.log('error', error);
    });
};

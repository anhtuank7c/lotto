import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import StorageReducer from './StorageReducer';

export default combineReducers({
    news: NewsReducer,
    storage: StorageReducer
});

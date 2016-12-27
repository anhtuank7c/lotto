import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import StorageReducer from './StorageReducer';
import AuthReducer from './AuthReducer';
import DrawerReducer from './DrawerReducer';

export default combineReducers({
    news: NewsReducer,
    storage: StorageReducer,
    auth: AuthReducer,
    drawerOpen: DrawerReducer
});

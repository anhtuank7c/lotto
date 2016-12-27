import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import StorageReducer from './StorageReducer';
import AuthReducer from './AuthReducer';
import DrawerReducer from './DrawerReducer';
import StatisticReducer from './StatisticReducer';

export default combineReducers({
    news: NewsReducer,
    storage: StorageReducer,
    auth: AuthReducer,
    drawerOpen: DrawerReducer,
    statistic: StatisticReducer,
});

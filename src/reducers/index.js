import { combineReducers } from 'redux';

import NewsReducer from './NewsReducer';
import AuthReducer from './AuthReducer';
import DrawerReducer from './DrawerReducer';
import StatisticReducer from './StatisticReducer';
import RouteReducer from './RouteReducer';

export default combineReducers({
    NewsReducer,
    AuthReducer,
    DrawerReducer,
    StatisticReducer,
    RouteReducer,
});

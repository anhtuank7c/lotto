import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducer from './reducers';
import promise from './promise';

export default function configureStore() {
    const enhancer = compose(
        applyMiddleware(thunk),
        devTools({
            name: 'lotto',
            realtime: true
        })
    );

    const store = createStore(reducer, enhancer);
    persistStore(store, { storage: AsyncStorage });
    return store;
}

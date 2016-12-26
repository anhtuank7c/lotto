import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import Router from './Router';
import reducers from './reducers';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, compose(
            autoRehydrate(),
            applyMiddleware(ReduxThunk),
        ));
        persistStore(store, {
            blacklist: ['logs', 'env'],
            storage: AsyncStorage,
            debounce: 50
        });

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

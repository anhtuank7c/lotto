import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import Parse from 'parse/react-native';

import Router from './Router';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        Parse.initialize('lotto');
        Parse.serverURL = 'http://172.16.0.121:1337/parse';
    }

    render() {
        const store = createStore(reducers, {}, compose(
            autoRehydrate(),
            applyMiddleware(ReduxThunk),
        ));
        persistStore(store, { storage: AsyncStorage });

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

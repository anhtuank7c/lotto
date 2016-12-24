import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import io from 'socket.io-client';

import Router from './Router';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const socket = io('http://albums.crabstudio.info', {
            transports: ['websocket'],
            forceNew: true
        });

        this.app = feathers()
            .configure(socketio(socket))
            .configure(hooks())
            .configure(authentication({
                storage: AsyncStorage
            }));
    }

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
                <Router app={this.app} />
            </Provider>
        );
    }
}

export default App;

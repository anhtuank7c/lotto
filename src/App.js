import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import devTools from 'remote-redux-devtools';

import firebase from 'firebase';

import Router from './Router';
import reducers from './reducers';

const config = {
    apiKey: 'AIzaSyAllNhA_GyT7PUE_zNrQehInq74pIIcheA',
    authDomain: 'lotto-33a1d.firebaseapp.com',
    databaseURL: 'https://lotto-33a1d.firebaseio.com',
    storageBucket: 'lotto-33a1d.appspot.com',
    messagingSenderId: '13329987182'
};
firebase.initializeApp(config);

const store = createStore(reducers, compose(
    applyMiddleware(ReduxThunk),
    devTools({
        name: 'lotto',
        realtime: true
    })
));
persistStore(store, { storage: AsyncStorage });

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

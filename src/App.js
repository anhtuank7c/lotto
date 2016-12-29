import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Router from './Router';
import reducers from './reducers';

class App extends Component {

    constructor(props) {
        super(props);
        const config = {
            apiKey: 'AIzaSyAllNhA_GyT7PUE_zNrQehInq74pIIcheA',
            authDomain: 'lotto-33a1d.firebaseapp.com',
            databaseURL: 'https://lotto-33a1d.firebaseio.com',
            storageBucket: 'lotto-33a1d.appspot.com',
            messagingSenderId: '13329987182'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

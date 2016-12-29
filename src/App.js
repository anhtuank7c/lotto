import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { Router, Scene } from 'react-native-router-flux';

// import Router from './Router';
import reducers from './reducers';

import SignIn from './components/SignIn';
import TermsConditions from './components/TermsConditions';
import Profile from './components/Profile';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { TabIcon } from './components/common';

const RouterWithRedux = connect()(Router);

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
                <RouterWithRedux>
                    <Scene
                        key="drawer"
                        component={NavigationDrawer}
                        initial
                        >
                        <Scene
                            key="signIn"
                            component={SignIn}
                            title="Sign in"
                            type="replace"
                            hideNavBar
                            />
                        <Scene
                            key="termsAndConditions"
                            component={TermsConditions}
                            title="Terms and conditions"
                            type="replace"
                            hideNavBar
                            />
                        <Scene
                            key="main"
                            tabs
                            hideNavBar
                            tabBarStyle={styles.tabBarStyle}
                            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                            >
                            <Scene
                                key="newsList"
                                component={NewsList}
                                title="News"
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="wifi-tethering"
                                iconSize={24}
                                initial
                                />
                            <Scene
                                key="luckyDraw"
                                component={Profile}
                                title="luckyDraw"
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="wifi-tethering"
                                iconSize={24}
                                />
                            <Scene
                                key="guideline"
                                component={Profile}
                                title="Guideline"
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="wifi-tethering"
                                iconSize={24}
                                />
                            <Scene
                                key="profile"
                                component={Profile}
                                title="Profile"
                                sceneStyle={{ marginTop: 65 }}
                                />
                        </Scene>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
};

export default App;

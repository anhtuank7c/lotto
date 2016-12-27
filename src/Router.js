import React from 'react';
import { AsyncStorage } from 'react-native';
import { Actions, Router, Scene, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import io from 'socket.io-client';

// import IntroApp from './components/IntroApp';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { Spinner, TabIcon } from './components/common';

const socket = io('http://albums.crabstudio.info', {
    transports: ['websocket'],
    forceNew: true
});

const app = feathers()
    .configure(socketio(socket))
    .configure(hooks())
    .configure(authentication({
        storage: AsyncStorage
    }));

app.io.on('connect', () => console.log('Socket connected'))
    .on('disconnect', () => console.log('Socket disconnected'));

const reducerCreate = (params) => (state, action) => Reducer(params)(state, action);

const RouterComponent = ({ loading, needSignIn }) => (
    loading ?
        <Spinner size="large" /> :
        <Router createReducer={reducerCreate}>

            <Scene key="auth">
                <Scene
                    key="sign_in"
                    component={SignIn}
                    app={app}
                    initial={needSignIn}
                    title="Sign in"
                    type="reset"
                    />
                <Scene
                    key="sign_up"
                    component={SignUp}
                    app={app}
                    title="Sign up"
                    type="replace"
                    leftTitle="Back"
                    onLeft={() => Actions.sign_in()}
                    />
            </Scene>

            <Scene
                key="drawer"
                component={NavigationDrawer}
                initial={!needSignIn}
                hideNavBar
                >
                <Scene
                    key="main"
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                    >
                    <Scene
                        key="news_list"
                        component={NewsList}
                        title="News"
                        app={app}
                        sceneStyle={{ marginTop: 65 }}
                        icon={TabIcon}
                        iconName="ios-cube"
                        iconSize={24}
                        />
                    <Scene
                        key="lucky_number"
                        component={NewsList}
                        app={app}
                        navigationBarStyle={{ backgroundColor: 'green' }}
                        sceneStyle={{ marginTop: 65 }}
                        icon={TabIcon}
                        iconName="ios-nuclear-outline"
                        iconSize={24}
                        />
                    <Scene
                        key="result"
                        component={NewsList}
                        title="Result"
                        app={app}
                        navigationBarStyle={{ backgroundColor: 'yellow' }}
                        sceneStyle={{ marginTop: 65 }}
                        icon={TabIcon}
                        iconName="ios-cube"
                        iconSize={24}
                        />
                </Scene>
            </Scene>
        </Router>
);

// props is props of this component transfered from parent component
const mapStateToProps = (state) => {
    const {storage, auth } = state;

    return {
        loading: !storage.storageLoaded,
        // needSignIn: !auth.authenticated,
        needSignIn: false,
    };
};

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

export default connect(mapStateToProps)(RouterComponent);

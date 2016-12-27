import React, { Component } from 'react';
import { AsyncStorage, BackAndroid, Platform, ToastAndroid } from 'react-native';
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

import Profile from './components/Profile';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { Spinner, TabIcon } from './components/common';

class RouterComponent extends Component {
    state = {
        backPress: false
    }

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

        this.app.io.on('connect', () => console.log('Socket connected'))
            .on('disconnect', () => console.log('Socket disconnected'));
    }

    render() {
        const reducerCreate = (params) => (state, action) => Reducer(params)(state, action);
        const { loading, needSignIn } = this.props;
        return (
            loading ?
                <Spinner size="large" /> :
                <Router
                    createReducer={reducerCreate}
                    backAndroidHandler={() => {
                        if (!this.state.backPress) {
                            ToastAndroid.show('Press Back again to exit', ToastAndroid.SHORT);
                            this.setState({ backPress: true });
                            setTimeout(() => this.setState({ backPress: false }), 2500);
                        } else {
                            return false;
                        }
                        return true;
                    } }>

                    <Scene key="auth">
                        <Scene
                            key="sign_in"
                            component={SignIn}
                            app={this.app}
                            initial={needSignIn}
                            title="Sign in"
                            type="reset"
                            />
                        <Scene
                            key="sign_up"
                            component={SignUp}
                            app={this.app}
                            title="Sign up"
                            type="replace"
                            leftTitle="Back"
                            onLeft={() => Actions.sign_in({ type: 'replace' })}
                            sceneStyle={{ paddingTop: 65 }}
                            />
                    </Scene>

                    <Scene
                        key="drawer"
                        component={NavigationDrawer}
                        initial={!needSignIn}
                        hideNavBar
                        unmountScenes
                        open={false}
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
                                app={this.app}
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="wifi-tethering"
                                iconSize={24}
                                />
                            <Scene
                                key="lucky_number"
                                component={NewsList}
                                title="Random"
                                app={this.app}
                                navigationBarStyle={{ backgroundColor: 'green' }}
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="location-searching"
                                iconSize={24}
                                />
                            <Scene
                                key="prize"
                                component={NewsList}
                                title="Prize"
                                app={this.app}
                                navigationBarStyle={{ backgroundColor: 'yellow' }}
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="trending-up"
                                iconSize={24}
                                />
                            <Scene
                                key="history"
                                component={NewsList}
                                title="History"
                                app={this.app}
                                navigationBarStyle={{ backgroundColor: 'yellow' }}
                                sceneStyle={{ marginTop: 65 }}
                                icon={TabIcon}
                                iconName="history"
                                iconSize={24}
                                />
                            <Scene key="profile" component={Profile} title="Profile" />
                        </Scene>
                    </Scene>
                </Router>
        );
    }
}

// props is props of this component transfered from parent component
const mapStateToProps = (state) => {
    const { storage, auth } = state;
    return {
        loading: !storage.storageLoaded,
        needSignIn: !auth.authenticated,
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

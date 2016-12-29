import React from 'react';
// import { ToastAndroid } from 'react-native';
import { Router, Scene, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';

// import IntroApp from './components/IntroApp';
import SignIn from './components/SignIn';
import TermsConditions from './components/TermsConditions';

import Profile from './components/Profile';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { TabIcon } from './components/common';

const reducerCreate = (params) => (state, action) => Reducer(params)(state, action);

const RouterComponent = ({ needSignIn }) => {
    return (
        <Router createReducer={reducerCreate}>
            <Scene key="auth">
                <Scene
                    key="sign_in"
                    component={SignIn}
                    initial={needSignIn}
                    title="Sign in"
                    type="replace"
                    hideNavBar
                    />
                <Scene
                    key="terms_and_conditions"
                    component={TermsConditions}
                    title="Terms and conditions"
                    type="replace"
                    hideNavBar
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
                        sceneStyle={{ marginTop: 65 }}
                        icon={TabIcon}
                        iconName="wifi-tethering"
                        iconSize={24}
                        />
                    <Scene
                        key="lucky_number"
                        component={NewsList}
                        title="Random"
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
};

// props is props of this component transfered from parent component
const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        needSignIn: (auth.user === undefined)
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

import React from 'react';
// import { ToastAndroid } from 'react-native';
import { Router, Scene, Reducer } from 'react-native-router-flux';
// import { connect } from 'react-redux';

// import IntroApp from './components/IntroApp';
import SignIn from './components/SignIn';
import TermsConditions from './components/TermsConditions';

import Profile from './components/Profile';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { TabIcon } from './components/common';

const reducerCreate = (params) => (state, action) => Reducer(params)(state, action);

const RouterComponent = () => {
    return (
        <Router createReducer={reducerCreate}>
            <Scene key="root">
                <Scene
                    key="drawer"
                    component={NavigationDrawer}
                    >
                    <Scene
                        key="main"
                        tabs
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        unmountScenes
                        >
                        <Scene
                            key="newsList"
                            component={NewsList}
                            title="News"
                            sceneStyle={{ marginTop: 65 }}
                            icon={TabIcon}
                            iconName="wifi-tethering"
                            iconSize={24}
                            />
                        <Scene
                            key="luckyDraw"
                            component={NewsList}
                            title="luckyDraw"
                            sceneStyle={{ marginTop: 65 }}
                            icon={TabIcon}
                            iconName="wifi-tethering"
                            iconSize={24}
                            />
                        <Scene
                            key="guideline"
                            component={NewsList}
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
            </Scene>
        </Router >
    );
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

export default RouterComponent;

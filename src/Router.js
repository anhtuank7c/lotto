import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

// import IntroApp from './components/IntroApp';
import SignIn from './components/SignIn';
import TermsConditions from './components/TermsConditions';

import Profile from './components/Profile';
import Setting from './components/Setting';
import Guideline from './components/Guideline';
import LuckyDraw from './components/LuckyDraw';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { TabIcon } from './components/common';

const RouterWithRedux = connect()(Router);

const RouterComponent = () => {
    return (
        <RouterWithRedux>
            <Scene
                key="drawer"
                component={NavigationDrawer}
                hideNavBar
                unmountScenes
                >
                <Scene key="auth" hideNavBar>
                    <Scene
                        key='signIn'
                        component={SignIn}
                        initial
                        />
                    <Scene
                        key='termsConditions'
                        component={TermsConditions}
                        />
                </Scene>
                <Scene
                    key="tabbar"
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                    hideNavBar
                    >
                    <Scene
                        key="profile"
                        component={Profile}
                        title="Profile"
                        sceneStyle={{ paddingTop: 65 }}
                        />
                    <Scene
                        key="setting"
                        component={Setting}
                        title="Setting"
                        sceneStyle={{ paddingTop: 65 }}
                        />
                    <Scene
                        key="newsList"
                        component={NewsList}
                        title="News List"
                        icon={TabIcon}
                        iconName="wifi-tethering"
                        iconSize={24}
                        initial
                        />
                    <Scene
                        key="luckyDraw"
                        component={LuckyDraw}
                        title="luckyDraw"
                        icon={TabIcon}
                        iconName="wifi-tethering"
                        iconSize={24}
                        />
                    <Scene
                        key="guideline"
                        component={Guideline}
                        title="guideline"
                        icon={TabIcon}
                        iconName="wifi-tethering"
                        iconSize={24}
                        />
                </Scene>
            </Scene>
        </RouterWithRedux>
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

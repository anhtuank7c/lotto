import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import IntroApp from './components/IntroApp';
import NewsList from './components/NewsList';

const RouterComponent = () => (
    <Router>
        <Scene key="auth">
            <Scene key="intro_app" component={IntroApp} hideNavBar initial />
        </Scene>
        <Scene key="main" initial>
            <Scene key="news_list" component={NewsList} initial />
        </Scene>
    </Router>
);

export default RouterComponent;

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { AsyncStorage } from 'react-native';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import io from 'socket.io-client';

import IntroApp from './components/IntroApp';
import NewsList from './components/NewsList';

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

const RouterComponent = () => (
    <Router>
        <Scene key="auth">
            <Scene key="intro_app" component={IntroApp} hideNavBar initial />
        </Scene>
        <Scene key="main" initial hideNavBar>
            <Scene key="news_list" component={NewsList} initial app={app} />
        </Scene>
    </Router>
);

export default RouterComponent;

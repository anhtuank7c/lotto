import React from 'react';
import { Router, Scene, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';

// import IntroApp from './components/IntroApp';
import SignIn from './components/SignIn';
import NewsList from './components/NewsList';
import NavigationDrawer from './components/NavigationDrawer';

import { Spinner } from './components/common';

const reducerCreate = (params) => (state, action) => Reducer(params)(state, action);

const RouterComponent = ({ loading, needSignIn, app }) => (
    loading ?
        <Spinner size="large" /> :
        <Router createReducer={reducerCreate}>
            <Scene key="sidebar" component={NavigationDrawer}>
                <Scene
                    key="news_list"
                    component={NewsList}
                    title="News List"
                    app={app}
                    initial={!needSignIn}
                    type="replace"
                    />

                <Scene
                    key="auth_sign_in"
                    component={SignIn}
                    app={app}
                    initial={needSignIn}
                    type="reset"
                    hideNavBar
                    hideTabBar
                    />
            </Scene>
        </Router>
);

// ownProps is props of this component transfered from parent component
const mapStateToProps = (state, ownProps) => ({
    loading: !state.storage.storageLoaded,
    needSignIn: !ownProps.app.get('token'),
    app: ownProps.app
});

export default connect(mapStateToProps)(RouterComponent);

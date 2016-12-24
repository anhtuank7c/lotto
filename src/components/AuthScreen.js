import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class AuthScreen extends Component {
    componentWillUnmount() {
        Actions.currentRouter = null;
    }

    render() {
        return (<Text>aaa</Text>);
    }
}

export default AuthScreen;

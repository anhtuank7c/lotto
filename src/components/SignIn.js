import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { CardSection, Input, Button, Spinner, Link } from './common';
import { signIn } from '../actions';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    onSignUpPress() {
        Actions.sign_up();
    }

    onSignInPress() {
        const { email, password } = this.state;
        const { app } = this.props;
        this.props.signIn({ email, password, app });
    }

    render() {
        const {
            container,
            signInStyle,
            signUp,
            signUpLink,
            inputStyle,
            signInButton,
            signInButtonText,
        } = styles;

        return (
            <View style={container}>
                <View style={signInStyle}>
                    <CardSection style={inputStyle}>
                        <Input
                            label="Email"
                            placeholder="your_email@example.com"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            />
                    </CardSection>
                    <CardSection style={inputStyle}>
                        <Input
                            label="Password"
                            placeholder="your password"
                            secureTextEntry
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            />
                    </CardSection>
                    <CardSection style={inputStyle}>
                        <Button
                            btnStyle={signInButton}
                            textStyle={signInButtonText}
                            onPress={this.onSignInPress.bind(this)}
                            >
                            Sign in
                        </Button>
                    </CardSection>
                </View>
                <View style={signUp}>
                    <Link
                        title="Don't have account?"
                        textLinkStyle={signUpLink}
                        onPress={this.onSignUpPress.bind(this)}
                        />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingLeft: 15,
        paddingRight: 15,
    },
    signInStyle: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
    },
    signInButton: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#3f51b5',
    },
    signInButtonText: {
        color: '#3f51b5'
    },
    inputStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    signUp: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    signUpLink: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { signIn })(SignIn);

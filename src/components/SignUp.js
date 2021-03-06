import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { CardSection, Input, Button, Spinner, Link } from './common';
import { signUp, dismissAlert } from '../actions';

class SignUp extends Component {

    state = {
        email: '',
        password: ''
    }

    onTermsPress() {
        Actions.terms_and_conditions();
    }

    onSignInPress() {
        const { email, password } = this.state;
        this.props.signIn({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        const {
            signInButton,
            signInButtonText,
            buttonStyle
        } = styles;
        return (
            <CardSection style={buttonStyle}>
                <Button
                    btnStyle={signInButton}
                    textStyle={signInButtonText}
                    onPress={this.onSignInPress.bind(this)}
                    >
                    Sign Up
                        </Button>
            </CardSection>
        );
    }

    render() {
        const {
            container,
            signInStyle,
            linkContainer,
            link,
            inputStyle,
        } = styles;
        const { error } = this.props;
        if (error !== undefined) {
            Alert.alert('Oops, something went wrong!', error, [
                {
                    text: 'Ok',
                    onPress: () => {
                        this.props.dismissAlert();
                    }
                }
            ]);
        }

        return (
            <View style={container}>
                <View style={signInStyle}>
                    <CardSection style={inputStyle}>
                        <Input
                            label="Email"
                            labelStyle={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            placeholder="Your email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            />
                    </CardSection>
                    <CardSection style={inputStyle}>
                        <Input
                            label="Password"
                            labelStyle={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            placeholder="your password"
                            secureTextEntry
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            />
                    </CardSection>
                    {this.renderButton()}
                </View>
                <View style={linkContainer}>
                    <Link
                        title="Sign in"
                        textLinkStyle={link}
                        onPress={this.onTermsPress.bind(this)}
                        />
                    <Link
                        title="Terms and conditions"
                        textLinkStyle={link}
                        onPress={this.onTermsPress.bind(this)}
                        />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#009688',
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
        borderColor: '#fff',
    },
    signInButtonText: {
        color: '#fff'
    },
    inputStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderBottomWidth: 0,
    },
    linkContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    buttonStyle: {
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderBottomWidth: 0
    }
};

const mapStateToProps = (state) => {
    const { error, loading } = state.auth;
    return { error, loading };
};

export default connect(mapStateToProps, { signUp, dismissAlert })(SignUp);

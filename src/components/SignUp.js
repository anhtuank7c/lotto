import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { signUp } from '../actions';

import { CardSection, Input, Button, Spinner } from './common';

class SignUp extends Component {
    state = {
        fullName: '',
        phone: '',
        email: '',
        password: '',
        repassword: ''
    }

    onSignUpPress() {
        const { fullName, phone, email, password } = this.state;
        const { app } = this.props;
        this.props.signUp({ fullName, phone, email, password, app });
    }

    onSignInPress() {
        Actions.sign_in();
    }

    render() {
        const {
            container,
            inputStyle,
            signUpBtn,
            signUpBtnText,
        } = styles;

        return (
            <View style={container}>
                <CardSection style={inputStyle}>
                    <Input
                        label="Full name"
                        placeholder="Enter your name"
                        autoCorrect={false}
                        value={this.state.fullName}
                        onChangeText={(fullName) => this.setState({ fullName })}
                        />
                </CardSection>
                <CardSection style={inputStyle}>
                    <Input
                        label="Phone"
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="phone-pad"
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })}
                        />
                </CardSection>
                <CardSection style={inputStyle}>
                    <Input
                        label="Email"
                        placeholder="your_email@example.com"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        />
                </CardSection>
                <CardSection style={inputStyle}>
                    <Input
                        label="Password"
                        placeholder="your password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        />
                </CardSection>
                <CardSection style={inputStyle}>
                    <Input
                        label="Confirm Password"
                        placeholder="your password"
                        secureTextEntry
                        value={this.state.repassword}
                        onChangeText={(repassword) => this.setState({ repassword })}
                        />
                </CardSection>
                <CardSection style={[inputStyle]}>
                    <Button btnStyle={signUpBtn} textStyle={signUpBtnText} onPress={this.onSignUpPress.bind(this)}>Sign up</Button>
                </CardSection>
            </View >
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
    signIn: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ddd',
        paddingBottom: 50,
    },
    signUpBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#3f51b5',
    },
    signUpBtnText: {
        color: '#3f51b5'
    },
    inputStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    signUpStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    signInLink: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
};

const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        auth
    };
};

export default connect(mapStateToProps, { signUp })(SignUp);

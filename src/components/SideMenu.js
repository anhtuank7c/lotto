import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { MenuItem, CardSection } from './common';
import { openDrawer, closeDrawer } from '../actions';

class MenuSide extends Component {
    onProfilePress() {
        this.props.closeDrawer();
        Actions.profile();
    }

    render() {
        const {
            containerStyle,
            profileContainerStyle,
            profileInfoStyle,
            profileNameStyle,
            profileSubInfoStyle,
            ownerContainerStyle
        } = styles;

        return (
            <View style={containerStyle}>

                <CardSection style={profileContainerStyle}>
                    <TouchableOpacity onPress={this.onProfilePress.bind(this)}>
                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/3163410?v=3&s=120' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    </TouchableOpacity>
                    <View style={profileInfoStyle}>
                        <Text style={profileNameStyle}>Tuấn Tinh Tế</Text>
                        <Text style={profileSubInfoStyle}>Play: 10 Win: 0</Text>
                    </View>
                </CardSection>

                <MenuItem
                    iconName="account-circle"
                    iconSize={30}
                    onPress={this.onProfilePress.bind(this)}>
                    Profile
                </MenuItem>
                <MenuItem iconName="settings" iconSize={30}>Settings</MenuItem>
                <MenuItem iconName="help-outline" iconSize={30}>Faq</MenuItem>

                <CardSection style={ownerContainerStyle}>
                    <Text>
                        Programmer: Anh Tuan Nguyen
                    </Text>
                    <Text>
                        Github: github.com/anhtuank7c
                    </Text>
                    <Text>
                        Email: anhtuank7c@hotmail.com
                    </Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
    },
    profileContainerStyle: {
        backgroundColor: 'purple',
        alignItems: 'center',
        height: 180,
        paddingLeft: 15,
    },
    profileInfoStyle: {
        flexDirection: 'column',
        width: 170,
        paddingLeft: 15,
    },
    profileNameStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    profileSubInfoStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13,
        fontWeight: '300',
        marginTop: 5,
    },
    ownerContainerStyle: {
        flexDirection: 'column',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default connect(null, {
    openDrawer,
    closeDrawer
})(MenuSide);

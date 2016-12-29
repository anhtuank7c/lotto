import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { MenuItem, CardSection } from './common';
import { openDrawer, closeDrawer, signOut } from '../actions';

class MenuSide extends Component {
    onProfilePress() {
        this.props.closeDrawer();
        Actions.profile();
    }

    onSignOutPress() {
        this.props.signOut();
        // this.props.closeDrawer();
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
        const { win, play } = this.props;
        const { displayName } = 'Anh Tuan';
        // const { displayName } = this.props.auth.user;
        return (
            <View style={containerStyle}>

                <CardSection style={profileContainerStyle}>
                    <TouchableOpacity onPress={this.onProfilePress.bind(this)}>
                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/3163410?v=3&s=120' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    </TouchableOpacity>
                    <View style={profileInfoStyle}>
                        <Text style={profileNameStyle}>{displayName}</Text>
                        <Text style={profileSubInfoStyle}>Play: {play} Win: {win}</Text>
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
                <MenuItem iconName="arrow-back" iconSize={30} onPress={this.onSignOutPress.bind(this)}>Sign out</MenuItem>

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

const mapStateToProps = (state) => {
    const { statistic, auth } = state;
    return { win: statistic.win, play: statistic.play, auth };
};

export default connect(mapStateToProps, {
    openDrawer,
    closeDrawer,
    signOut
})(MenuSide);

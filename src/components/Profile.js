import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class Profile extends Component {
    render() {
        return (
            <CardSection>
                <View>
                    <Text>Name right here</Text>
                </View>
            </CardSection>
        );
    }
}

export default Profile;

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CardSection } from './common';

class Setting extends Component {
    render() {
        return (
            <CardSection>
                <View>
                    <Text>Setting options</Text>
                </View>
            </CardSection>
        );
    }
}

export default Setting;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class LuckyDraw extends Component {
    render() {
        return (
            <CardSection>
                <View>
                    <Text>LuckyDraw</Text>
                </View>
            </CardSection>
        );
    }
}

export default LuckyDraw;

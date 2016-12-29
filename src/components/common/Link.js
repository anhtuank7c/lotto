import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Link = ({ title, onPress, style }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={[styles.textLinkStyle, style]}>{title}</Text>
    </TouchableOpacity>
);

const styles = {
    textLinkStyle: {
        color: '#fff',
        textDecorationLine: 'underline'
    }
};

export { Link };

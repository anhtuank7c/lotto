import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Link = ({ title, onPress, textLinkStyle }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={[styles.textStyle, textLinkStyle]}>{title}</Text>
    </TouchableOpacity>
);

const styles = {
    textStyle: {
        color: '#3f51b5',
        textDecorationLine: 'underline'
    }
};

export { Link };

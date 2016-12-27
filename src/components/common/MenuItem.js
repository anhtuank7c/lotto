import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CardSection } from './CardSection';

const propsType = {
    selected: PropTypes.bool,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
    children: PropTypes.any,
    sectionStyle: PropTypes.any,
    onPress: PropTypes.func
};

const MenuItem = (props) => {
    const { iconName, iconSize, children, sectionStyle, onPress, selected } = props;
    const { container, childrenStyle } = styles;
    const selectedStyle = { color: selected ? 'purple' : 'black' };
    return (
        <TouchableOpacity onPress={onPress}>
            <CardSection style={[container, sectionStyle]}>
                <Icon name={iconName} size={iconSize} style={selectedStyle} />
                <Text style={[childrenStyle, selectedStyle]}>{children}</Text>
            </CardSection>
        </TouchableOpacity>
    );
};

MenuItem.propsType = propsType;
const styles = {
    container: {
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    childrenStyle: {
        paddingLeft: 10
    }
};

export { MenuItem };

import React, {
    PropTypes,
} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
};

const TabIcon = (props) => {
    const { containerStyle } = styles;
    const { title, selected, iconName, iconSize } = props;
    const color = { color: (selected ? 'purple' : 'black') };
    return (
        title ?
            <View style={containerStyle}>
                <Icon name={iconName} size={iconSize} style={color} />
                <Text style={color}>{title}</Text>
            </View > :
            <View style={containerStyle}>
                <Icon name={iconName} size={iconSize} style={color} />
            </View >

    );
};

TabIcon.propTypes = propTypes;
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {

    },
    titleStyle: {

    }
};

export { TabIcon };

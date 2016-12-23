import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';

class IntroApp extends Component {

    componentWillMount() {
        this.props.fetchNews();
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Intro App</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { news, error } = state;
    return {
        news,
        error
    };
};

export default connect(mapStateToProps, {
    fetchNews
})(IntroApp);

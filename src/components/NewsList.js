import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchNews } from '../actions';

class NewsList extends Component {

    componentWillMount() {
        const app = this.props.app;
        this.props.fetchNews({ app });
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ news }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(news);
    }

    renderRow(news) {
        return (
            <View>
                <Text>{news.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow} />
        );
    }
}

const mapStateToProps = (state) => {
    const news = state.news;
    return { news };
};

export default connect(mapStateToProps, {
    fetchNews
})(NewsList);

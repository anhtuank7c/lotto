import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchNews } from '../actions';

class NewsList extends Component {

    componentWillMount() {
        this.props.fetchNews();
        this.createDataSource(this.props.news);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps);
    // }

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
    console.log('mapStateToProps', state.news);
    const newsList = _.map(state.news, (news, i) => {
        let id = news.get('id');
        let title = news.get('title');
        let preview = news.get('prevew');
        let content = news.get('content');
        let createdAt = news.get('createdAt');
        return { id, title, preview, content, createdAt };
    });

    return { news: newsList };
};

export default connect(mapStateToProps, {
    fetchNews
})(NewsList);

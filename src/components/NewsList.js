import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

import { fetchNews } from '../actions';

class NewsList extends Component {

    componentWillMount() {
        const { conn } = this.props.db;

        this.props.fetchNews({ conn });
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
            <CardSection>
                <Text>{news.title}</Text>
            </CardSection>
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

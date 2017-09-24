import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { appConstant } from '../config/constants'

var apikey = `client_id=${appConstant.client_id}&client_secret=${appConstant.client_secret}`,
    url = `${appConstant.baseUrl}/madhankumar028?/${apikey}`;

export default class About extends React.Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        this.state = {
            user: null,
            dataSource: ds.cloneWithRows(['row1', 'row2']),
        };
    }

    componentWillMount() {
        this.fetchUser(url);
    }

    fetchUser(url) {

        fetch(url)
            .then(response => response.json())
            .then(data => data)
            .then(user => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(user)
                });
                this.setState.user = user;
                console.log(user)
            });
    }

    renderLoadingView() {
        console.log(this.state.user);
        return (
            <View style={styles.container}>
                <Text>Loading ...</Text>
            </View>
        );
    }

    renderUser() {
        return (
            <View style={styles.container}>
                <Text>{this.state.user.login}</Text>
            </View>
        );
    }

    render() {
        if (!this.state.user) return this.renderLoadingView();

        if (this.state.user) return this.renderUser();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

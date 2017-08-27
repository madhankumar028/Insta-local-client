import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.fetchAsyncUser();
    }

    async fetchAsyncUser() {

        var client_id = 'b7641fc061fbc7eba0ae',
            client_secret = '582f452b977885775b36fd81d8bfe51a5d48e59d',
            apikey = `client_id="${client_id}&client_secret="${client_secret}"`,
            baseUrl = 'https://api.github.com/users',
            url = `${baseUrl}/madhankumar028?${apikey}`;

        try {
            let response = await fetch(url);
            let data = await response.json();

            console.log(data);

            this.setState.user = data;
        } catch (e) {
            console.log(e);
        }
    }

    renderLoadingView() {
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

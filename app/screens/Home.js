/**
 * Insta-local app
 * author @madhankumarj
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

const CLIENT_ID = '74a29683d9694711abed5e9b7d629090',
    baseUrl = 'https://api.instagram.com/v1/media/';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: false,
            distance: 1,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false
        };
    }

    componentDidMount() {
        this.getCurrentPosition();
    }

    componentDidUpdate(prevProps, prevState) {
        // if (!prevState.position && this.state.position) {
        //     this.fetchUserAsync();
        // }
    }

    fetchUser() {
        const lat = this.state.position.coords.latitude;
        const lng = this.state.position.coords.longitude;
        const distance = Math.round(this.state.distance * 1000);

        fetch(`${baseUrl}search?lat=${lat}&lng=${lng}&distance=${distance}&client_id=${CLIENT_ID}`)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded: true
                });
            })
            .done();
    }

    fetchUserAsync() {

        var client_id = 'b7641fc061fbc7eba0ae',
            client_secret = '582f452b977885775b36fd81d8bfe51a5d48e59d',
            apikey = `client_id="${client_id}&client_secret="${client_secret}"`,
            baseUrl = 'https://api.github.com/users',
            url = `${baseUrl}/madhankumar028?${apikey}`;

        // try {
        //     let response = await fetch(url);
        //     var data = await response.json();
        //     console.log(data);
        // } catch (e) {
        //     console.log(e);
        // }
    }

    retryAlert(error = false) {
        console.log('LOCALIZATION ERRROR', error);

        AlertIOS.alert(
            'Localization Error',
            'Couldn\'t fetch your current localization. Retry?',
            [
                { text: 'Yes', onPress: () => this.getCurrentPosition() },
                { text: 'No', onPress: () => console.log('No') },
            ]
        )
    }

    getCurrentPosition() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ position }),
            this.retryAlert,
            options);
    }

    render() {
        if (!this.state.position) return this.renderLoadingView();

        if (this.state.position) return this.renderPics();
    }

    renderPics() {
        return (
            <View style={styles.container}>
                <Text>Instagram Client to get the local insta users photo</Text>
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Loading ...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

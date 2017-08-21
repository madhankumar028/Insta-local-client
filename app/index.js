/**
 * Insta-local app
 * author @madhankumarj
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Text>Instagram Client to get the local insta users photo</Text>
            </View>
        );
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
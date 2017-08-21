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
import { Tabs } from './config/router';

export default class App extends React.Component {
    render() {
        return <Tabs />;
    }
}

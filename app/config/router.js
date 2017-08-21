import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import About from '../screens/About';

export const Tabs = TabNavigator({
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({ tintcolor }) => <Icon name="account-circle" size={35} color="{tintcolor}" />
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintcolor }) => <Icon name="list" size={35} color="{tintcolor}" />
        }
    }
});

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
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Menú</Text>
                <Text style={styles.instructions}>Estilo hamburguesa.</Text>
                <Text>mola</Text>
            </View>
        );
    }
}

const myApp = DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingScreen
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        textDecorationLine: "underline",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

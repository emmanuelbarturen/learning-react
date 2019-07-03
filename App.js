import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
/*import {Container, Header, Body, Content} from 'native-base'*/

 class App extends Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});
export default createAppContainer(AppNavigator);
/*customize left menu*/
/*const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200, backgroundColor: 'red'}}>
            <Body>
                <Image
                    style={styles.drawerImage}
                    source={require('./assets/React_logo.png')}/>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
);*/

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
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
});

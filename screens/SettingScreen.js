import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left style={{flex: 1, flexDirection: 'row'}}>
                        <Icon ios='ios-menu' android="md-menu" style={{backgroundColor:'transparent',width:50}}
                              onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <Content>
                    <Text>Setting Screen</Text>
                </Content>
            </Container>
        );
    }
}
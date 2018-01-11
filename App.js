/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, Left, Button, Icon, Right, Body, Title, H1 } from 'native-base';

const instructions = Platform.select({
  ios: 'Clique no círculo para adicionar um pedaço\n' + '',
  android: 'Clique no círculo para adicionar um pedaço\n' + '',
});

const pedacos = 0;

export default class App extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
  
    adicionar = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    
    zerar = () => {
        this.setState({
            count: 0
        })
    }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
            <View style={styles.header_bar}>
                <Image style={styles.app_logo} source={require('./img/img-pizza.png')} />
                <H1 style={styles.app_title}>Contador de{"\n"} pedaços de pizza</H1>
            </View>
            <View  style={styles.content_view}>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Text style={styles.pedacos} onPress={this.adicionar}>{ this.state.count }</Text>
                        
                <TouchableHighlight style={styles.btn_zerar} onPress={this.zerar}>
                    <Text style={styles.txt_btn_zerar}>Zerar</Text>
                </TouchableHighlight>
            </View>
        </Content>
      </Container>
    );
  }
}

{/*<Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.app_title}><Icon style={styles.icon_title} name='pizza' /> Bem Vindo!</Title>
          </Body>
        </Header>*/}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: '#222',
    },
    icon_title: {
        color: '#fff',
    },
    title_top: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    header_bar: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#b80000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    app_title: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 15,
    },
    app_logo: {
        height: 60,
        width: 60,
        marginTop: 15,
    },
    instructions: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 25,
        marginBottom: 5,
    },
    pedacos: {
        width: 120,
        height: 120,
        color: '#fff',
        lineHeight: 85,
        fontSize: 36,
        borderRadius: 60,
        textAlign: 'center',
        backgroundColor: '#2b2b2b',
        borderWidth: 3,
        borderColor: '#90feff',
        marginTop: 20,
        marginBottom: 30,
    },
    btn_zerar: {
        width: 60,
        borderRadius: 2,
        //width: 20;
        flex: 1,
        alignItems: 'center',
        padding: 10,
        //alignSelf: 'stretch',
        backgroundColor: 'red',
    },
    txt_btn_zerar: {
        fontSize: 16,
        borderRadius: 2,
        color: '#fff',
    },
});

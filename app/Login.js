

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigaator,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

 class Login extends Component {

  onButtonPress(){
    this.props.navigator.push({
      id: 'Home'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Mirësevini në tregomshqip
        </Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}

        />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <TouchableHighlight  onPress={this.onButtonPress.bind(this)} style={styles.loginButton}>
          <Text>
            LOGIN
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  loginButton: {
    textAlign: 'center',
    color: '#E37D28',
  },
});

module.exports = Login;

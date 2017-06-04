/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var Login = require ('./app/Login');
var Home = require ('./app/Home');
var Question = require ('./app/Question');

global.ipv4='172.16.99.196';

export default class tregomshqip extends Component {
  render() {
    return (
      <Navigator
      initialRoute={{
        id: 'Login'
      }}
      renderScene={
        this.navigatorRenderScene
      }
      />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator=navigator;
    switch(route.id){
      case 'Login' :
        return(<Login navigator={navigator} title="Login"/>);
      case 'Home' :
        return(<Home navigator={navigator} title="Home"/>);
      case 'Question' :
          return(<Question navigator={navigator} title="Question"/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E37D28',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  body: {
    flex: 7,
    backgroundColor: '#F3F3F3',
  },
  bodyQuestion: {
    height: 200,
    alignSelf: 'stretch',
    backgroundColor: '#FEFEFE',
    marginTop:10,
  },
  bodyQuestionHeader: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bodyQuestionHeaderUser: {
    fontSize: 17,
    color: '#7b7984',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginLeft:10,
  },
  bodyQuestionHeaderTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:50,
  },
  bodyQuestionContent: {
    flex:2,
    flexDirection: 'column',
    marginTop:15,
  },
  bodyQuestionContentTitle: {
    fontSize: 20,
    color: '#7b7984',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginLeft:10,

  },
  bodyQuestionContentContent: {
    marginTop: 10,
    fontSize: 15,
    color: '#7b7984',
    fontFamily: 'Arial',
    marginLeft:10,
  },
  bodyQuestionFooter: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bodyQuestionFooterUpvote: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:60,
  },
  bodyQuestionFooterDownvote: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:60,
  },
  bodyQuestionFooterComment: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:60,
  },
  bodyQuestionFooterText: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#7b7984',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
  },
});

AppRegistry.registerComponent('tregomshqip', () => tregomshqip);

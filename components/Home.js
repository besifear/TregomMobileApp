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
  TouchableHighlight,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  onButtonPress(){
    this.props.navigator.push({
      id: 'Login'
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Icon name={'md-search'} size={40} color={'white'}  />
          <Text style={styles.headerTitle}>
            TREGOM LOGO
          </Text>
          <Icon name={'md-list'} size={40} color={'white'}/>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyQuestion}>
            <View style={styles.bodyQuestionHeader}>
              <Icon name={'ios-contact'} size={50} color={'#2c3e50'}  />
              <Text style={styles.bodyQuestionHeaderUser}>
                James Wilson
              </Text>
              <Text style={styles.bodyQuestionHeaderCategory}>
                Teknologji
              </Text>
              <View style={styles.bodyQuestionHeaderTime}>
                <Icon name={'md-time'} size={30} color={'#2c3e50'}/>
                <Text style={styles.bodyQuestionheaderTitle}>
                  2h
                </Text>
              </View>
            </View>
            <View style={styles.bodyQuestionContent}>
              <Text style={styles.bodyQuestionContentTitle}>
                Logaritmi negativ
              </Text>
              <Text style={styles.bodyQuestionContentContent}>
                Pse nuk ka logaritem negativ ?
              </Text>
            </View>
            <View style={styles.bodyQuestionFooter}>
              <View style={styles.bodyQuestionFooterUpvote}>
                <Icon name={'ios-arrow-up'} size={30} color={'#f39c12'}  />
                <Text>
                  2k
                </Text>
              </View>
              <View style={styles.bodyQuestionFooterDownvote}>
                <Icon name={'ios-arrow-down'} size={30} color={'#CCCCCC'}/>
                <Text style={styles.bodyQuestionFooterText}>
                  50
                </Text>
              </View>
              <View style={styles.bodyQuestionFooterComment}>
                <Icon name={'md-chatboxes'} size={25} color={'#CCCCCC'}/>
                <Text>
                  87
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bodyQuestion}>
            <View style={styles.bodyQuestionHeader}>
              <Icon name={'ios-contact'} size={50} color={'#2c3e50'}  />
              <Text style={styles.bodyQuestionHeaderUser}>
                James Wilson
              </Text>
              <Text style={styles.bodyQuestionHeaderCategory}>
                Teknologji
              </Text>
              <View style={styles.bodyQuestionHeaderTime}>
                <Icon name={'md-time'} size={30} color={'#2c3e50'}/>
                <Text style={styles.bodyQuestionheaderTitle}>
                  2h
                </Text>
              </View>
            </View>
            <View style={styles.bodyQuestionContent}>
              <Text style={styles.bodyQuestionContentTitle}>
                Logaritmi negativ
              </Text>
              <Text style={styles.bodyQuestionContentContent}>
                Pse nuk ka logaritem negativ ?
              </Text>
            </View>
            <View style={styles.bodyQuestionFooter}>
              <View style={styles.bodyQuestionFooterUpvote}>
                <Icon name={'ios-arrow-up'} size={30} color={'#f39c12'}  />
                <Text>
                  2k
                </Text>
              </View>
              <View style={styles.bodyQuestionFooterDownvote}>
                <Icon name={'ios-arrow-down'} size={30} color={'#CCCCCC'}/>
                <Text style={styles.bodyQuestionFooterText}>
                  50
                </Text>
              </View>
              <View style={styles.bodyQuestionFooterComment}>
                <Icon name={'md-chatboxes'} size={25} color={'#CCCCCC'}/>
                <Text>
                  87
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Icon name={'ios-list-box-outline'} size={40} color={'#2c3e50'}  />
          <Icon name={'ios-chatboxes-outline'} size={40} color={'#2c3e50'}  />
          <Icon name={'ios-add-circle'} size={50} color={'#f39c12'}/>
          <Icon name={'ios-notifications-outline'} size={40} color={'#2c3e50'}/>
          <TouchableHighlight  onPress={this.onButtonPress.bind(this)} >
            <Icon name={'ios-person-outline'} size={40} color={'#2c3e50'}/>
          </TouchableHighlight>
        </View>
      </View>
    );
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
    backgroundColor: '#f39c12',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  body: {
    flex: 7,
    backgroundColor: '#ecf0f1',
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
    color: '#2c3e50',
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
    color: '#2c3e50',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginLeft:10,

  },
  bodyQuestionContentContent: {
    marginTop: 10,
    fontSize: 15,
    color: '#2c3e50',
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
    color:'#2c3e50',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
  },
});

module.exports = Home;

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Picker,
  Item,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

var start = Date.now();

class QuestionForm extends Component {

  constructor(){
    super();

    this.state = {
      title: "",
      content: "",
      category: "",
      error: "",
    }
  }

 onButtonPress(){
   global.user=null;
   this.props.navigator.push({
     id: 'Login'
   });
 }
 onButtonPressIndex(){
   global.user=null;
   this.props.navigator.push({
     id: 'Home'
   });
 }
 onButtonPressQuestionForm(){
   global.user=null;
   this.props.navigator.push({
     id: 'QuestionForm'
   });
 }


  render() {
      console.log('shit');
    return (

      <View style={styles.container}>

      <View style={styles.header}>
        <Icon style={styles.headerIcons} name={'md-arrow-back'} size={30} color={'white'}  />
        <Image style={styles.logo} source={require('../public/img/moblogo.png')}/>
        <Icon style={styles.headerIcons} name={'md-settings'} size={30} color={'white'}/>
      </View>

        <View style={styles.body}>
            <Image source={require('../public/img/profilebg.png')} style={styles.bodyHeader}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={require('../public/img/profilepicture.png')}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoContainerUsername}>Username</Text>
                    <Text style={styles.infoContainerDescription}>description of shit goes here</Text>
                </View>
            </Image>
            <View style={styles.bodyContent}>

            </View>






        </View>
        <View elevation={10} style={styles.footer}>
          <TouchableHighlight onPress={this.onButtonPressIndex.bind(this)} >
            <Icon name={'ios-list-box-outline'} size={30} color={'#2c3e50'}  />
          </TouchableHighlight>
          <Icon name={'ios-chatboxes-outline'} size={30} color={'#2c3e50'}  />
          <TouchableHighlight onPress={this.onButtonPressQuestionForm.bind(this)} >
            <Icon name={'ios-add-circle'} size={40} color={'#f39c12'}/>
          </TouchableHighlight>
            <Icon name={'ios-notifications-outline'} size={30} color={'#2c3e50'}/>
          <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
            <Icon name={'ios-person-outline'} size={30} color={'#2c3e50'}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bodyQuestion: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#FEFEFE',
      marginTop:10,
      marginBottom:10,
    },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f39c12',
  },
  headerIcons: {
      padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  body: {
    flex: 10,
    backgroundColor: '#ecf0f1',
  },
  bodyHeader: {
    width: Dimensions.get('window').width,
    flex: 2
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  avatar: {
      width: 100,
      height: 100,
      borderColor: 'white',
      borderRadius: 5,
      borderWidth: 4
  },
  infoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 20
  },
  infoContainerUsername: {
      fontSize: 18
  },
  infoContainerDescription: {
      fontSize: 14,
      color: 'gray'
  },
  bodyContent: {
    flex: 3,
    backgroundColor: 'white',
  },
  labels: {
    fontSize: 17,
    color: '#2c3e50',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  formContainerView: {
    padding:20,
  },
  titleInput: {
		height: 40,
		backgroundColor: '#FEFEFE',
		marginBottom: 20,
		color: '#2c3e50',
		paddingHorizontal: 10,
    fontSize:15,
	},
  contentInput: {
		height: 160,
		backgroundColor: '#FEFEFE',
		marginBottom: 20,
		color: '#2c3e50',
		paddingHorizontal: 10,
    fontSize:15,
	},
	buttonContainer: {
		backgroundColor: '#f39c12',
		paddingVertical: 15,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
    fontSize: 15,
	},
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
  }
});

module.exports = QuestionForm;

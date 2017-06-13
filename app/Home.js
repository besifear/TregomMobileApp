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
  Picker,
  Item,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var start = Date.now();

class Home extends Component {


    constructor(){
            super();
             const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
             this.state = {
                questionDataSource: ds,
             }
        }

        componentDidMount(){
            this.fetchQuestions();
        }

        fetchQuestions(){
            fetch('http://'+global.ipv4+'/api/v1/questions')
                .then((response) => response.json())
                .then((response) => {
                    this.setState({
                        questionDataSource: this.state.questionDataSource.cloneWithRows(response.data)
                    });
                })
        }

            renderRow(question, sectionId, rowId, highlightRow){
                return (
                    <View style={styles.bodyQuestion}>
                                <View style={styles.bodyQuestionFirstRow}>
                                    <Text maxLength={10} style={styles.bodyQuestionHeaderCategory}>
                                      {question.category.name}
                                    </Text>
                                    <View style={styles.bodyQuestionHeaderTime}>
                                      <Text style={styles.bodyQuestionHeaderTimeText}>
                                        {question.diff_for_humans}
                                      </Text>
                                      <Icon name={'md-time'} size={12} color={'#2c3e50'}/>
                                    </View>
                                </View>
                                  <View style={styles.bodyQuestionHeader}>
                                    <Icon name={'ios-contact'} size={17} color={'#2c3e50'}  />
                                    <Text style={styles.bodyQuestionHeaderUser}>
                                      {question.user.username}
                                    </Text>
                                  </View>
                                  <View style={styles.bodyQuestionContent}>
                                  <TouchableHighlight  onPress={()=>this.onButtonPressQuestion(question.id)} >
                                    <Text numberOfLines={1} style={styles.bodyQuestionContentTitle}>
                                        {question.title}
                                    </Text>
                                    </TouchableHighlight>
                                    <Text numberOfLines={3} style={styles.bodyQuestionContentContent}>
                                        {question.content}
                                    </Text>
                                  </View>
                                  <View style={styles.bodyQuestionFooter}>
                                    <View style={styles.bodyQuestionFooterUpvote}>
                                      <Icon name={'ios-arrow-up'} size={30} color={'#f39c12'}  />
                                      <Text>
                                        {question.up_votes.length}
                                      </Text>
                                    </View>
                                    <View style={styles.bodyQuestionFooterDownvote}>
                                      <Icon name={'ios-arrow-down'} size={30} color={'#CCCCCC'}/>
                                      <Text style={styles.bodyQuestionFooterText}>
                                        {question.down_votes.length}
                                      </Text>
                                    </View>
                                    <View style={styles.bodyQuestionFooterComment}>
                                      <Icon name={'md-chatboxes'} size={25} color={'#CCCCCC'}/>
                                      <Text>
                                        {question.all_answers.length}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                );
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

 onButtonPressQuestion(questionId){
   console.log(questionId);
   global.user=null;
   global.questionId=questionId;
   this.props.navigator.push({
     id: 'Question'
   });
 }

 onButtonPressProfile() {
     console.log('hello hi');
     global.user=null;
     this.props.navigator.push({
       id: 'Profile'
     });
 }



  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Icon style={styles.headerIcons} name={'md-search'} size={30} color={'white'}  />
          <Image style={styles.logo} source={require('../public/img/moblogo.png')}/>
          <Icon style={styles.headerIcons} name={'md-list'} size={30} color={'white'}/>
        </View>
        <View style={styles.body}>
          <ListView   //ex ScrollView
          style={styles.bodyScroll}
          dataSource={this.state.questionDataSource}
          renderRow={this.renderRow.bind(this)}
          />
        </View>

        <View elevation={10} style={styles.footer}>
          <TouchableHighlight onPress={this.onButtonPressIndex.bind(this)} >
            <Icon name={'ios-list-box-outline'} size={30} color={'#2c3e50'}  />
          </TouchableHighlight>
          <Icon name={'ios-chatboxes-outline'} size={30} color={'#2c3e50'}  />
          <TouchableHighlight onPress={this.onButtonPressQuestionForm.bind(this)} >
            <Icon name={'ios-add-circle'} size={40} color={'#f39c12'}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
            <Icon name={'ios-notifications-outline'} size={30} color={'#2c3e50'}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onButtonPressProfile.bind(this)}>
            <Icon name={'ios-person-outline'} size={30} color={'#2c3e50'}/>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f39c12',
  },
  headerIcons: {
      padding: 15,
  },
  logo: {

  },
  body: {
    flex: 10,
    backgroundColor: '#ecf0f1',
  },
  bodyScroll: {
    flex:1,
  },
  bodyQuestion: {
    height: 190,
    alignSelf: 'stretch',
    backgroundColor: '#FEFEFE',
    marginTop:10,
  },
  bodyQuestionFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  bodyQuestionHeaderCategory: {
    fontSize: 12,
  },
  bodyQuestionHeader: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
  },
  bodyQuestionHeaderUser: {
    fontSize: 15,
    color: '#2c3e50',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    paddingLeft: 5,
  },
  bodyQuestionHeaderTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyQuestionHeaderTimeText: {
    fontSize: 12,
    paddingRight: 5,
  },
  bodyQuestionContent: {
    flex:3,
    flexDirection: 'column',
  },
  bodyQuestionContentTitle: {
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginHorizontal: 15,
  },
  bodyQuestionContentContent: {
    marginTop: 10,
    fontSize: 15,
    color: '#2c3e50',
    fontFamily: 'Arial',
    marginHorizontal: 15,
  },
  bodyQuestionFooter: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
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

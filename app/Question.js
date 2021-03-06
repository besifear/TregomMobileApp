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
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var start = Date.now();

class Question extends Component {


    constructor(){
            super();
             const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
             this.state = {
                questionDataSource: ds,
                answerDataSource: ds,
                myAnswer: '',
             }
        }

        componentDidMount(){

            this.fetchQuestions();
        }

        fetchQuestions(){
            fetch('http://192.168.214.2/api/v1/questions/'+global.questionId)
                .then((response) => response.json())
                .then((response) => {
                    this.setState({
                        questionDataSource: this.state.questionDataSource.cloneWithRows([response[0]])
                    });
                    this.setState({
                      answerDataSource: this.state.answerDataSource.cloneWithRows(response[0].all_answers_with_user)
                    });
                });
        }

        renderRowAnswer(answer, sectionId, rowId, highlightRow){
            return (
              <View style={styles.bodyQuestion}>
                <View style={styles.bodyQuestionContent}>
                  <Text style={styles.bodyQuestionHeaderUser}>
                    Perdoruesi: {answer.user.username}
                  </Text>
                  <Text  style={styles.bodyQuestionContentContent}>
                      {answer.content}
                  </Text>
                </View>
              </View>
            );
        }

            renderRow(question, sectionId, rowId, highlightRow){
                return (
                  <View style={styles.bodyQuestion}>
                                <View style={styles.bodyQuestionHeader}>
                                  <Icon name={'ios-contact'} size={50} color={'#2c3e50'}  />
                                  <Text style={styles.bodyQuestionHeaderUser}>
                                    {question.user.username}
                                  </Text>
                                  <Text maxLength={10} style={styles.bodyQuestionHeaderCategory}>
                                    {question.category.name}
                                  </Text>
                                  <View style={styles.bodyQuestionHeaderTime}>
                                    <Icon name={'md-time'} size={20} color={'#2c3e50'}/>
                                    <Text style={styles.bodyQuestionheaderTitle}>
                                      {question.created_at}
                                    </Text>
                                  </View>
                                </View>
                                <View style={styles.bodyQuestionContent}>
                                  <Text numberOfLines={1} style={styles.bodyQuestionContentTitle}>
                                      {question.title}
                                  </Text>
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
                                      {question.all_answers_with_user.length}
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


testEEE(){
  console.log(this.state.questionDataSource.all_answers_with_user);
}

storeAnswer(){
  console.log('stored answer!');
}



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name={'md-search'} size={40} color={'white'}  />
          <Text style={styles.headerTitle}>
            KOLEGU
          </Text>
          <Icon name={'md-list'} size={40} color={'white'}/>
        </View >
        <View style={styles.body}>
          <ListView   //Question
          style={styles.bodyScroll}
          dataSource={this.state.questionDataSource}
          renderRow={this.renderRow.bind(this)}
          />

          <ListView   //Answers
          style={styles.bodyScroll}
          dataSource={this.state.answerDataSource}
          renderRow={this.renderRowAnswer.bind(this)}
          />


          <View style={styles.bodyQuestion}>
            <View style={styles.bodyQuestionContent}>
              <Text style={styles.bodyQuestionHeaderUser}>
                Pergjigju:
              </Text>
              <TextInput
                multiline = {true}
                numberOfLines = {4}
                onChangeText={(text) => this.setState({myAnswer: text})}
                value={this.state.text}
                maxLength = {40}
              />
              <TouchableHighlight onPress={ this.storeAnswer.bind(this)}>
                <Text> Ruaje </Text>
              </TouchableHighlight>
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
  bodyScroll: {
    flex:1,
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
  },
  bodyQuestionHeaderTime: {
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:50,
  },
  bodyQuestionheaderTitle: {
    fontSize: 13,
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

module.exports = Question;
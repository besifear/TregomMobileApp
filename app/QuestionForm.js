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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var start = Date.now();
var PickerItem = Picker.Item;

class QuestionForm extends Component {

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      title: "",
      content: "",
      category: "",
      error: "",
      categoryDataSource: [],
    }
  }

  componentDidMount(){
      this.fetchCategories();
      console.log(global.user);
  }

  fetchCategories(){
      fetch('http://'+global.ipv4+'/api/v1/categories')
          .then((response) => response.json())
          .then((response) => {
              this.setState({
                  category: response[0].id,
                  categoryDataSource: response
              });
          }).catch((error)=>{console.log(error)});

  }

  postQuestion(){
    var passingTokenStructure = 'Bearer '+ global.authToken;
        fetch('http://'+global.ipv4+'/api/v1/questions',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': passingTokenStructure,
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                category_id: this.state.category,
                id : global.user.id
            })
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('passingTokenStructure = ');
            console.log(passingTokenStructure);
            console.log('title = ');
            console.log(this.state.title);
            console.log('content = ');
            console.log(this.state.content);
            console.log('category = ');
            console.log(this.state.category);
            console.log('user = ');
            console.log(global.user.id);
            console.log(response);
        }).catch((error)=>{console.log(error)});
    }

  renderRow(category, sectionId, rowId, highlightRow){
      return (
        <Picker.Item label={category.name} value={category.id} />
      );
  }

 onButtonPress(){
   global.user=null;
   this.props.navigator.push({
     id: 'Login'
   });
 }
 onButtonPressIndex(){
   this.props.navigator.push({
     id: 'Home'
   });
 }
 onButtonPressQuestionForm(){
   this.props.navigator.push({
     id: 'QuestionForm'
   });
 }



  render() {
    let serviceItems = this.state.categoryDataSource.map( (s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.name} />
        });
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Icon name={'md-search'} size={40} color={'white'}  />
          <Text style={styles.headerTitle}>
            TREGOM
          </Text>
          <Icon name={'md-list'} size={40} color={'white'}/>
        </View >

        <View style={styles.body}>
          <View style={styles.bodyQuestion}>
            <View style={styles.formContainer}>
              <View style={styles.formContainerView}>
                <Text style={styles.labels}>
                  Titulli:
                </Text>
                <TextInput style={styles.titleInput} onChangeText={ (text)=> this.setState({title: text}) }   />
                <Text style={styles.labels}>
                  Përmbajtja:
                </Text>
                <TextInput multiline = {true} style={styles.contentInput} onChangeText={ (text)=> this.setState({content: text}) }  />
                <Text style={styles.labels}>
                  Kategoria:
                </Text>
                <Picker
                  selectedValue={this.state.category}
                 onValueChange={(value) => this.setState({category: value})}>
                  {serviceItems}
                </Picker>
                <TouchableHighlight onPress={this.postQuestion.bind(this)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Shtro Pyetjen</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight  onPress={this.onButtonPressIndex.bind(this)} >
            <Icon name={'ios-list-box-outline'} size={40} color={'#2c3e50'}  />
          </TouchableHighlight>
          <Icon name={'ios-chatboxes-outline'} size={40} color={'#2c3e50'}  />
          <TouchableHighlight  onPress={this.onButtonPressQuestionForm.bind(this)} >
            <Icon name={'ios-add-circle'} size={50} color={'#f39c12'}/>
          </TouchableHighlight>
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

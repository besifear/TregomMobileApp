import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Navigator,
  TextInput,
  TouchableHighlight,
  View,
  AsyncStorage
} from 'react-native';




class Login2 extends Component {

  constructor(){
    super();

    this.state = {
      username: "",
      password: "",
      error: "",
      authenticationToken: "",
      isLoggedIn: false,
      user: null,
    }
  }

  authenticate(){
        fetch('http://'+global.ipv4+'/api/v1/authenticate',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((response) => {
            var authToken = response.token;
            this.setState({authenticationToken: authToken});
            this.storeValueInAsyncStorage('@TregomAuthenticate:key', authToken);
            this.fetchUserInfo(authToken);
        }).catch((error)=>{console.log(error)});
    }

    fetchUserInfo( authToken ){
        var passingTokenStructure = 'Bearer '+ authToken;
        fetch('http://'+global.ipv4+'/api/v1/getuser',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': passingTokenStructure,
            },
            body: JSON.stringify({
            })
        }).then((response) => response.json())
        .then((response) => {
            var userdata=response.user;
            if(userdata != undefined){
              this.setState({isLoggedIn: true});
              this.setState({user: userdata});
              global.user=userdata;
              this.storeValueInAsyncStorage('@TregomAuthenticate:user', 'true');
            }
            if(this.state.isLoggedIn){
              this.onButtonPress();
            }
        }).catch((error)=>{console.log(error)});
    }

storeValueInAsyncStorage(key, value){
        try{
            AsyncStorage.setItem( key, value );
        } catch ( error ){
            console.log( error );
        }
    }

    getTokenFromAsyncStorage(){
        try{
            AsyncStorage.getItem('@TregomAuthenticate:key')
                .then( (value) => { this.setState({authenticationToken: value}) });

        }catch ( error ){
            console.log ( error );
        }
    }

  // redirect(routeName, accessToken){
  //   this.props.navigator.push({
  //     name: routeName
  //   });
  // }
  // storeToken(responseData){
  //   AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
  //     if(err){
  //       console.log("an error");
  //       throw err;
  //     }
  //     console.log("success");
  //   }).catch((err)=> {
  //       console.log("error is: " + err);
  //   });
  // }
  onButtonPress(){
    this.props.navigator.push({
      id: 'Home'
    });
  }

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../public/img/tregomlogo.png')}/>
				</View>

				<View style={styles.formContainer}>
          <View style={styles.formContainerView}>
            <TextInput style={styles.input} onChangeText={ (text)=> this.setState({username: text}) }  placeholder="Username" />
            <TextInput secureTextEntry style={styles.input} onChangeText={ (text)=> this.setState({password: text}) }  placeholder="Password"/>
            <TouchableHighlight onPress={this.authenticate.bind(this)} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableHighlight>
            <Text style={styles.error}>
              {this.state.error}
            </Text>
          </View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#CCCCCC'
	},
  tregom: {
    fontSize: 45,
    color:'#f39c12',
    textAlign: 'center',
    marginBottom:25,
  },
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1
	},
	logo: {
		height: 80,
		width: 378
	},
  formContainerView: {
    padding:20,
  },
  input: {
		height: 40,
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
    fontSize: 20,
	},
  error: {
    backgroundColor: '#CCCCCC',
    color: '#fff',
  }
});

module.exports = Login2;


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions, 
  Image,
} from 'react-native';
import colors from '../assets/colors/colors';
import image from '../assets/images/Login.gif';

const height = Dimensions.get('window').height;


export default class Login extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {useremail:'', userpassword:''};
  }

  insertUsers=()=>
  {
    var useremail = this.state.useremail;
    var userpassword = this.state.userpassword;

  if((useremail.length==0) || (userpassword==0))
    {
      alert("Plase fill in all required field!");
    }
  else{

      var insertAPIURL  = "http://10.0.2.2:80/api/login.php";

      var headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      var data = {
        useremail: useremail,
        userpassword: userpassword
      };

      fetch(insertAPIURL, {
        method: 'POST', 
        headers: headers,
        body: JSON.stringify(data)
      }
      )
      .then((Response) => Response.json())
      .then((Response)=>{
        if (Response[0].Message == "Success") {
          console.log("true")
          this.props.navigation.navigate("TabNavigator");
        }
        console.log(data);
      })
      .catch((error)=>{
        console.error("error" + error);
      })
     }
   }

  render()
  {

     return (
      <View style={styles.container}>
        <Image source={image} style={styles.imageStyle}/>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email" 
          placeholderTextColor="#A59696"
          onChangeText={useremail=>this.setState({useremail})}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"          
          placeholderTextColor="#A59696"
          onChangeText={userpassword=>this.setState({userpassword})}
        />
        
        <View style={{marginVertical: 20}}>
          <TouchableOpacity style={styles.loginButton} 
           onPress={this.insertUsers}>
            <Text style={styles.loginText}> 
              Login
            </Text>
          </TouchableOpacity>
        </View>
        
        <View>
            <Text
              onPress={() => this.props.navigation.navigate("Register")}
              style={{color: colors.black, fontSize: 10, top:-10,}}> Don't have an account? Register
            </Text> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    backgroundColor: colors.white2
  },
  textInput: {
    height: 40,
    fontSize: 12,
    width: '80%',
    color: colors.black,    
    backgroundColor:'#E0E0E0',
    borderRadius: 10,
    marginTop: 8,
    marginVertical: 15, 
  },
  imageStyle: {
    width: 230,
    height: 230,
    top: -50,
  }, 
  loginButton: {
    backgroundColor: colors.darkBlue,
    width: 80,
    height: 30,
    borderRadius: 10,
  },
  loginText:{
    fontSize: 15,
    fontFamily: 'Robot',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white2,
    top: 5,
  },
}
);

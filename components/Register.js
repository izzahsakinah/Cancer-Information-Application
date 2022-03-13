 
import React, {Component, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions, 
  useState,
  Image,
} from 'react-native';
import colors from '../assets/colors/colors';
import image from '../assets/images/Mobile-login.gif';
import Spinner from 'react-native-loading-spinner-overlay';

const height = Dimensions.get('window').height;

export default class Register extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {username:'', useremail:'', userpassword:''};
  }

  insertUsers=()=>
  {
    var username  = this.state.username;
    var useremail = this.state.useremail;
    var userpassword = this.state.userpassword;
    var resultEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

    if((username.length==0) ||  (useremail.length==0) || (userpassword==0))
    {
      alert("Plase fill in all required field!");
    }
    else if (!(resultEmail).test(useremail))
    {
      alert("Invalid Email");
    }
    else if (userpassword.length<3)
    {
       alert("Minimum 4 characters required");
   }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(userpassword)))
   {
     alert("At least 1 special character");
   }else if (((/[ ]/).test(userpassword)))
   {
     alert("Cannot include space in password");
   }
   else
   {
       var insertAPIURL  = "http://localhost/api/register.php";

       var headers = { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       };
       var data = {
         username: username,
         useremail: useremail,
         userpassword: userpassword
       };

       fetch(insertAPIURL, {
         method: 'POST', 
         headers: headers,
         body: JSON.stringify(data)
       }
       )
       .then((response) => response.json())
       .then((response) => 
         {
           alert(response[0].Message);
           this.props.navigation.navigate("Login"); 
         }
       )
       .catch((error)=>
       {
         alert("Error" + error);
       })
    }
  }

   render()
   { return (
      <View style={styles.container}>        
        <Image source={image} style={styles.imageStyle}/>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Name" 
          placeholderTextColor="#A59696"
          onChangeText={username=>this.setState({username})}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#A59696"
          onChangeText={useremail=>this.setState({useremail})}
        />
        {/*<TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Gender" 
          placeholderTextColor="#A59696"
          onChangeText={text=>setGender(text)}
        />*/}
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#A59696"
          onChangeText={userpassword=>this.setState({userpassword})}
        />
        
        <View style={{marginVertical: 10}}>
          <TouchableOpacity style={styles.registerButton} onPress= {() => 
          this.props.navigation.navigate("Login")
          }>
            <Text style={styles.registerText}> 
                Enter
            </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text
              onPress={() =>  this.props.navigation.navigate("Login")}
              style={{color:colors.black, fontSize: 10, top:-10,}}>
                  Already Register? Click here to login
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
    backgroundColor: colors.white2,
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
    top: -10,
  },
  registerButton: {      
    backgroundColor: colors.darkBlue,
    width: 80,
    height: 30,
    borderRadius: 10,
  },  
  registerText:{
    fontSize: 15,
    fontFamily: 'Robot',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white2,
    top: 5,
  },
});
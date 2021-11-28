import React from 'react';
import { View, Image, StyleSheet, TextInput, Text, Dimensions, ToastAndroid, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import firebase from 'react-native-firebase';

const height = Dimensions.get('window').height;


export default class Register extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  signupNow = () => {
   //to do => firebase authentication with email & password code goes here
  if (this.state.email && this.state.password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}));
  } else {
    ToastAndroid.show('Please fill all the fields!', ToastAndroid.LONG);
  }
};

render() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Mobile-login.gif')} 
      style={styles.image}
      />   
    
      <View style={styles.emailWrapper}>
         <TextInput
          style={styles.inputStyle}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#FFF" 
          />
          </View>

          <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.inputStyle}
          maxLength={15}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#FFF" 
          onChangeText={password => {
            this.setState({password});
          }}
          value={this.state.password}
        />
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
          </View>

          <View style={styles.buttonWrapper}>
        <TouchableOpacity  onPress={()  => this.signupNow()}>
          <Text style={styles.enterText}>Enter</Text>
        </TouchableOpacity>
          </View>
          
        <Text 
          style={styles.loginText} 
          onPress={() => this.props.navigation.navigate('Login')}
          >
          Already Registered? Click here to login
        </Text>
    </View>
     );
  };
}


const styles = StyleSheet.create({

  container: {
    height: height,
    backgroundColor: colors.white2,        
    justifyContent: 'center',
    flex:1,

  },
  image: {
    alignSelf: 'center', 
    width: 250,
    height: 250,
    top:  -25,

  },
  nameWrapper: {
    width: 250,
    height: 50,
    backgroundColor: colors.darkBlue,    
    alignSelf: 'center',
    marginBottom: 10,  
    borderRadius: 10
  },
  nmText: {
    top: 15,
    left: 10,
    color: colors.white,
  },
  emailWrapper: {
    width: 250,
    height: 50,
    backgroundColor: colors.darkBlue, 
    marginBottom: 10,    
    alignSelf: 'center',
    borderRadius: 10
  },
  emText: {
    top: 15,
    left: 10,
    color: colors.white,

  },
  passwordWrapper: {
    width: 250,
    height: 50,    
    backgroundColor: colors.darkBlue,   
    alignSelf: 'center',
    borderRadius: 10

  },
  pwText: {
    top: 15,
    left: 10,
    color: colors.white,
  },
  inputStyle: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: colors.white,

  },
  loginText: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: colors.black,
    alignSelf: 'center',
  },
  buttonWrapper: {    
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    width: 90,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  enterText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: colors.white,
    alignSelf: 'center',
    paddingTop: 8,
    
  }

}
);

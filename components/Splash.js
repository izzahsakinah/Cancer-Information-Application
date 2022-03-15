import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, Dimensions, ActivityIndicator, ImageBackground} from 'react-native';
import image from '../assets/images/Picture1.png';
//import firebase from 'react-native-firebase';
import colors from '../assets/colors/colors'

const height = Dimensions.get('window').height;

export default class Splash extends Component 
 {
  constructor(props)
  {
    super(props);
    setTimeout(() => 
    {
      this.props.navigation.navigate("Login");
      
    },5000);

  }
render()
{  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor= '#EDECEC'/>
          <Image source={image} style={styles.imageStyle}/>
         {/*<Text style={styles.titleText}>MyNanoria</Text>
       <ActivityIndicator style={styles.loadingAct} size="small" />*/}
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDECEC',
    height: height,
    alignSelf: 'center'
  },
  titleText: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top:10,
  },
  loadingAct: {
    color: colors.black1,
    bottom: -5,
  },
  imageStyle: {
    width: '60%',
    height: '60%',
    position: 'absolute',
    alignSelf: 'center',
    //margin: 28,
  },
  buttonStyle: {
    width: 80,
    height:40,
    backgroundColor: colors.darkBlue,
    borderRadius: 8,
    margin: 5,
  },
});
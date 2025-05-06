import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground, Dimensions, ActivityIndicator} from 'react-native';
import image from '../assets/images/gambar1.jpg';
//import firebase from 'react-native-firebase';
import colors from '../assets/colors/colors';

const height = Dimensions.get('window').height;

export default class Splash extends Component 
 {
  constructor(props)
  {
    super(props);
    setTimeout(() => 
    {
      this.props.navigation.navigate("Menu");
      
    },5000);

  }
render()
{  
    return (
      //<View style={styles.container}>
      //</View>
        <ImageBackground source={image} style={styles.imageStyle}>
        <StatusBar barStyle="dark-content" backgroundColor= '#FFFFFF'/>
        </ImageBackground>
        
      ); 
    }
  }
{/*<Text style={styles.titleText}>MyNanoria</Text>
       <ActivityIndicator style={styles.loadingAct} size="small" />*/}
     
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
    width: '100%',
    height: '100%',
    position: 'absolute',
    //alignSelf: 'center',
    resizeMode: 'cover',
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
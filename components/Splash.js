import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import image from '../assets/images/M.png';
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
    backgroundColor: colors.white2,
    height: height,
  },
  titleText: {
    fontSize: 20,
    color: colors.darkBlue,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top:10,
  },
  loadingAct: {
    color: colors.darkBlue,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  buttonStyle: {
    width: 80,
    height:40,
    backgroundColor: colors.darkBlue,
    borderRadius: 8,
    margin: 20,
  },
});
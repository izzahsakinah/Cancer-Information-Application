import React from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import image1 from '../assets/images/cancer1.jpg';
import image2 from '../assets/images/cancer2.jpg';
import image3 from '../assets/images/cancer6.jpg';
const height = Dimensions.get('window').height;

const Quiz =({ navigation }) => {

  return (    
    <View style={styles.container}>
        <View style={styles.quizTopicsWrapper}>
          <SafeAreaView>
            <Text style={styles.quizTopicsText}> 
                  Choose Topic
            </Text>

            <TouchableOpacity onPress= {()=> navigation.navigate("QuizNano")}>
              <ImageBackground source={image2}  style={[ styles.quizItem , 
              {
                      marginBottom: 10,
                  }]} 
                    imageStyle={styles.quizImage}>
                <Text style={styles.quizTitle }>Nanotechnology</Text>
                <View style={styles.quizDetailsWrapper}>
                    <Text style={styles.quizDetails }>
                    Test Your Knowledge About Nanotechnology
                    </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> navigation.navigate("QuizDrugs")}>
            <ImageBackground source={image3} style={styles.quizItem} 
                    imageStyle={styles.quizImage}>
                <Text style={styles.quizTitle }>Nano Drugs Treatment in Cancer</Text>
                <View style={styles.quizDetailsWrapper}>
                    <Text style={styles.quizDetails }>
                    Test Your Knowledge About Nanotechnology
                    </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            </SafeAreaView>
        </View>
        </View>
         );
  };
        

const styles = StyleSheet.create({ 

  quizItem: {
    width: 250,
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginLeft : -23,
    top: 50,
  },
  quizImage: { 
    borderRadius: 20,
    marginBottom: 20,

  },
  quizTitle: { 
    //justifyContent: 'flex-end',
    paddingHorizontal: 1,
    paddingVertical: 5,
    color: colors.white,
    //marginRight : 20,
  },
  quizDetailsWrapper:{ 
    //flexDirection: 'column',
    marginTop: 5,
  },
  quizDetails: {
    paddingVertical: 10,
    fontFamily: 'sans-serif-light',
    fontSize: 12,
    color: colors.white,

  },
  container: {
    flex: 1,
    backgroundColor: '#E8DFDF',
    height: height,
    
  },
  quizWrapper: {    
        //marginHorizontal: 20,
        //marginTop: 20,
  },
  quizTopicsWrapper: {
    marginHorizontal: 80,
    //flexDirection: 'column',

  },
  quizTopicsText: {
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
    color: colors.black,
    top: 20, 
    textAlign: 'center',

  },
});

export default Quiz;
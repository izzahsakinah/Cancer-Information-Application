import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import image1 from '../assets/images/Questions-pana.png';
import image2 from '../assets/images/Young-happy.png';
import image3 from '../assets/images/Mental-health.png';
import image4 from '../assets/images/Breast-research.png';


const Quiz =({ navigation }) => {

  return (
    <ScrollView> 

    <View style={styles.container}>
      <SafeAreaView>
          <View style={styles.menuWrapper}>
            <View style={styles.homeWrapper}>
            <Text style={styles.quizTopicsText}> 
                 Quizzes
            </Text>
            <Image source={image1} style={styles.imageStyle}/>
          </View>
          </View>
          
           
          <View style={styles.wrapperDetails}>
            <TouchableOpacity onPress= {()=> navigation.navigate("QuizIntro")}>
            <View style={styles.quizWrapper}>              
            <Text style={[styles.quizTitle, {
                    left: 25,
                }]}>Introduction to Cancer</Text>
                <Image source={image2}  style={[ styles.quizItem , 
              {
                      width: 100,
                      height: 100,
                      marginLeft: -15,
                  }]} />
            </View>
            </TouchableOpacity>
            </View>
          

          <View style={styles.wrapperDetails}>
            <TouchableOpacity onPress= {()=> navigation.navigate("QuizNano")}>
            <View style={styles.quizWrapper}>           
                <Image source={image3}  style={[ styles.quizItem , 
              {
                      width: 100,
                      height: 100,
                      marginLeft: 1,
                  }]} />
                <Text style={[styles.quizTitle, {
                    right: 40,
                }]}>Nanotechnology</Text>
            </View>
            </TouchableOpacity>
            </View>
          
            <View style={[styles.wrapperDetails, {
            }]}>
            <TouchableOpacity onPress= {()=> navigation.navigate("QuizDrugs")}>
            <View style={styles.quizWrapper}>
              <View style={{backgroundColor: colors.primary, width:140, height: 40, position: 'absolute',

              }}>
              <Text style={[styles.quizTitle, 
              {   
                textAlign: 'center',
                left: 10,
              }]}>Nano Drugs Treatment in Cancer</Text>
              </View>
              <Image source={image4} style={[styles.quizItem, 
              {                
                    width: 90,
                    height: 90,
                    right: -180,
                    top: 5,

                  }]}
              >
               </Image>
             </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        </View>
        </ScrollView>

         );
  };
        

const styles = StyleSheet.create({ 

  quizItem: {

  },
  quizTitle: { 
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    right: 20,
  },  
  menuWrapper: {
    backgroundColor: colors.primary,
    width: 360,
    height: 210,
    borderRadius: 20,
    marginTop: -10,
  },  
  homeWrapper: {
    top: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle:{
    width: 170,
    height: 170,    
    marginTop: 28,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white2,
    justifyContent: 'center',
    alignItems: 'center',
    top: -55,
    width:'100%',
    height:'100%',
    
  },
  quizTopicsText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white2,
    top: 10, 
    left: 20,

  },
  wrapperDetails: {
    backgroundColor: colors.primary,
    width: 276,
    height: 100,
    alignSelf: 'center',
    top: 28,
    borderRadius: 20,    
    marginBottom: 18,
  },
  quizWrapper: {    
    flexDirection: 'row',
    justifyContent: 'space-between',    
    alignItems: 'center', 
    
  }
});

export default Quiz;
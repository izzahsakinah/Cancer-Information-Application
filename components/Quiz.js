import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
//import image1 from '../assets/images/Questions-pana.png';
import image2 from '../assets/images/Young-happy.png';
import image3 from '../assets/images/Mental-health.png';
import image4 from '../assets/images/Breast-research.png';


const Quiz =({ navigation }) => {

  return (
    <ScrollView>       
      <StatusBar barStyle="light-content" backgroundColor= '#0b2c54' />
    <View style={styles.container}>
      <SafeAreaView>
          <View style={styles.homeWrapper}>
            <Text style={styles.quizTopicsText}> 
                 Let's Take Quizzes
            </Text>
            </View>
          
           <View style={{margin: 28,}}>
          <View style={styles.wrapperDetails}>
            <TouchableOpacity onPress= {()=> navigation.navigate("QuizIntro")}>
            <View style={styles.quizWrapper}>              
                <Image source={image2}  style={[ styles.quizItem , 
              {
                      width: 100,
                      height: 100,
                      marginLeft: 1,
                  }]} />
                   <Text style={[styles.quizTitle, {
                    marginRight:'5%',
                }]}>Introduction to Cancer</Text>
           
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
                    marginRight:'10%',
                }]}>Nanotechnology</Text>
            </View>
            </TouchableOpacity>
            </View>
          
            <View style={[styles.wrapperDetails, {
            }]}>
            <TouchableOpacity onPress= {()=> navigation.navigate("QuizMed")}>
            <View style={styles.quizWrapper}>              
              <Image source={image4} style={[styles.quizItem, 
              {                
                    width: 90,
                    height: 90,
                    marginLeft: 4,
                  }]}>
               </Image>
               <Text style={[styles.quizTitle,
              {   
                textAlign: 'center',
                marginRight:'10%',
              }]}>Nano Drugs {"\n"} Treatment in Cancer</Text>
            
             </View>
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
        </View>
        </ScrollView>

         );
  };
        

const styles = StyleSheet.create({ 

  quizTitle: { 
    color: colors.black1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
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
  //homeWrapper: {
    //bottom: 30,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
 // },
  imageStyle:{
    width: 170,
    height: 170,    
    marginTop: 28,
  },
  container: {
    flex: 1,
    backgroundColor: '#EDECEC',
    top: -20,
    width:'100%',
    height:'500%', 
    marginBottom: 50,   
  },
  quizTopicsText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black1,
    top: 58, 
    left: 20,

  },
  wrapperDetails: {
    backgroundColor: colors.white2,
    width: 310,
    height: 100,
    top: 70,
    left: 20,
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
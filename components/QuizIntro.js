import React, { useState, Component } from 'react'
import { View, Text, ScrollView, SafeAreaView, Dimensions, StatusBar, TouchableOpacity, Modal, Animated } from 'react-native'
import data from '../assets/data/introData';
import Entypo from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

MaterialCommunityIcons.loadFont();
const height = Dimensions.get('window').height;

const QuizIntro = ({navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
      let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if(selectedOption==correct_option){
          // Set Score
          setScore(score+1)
      }
      // Show Next Button
      setShowNextButton(true)
  }
  const handleNext = () => {
      if(currentQuestionIndex== allQuestions.length-1){
          // Last Question
          // Show Score Modal
          setShowScoreModal(true)
      }else{
          setCurrentQuestionIndex(currentQuestionIndex+1);
          setCurrentOptionSelected(null);
          setCorrectOption(null);
          setIsOptionsDisabled(false);
          setShowNextButton(false);
      }
      Animated.timing(progress, {
          toValue: currentQuestionIndex+1,
          duration: 1000,
          useNativeDriver: false
      }).start();
  }

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
    }).start();
}

  const renderQuestion = () => {
  return (
      <View style={{
          marginVertical: 20,
      }}>
          {/* Question Counter */}
          <View style={{
              flexDirection: 'row',
              //alignItems: 'flex-end'
              top: -25,
          }}>
             <Text style={{color: colors.black, 
                          fontSize: 20, 
                          opacity: 0.6, 
                          marginRight: 2}}>
                {currentQuestionIndex+1}
                </Text>
                    <Text style={{color: colors.black, fontSize: 20, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>
                 {/* Question */}
                 <Text style={{
                    color: colors.black,
                    fontSize: 20,
                    top: -15,
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }

    const renderOptions = () => {
      return (
          <View>
              {
                  allQuestions[currentQuestionIndex]?.options.map(option => (
                      <TouchableOpacity 
                      onPress={()=> validateAnswer(option)}
                      disabled={isOptionsDisabled}
                      key={option}
                      style={{
                        borderWidth: 3, 
                        borderColor: option==correctOption 
                        ? colors.success
                        : option==currentOptionSelected 
                        ? colors.error 
                        : colors.black+'40',
                        backgroundColor: option==correctOption 
                        ? colors.success +'20'
                        : option==currentOptionSelected 
                        ? colors.error +'20'
                        : colors.black+'20',
                        height: 80, 
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center', 
                        top: -25,
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginVertical: 10,
                        backgroundColor: 'white',
                        borderColor : 'white',
                    }}
                    >
                    <Text style={{fontSize: 15, color: colors.black}}>{option}</Text>

                    {/* Show Check Or Cross Icon based on correct answer*/}
                    {
                        option==correctOption ? (
                            <View style={{
                                width: 20, 
                                height: 20, 
                                borderRadius: 30/2,
                                backgroundColor: colors.success,
                                justifyContent: 'center', 
                                alignItems: 'center'
                            }}>
                              <MaterialCommunityIcons name="check" style={{
                                            color: colors.white2,
                                            fontSize: 20
                                        }} />
                           </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, 
                                        height: 30, 
                                        borderRadius: 30/2,
                                        backgroundColor: colors.error,
                                        justifyContent: 'center', 
                                        alignItems: 'center'
                                    }}>
                                      <MaterialCommunityIcons name="close" style={{
                                            color: colors.white2,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
      if(showNextButton){
          return (
              <TouchableOpacity
              onPress={handleNext}
              style={{
                  marginTop: 5, 
                  width: '100%', 
                  backgroundColor: '#0b2c54', 
                  padding: 15, 
                  borderRadius: 5
              }}>
                  <Text style={{fontSize: 20, color: colors.white2, textAlign: 'center'}}>Next</Text>
              </TouchableOpacity>
          )
      }else{
          return null
      }
  }
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
      inputRange: [0, allQuestions.length],
      outputRange: ['0%','100%']
  })
  const renderProgressBar = () => {
      return (
        
          <View style={{
              width: '90%',
              height: 20,
              borderRadius: 20,
              backgroundColor: '#0b2c54',
              top: -30,
              justifyContent: 'center',
              alignSelf: "center",

          }}>
              <Animated.View style={[{
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: colors.accent
              },{
                  width: progressAnim
              }]}>

              </Animated.View>
          </View>
      )
  }
return (
<ScrollView>
    <SafeAreaView >
        <StatusBar barStyle="dark-content" backgroundColor= '#EDECEC' />
        <View>

            <View style={{
            flex:1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            //backgroundColor: '#EDECEC',
            position:'relative', 
            height: '500%',
            width: '100%',
        }}>
            <TouchableOpacity onPress= {()=> navigation.navigate('Quiz')}>
            <Entypo name='close' color={colors.grey} size={28} style = {[{botton:38, right:15, }]} />
            </TouchableOpacity> 
            
           {/* ProgressBar */}
           { renderProgressBar() }
      
           {/* Question */}
           {renderQuestion()}

           {/* Options */}
           {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}
          

          {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
          >
            <StatusBar barStyle="dark-content" backgroundColor= '#0b2c54'/>
            <View style={{
                       flex: 1,
                       backgroundColor: colors.darkBlue,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                      <View style={{
                           backgroundColor: colors.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'grey'}}>
                              { score> (allQuestions.length/2) ? 'Congratulations!' : 'Try again :(' }
                              </Text>

                              <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                              <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? colors.success : colors.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: colors.black1
                                }}>/ { allQuestions.length }</Text>
                           </View>
                            {/* Retry Quiz button */}
                            <TouchableOpacity
                           //onPress={restartQuiz}
                           onPress= {()=> navigation.navigate("Quiz")}
                           style={{
                               backgroundColor: colors.accent,
                               padding: 15, 
                               width: '100%', 
                               borderRadius: 20
                           }}>
                              <Text style={{
                                   textAlign: 'center', color: colors.white, fontSize: 20
                               }}>Back</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </Modal>
               
                {/* Background Image */}
                {/*<Image
                source={require('../assets/images/Online-test.png')}
                style={{
                    width: 280,
                    height: 230,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: -10,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
            />*/}

           </View>
           </View>
       </SafeAreaView>
       </ScrollView>
    )
}


export default QuizIntro;





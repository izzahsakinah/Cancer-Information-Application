import React, { useState, Component } from 'react';
import {View, Text, StyleSheet,} from 'react-native';


function QuizIntro() {

  const questions = [
    {
      questionText: 'What is the meaning of cancer?',
      answerOptions: [
        { answerText: 'Cancer is a correct mutated cells', isCorrect: false },
        { answerText: 'Cancer is dangerous mutated cells', isCorrect: true },
        { answerText: 'Cancer is a skin', isCorrect: false },
        { answerText: 'Cancer is cat', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tata?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Ratan Tata', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Gautam Adani', isCorrect: false },
      ],
    },
    {
      questionText: 'who is richest person in the world?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Warren Buffett', isCorrect: false },
      ],
    },
    {
      questionText: 'how many countries in the world?',
      answerOptions: [
        { answerText: '120', isCorrect: false },
        { answerText: '183', isCorrect: false },
        { answerText: '170', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Introduction on Cancer</Text>
      <View style={styles.quizApp}>
        {showScore ? (
          <Text style={styles.scoreSection}>
            You scored {score} out of {questions.length}
          </Text>
        )
          :
          (
            <>
              <View style={styles.questionSection}>
                <Text style={styles.questionCount}>
                  Question {currentQuestion + 1}/{questions.length}
                </Text>
                <Text style={styles.questionText}>
                  {questions[currentQuestion].questionText}
                </Text>
              </View>

              <View style={styles.answerSection}>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </View>
            </>
          )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

    header: {
        textAlign: 'center',
        color: '#f71aa2',
      },

    quizApp: {
        width: '95%',
        height: 20,
        borderRadius: 15,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-evenlyspace-evenly',
      },

    scoreSection: {
        display: 'flex',
        fontsize: 24,
        alignitems: 'center',
      },
      
      /* QUESTION/TIMER/LEFT SECTION */
    questionSection: {
        width: 100,
        position: 'relative',
      },
      
    questionCount: {
        marginbottom: 20,
      },
            
    questionText: {
        marginbottom: 12,
      },
      
      
      /* ANSWERS/RIGHT SECTION */
    answerSection: {
        width: 100,
        display: 'flex',
        flexdirection: 'column',
        justifycontent: 'space-between',
      },
      
    button : {
        width: 100,
        fontsize: 16,
        color: '#ffffff',
        borderradius: 15,
        display: 'flex',
        padding: 5,
        justifycontent: 'flex-start',
        alignitems: 'center',
        cursor: 'pointer',
      },

})
export default QuizIntro;
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../assets/colors/colors";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '90%', 
                  height: 180, 
                  backgroundColor: '#0b2c54', 
                  borderRadius: 10,
      }}>
      <Text style={{
            margin: 15,
            textAlign: 'center', 
            color: colors.white2, 
            fontSize: 15, 
            fontFamily: 'Roboto',
            }}>
            MyNanoria is a first mobile application found by Dr Corrienna Abdul Talib, lecturer from 
            Universiti Teknologi Malaysia. The objective of this application is to deliver
            information about Nanotechnology in Cancer to students. From this application, students able to know
            about Nanotechnology used in curing the disease. 
      </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
export default About;
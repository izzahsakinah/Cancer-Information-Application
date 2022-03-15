import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../assets/colors/colors";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '90%', 
                  height: 190, 
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
            MyNanoria is a learning mobile application focused on Nanotechnology for Targetted Drugs Delivery.
            The objective of this application is to deliver interactive information about Nanotechnology in cancer to students. 
            It explains on how Nanotechnology for Targetted Drugs Delivery helps to cure cancer in much better ways and effectively. 
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
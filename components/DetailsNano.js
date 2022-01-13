import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import image from '../assets/images/Breast-cancer.png';
import colors from '../assets/colors/colors';



const DetailsNano = () => {
return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={image} style = {[{width: 100, height: 60, alignItems: 'center',}]}></Image>
        <View style = {styles.meaningWrapper}>
        <Text style = {[{fontSize: 20, color: colors.black}]}>
        {`The prefix "nano" comes from Greek meaning "dwarf" describing very small size. 
        \n
        Technology refers to methods, systems, and devices which are the result of scientific knowledge being used for practical purposes.
        \n
        Nanotechnology is application of extremely small particles (nanoparticles) which can be used across many science fields.

        `}
  
        </Text>
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDECEC',
  },
  meaningWrapper: {
    backgroundColor: colors.white2,
    borderRadius: 10,
  }
})
  
export default DetailsNano;
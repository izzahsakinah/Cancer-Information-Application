import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import image from '../assets/images/Breast-cancer.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsNano = ({navigation}) => {
return (
    <View style={styles.container}>
      <ScrollView>
      
      <ImageBackground source={image} style = {[{width: 200, height: 160, alignItems: 'center',}]}>
              <TouchableOpacity style={{left: 10,}}
                  onPress={() => navigation.navigate('Home')}>
                    <Entypo name="chevron-left" size={28} color={colors.gray} />
                </TouchableOpacity>
                <Text>Nanoparticles Properties</Text>
      </ImageBackground>
        <View style = {styles.particlesWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {[{fontSize: 20, color: colors.black}]}>
          Material properties change as their size approaches the atomic scale.  The smaller the size of particle, the bigger ratio of the surface area to its volume.
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {styles.textStyle}>
          This feature enables nanoparticles to possess different biological, physical and chemical properties compared to single atoms, molecule and its bulk material as they are small enough to confine their electrons          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {styles.textStyle}>    
          It enables the rearrangement of the atoms to be most efficient within a very limited space. 
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {styles.textStyle}>
          The arranged molecules could produce the different outcomes in terms of ductility, strength, reactivity, capacity and conductivity. 
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {styles.textStyle}>
            The extremely small size of the particle enables it to penetrate the skin layer, blood circulation, lymphatic system and others.
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {styles.textStyle}>
          This development helps create machines that will dominate inconceivably very small space and will generate novel functions and features as a result of their little size.          </Text>
        </View>
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
    width: '20%',
    height: '90%',
    top: 20,
    textAlign: 'center'
  },
  textStyle: {
      color : colors.black,
  }, 
  particlesWrapper: {
      margin: 20,
      alignSelf: 'center',
  }
})
  
export default DetailsNano;
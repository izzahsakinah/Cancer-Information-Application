import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import image from '../assets/images/Breast-cancer.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsNano = ({navigation}) => {
return (
    <View style={styles.container}>
      <ScrollView>
      
      <ImageBackground source={image} style = {[{width: 200, height: 160, alignSelf: 'center', top: 10,}]}>
              <TouchableOpacity style={{left: -65, top: 10,}}
                  onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
      </ImageBackground>
        
        <View style = {styles.meaningWrapper}>
          <Text style = {[{fontSize: 18, color: colors.black}]}>
            The prefix "nano" comes from Greek meaning "dwarf" describing very small size. 
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>
            Technology refers to methods, systems, and devices which are the result of scientific knowledge being used for practical purposes.
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>        
            Nanotechnology is application of extremely small particles (nanoparticles) which can be used across many science fields.
          </Text>
        </View>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>      
          Nanotechnology involved the creation of materials, systems and devices that are useful through manipulating nanoparticle with size ranged between 1 to 100 nanometre (1 nm = 10^(−9) meter).
          </Text>
        </View>

          <TouchableOpacity style={{right: 10,}}
                  onPress={() => navigation.navigate()}>
                    <Entypo name="chevron-right" size={28} color={colors.black} />
          </TouchableOpacity>
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDECEC',
    height: 100,
  },
  meaningWrapper: {
    backgroundColor: colors.white2,
    borderRadius: 10,
    width: '90%',
    height: '20%',
    top: 20,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,

  }
})
  
export default DetailsNano;
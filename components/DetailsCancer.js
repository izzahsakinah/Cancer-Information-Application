import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, SectionList, StatusBar } from 'react-native';
import image from '../assets/images/Stem-cell-rafiki.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsCancer = ({navigation}) => {
    return (
      <View style={styles.container}>      
      <StatusBar barStyle="dark-content" backgroundColor= '#FFFFFF' />
      <View style={{top: 1, }}>
        <ImageBackground source={image} style = {[{width: 200, height: 160, left:158, }]}>
          </ImageBackground>
             <Text style={styles.descriptionTitle}>Nanotechnology</Text>    
             <View style={{marginVertical: 5, flexDirection:"row",justifyContent:'space-between',position: 'absolute'}}>
              <TouchableOpacity style={{left: 1}}
                  onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>

              <TouchableOpacity style={{right: 1}}
                  onPress={() => navigation.navigate('Nanoparticles')}>
                    <Entypo name="chevron-right" size={28} color={colors.black} />
              </TouchableOpacity>
              </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} >
          <View style={[{
          flexDirection:'column', 
          margin: 30,
          alignSelf: 'center',
          flex: 4,
          width: '95%',
          height: '100%',
        },
        ]}>
          <View style = {[styles.textWrapper, {
            top:20,            
            backgroundColor: colors.orange,
            borderRadius: 10,
            paddingHorizontal: 8,
            paddingVertical: 16,
            marginBottom: 26,           
          }
          ]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
               The prefix "nano" comes from Greek meaning "dwarf" describing very small size.
              </Text>
          </View>
          <View style = {[styles.textWrapper, {
              top: 5,
              backgroundColor: colors.orange1, 
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 26, 
              }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,  textAlign: 'center'}]}>
              Technology refers to methods, systems, and devices which are the result of scientific knowledge being used for practical purposes.
              </Text>
          </View>
          <View style = {[styles.textWrapper, {
               top: -10,
               backgroundColor: colors.orange, 
               borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
              }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}]}>
              Nanotechnology is an application of extremely small particles (nanoparticles) which can be used across many science fields.
              </Text>
          </View>
          <View style = {[styles.textWrapper, {
               top: -25,
               backgroundColor: colors.orange1, 
               borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
               padding:10 
              }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}]}>
              Nanotechnology involved creation of materials, systems, and devices that are useful through manipulating nanoparticleswith size ranged between 1 to 100 nanometre.
              </Text>
          </View>         
          </View>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white2,
    height: '100%',
  },
  meaningWrapper: {    
    borderRadius: 10,    
    top: 20,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
  }, 
  descriptionTitle: {
      fontFamily: 'sans-serif-medium',
      fontSize: 20,
      color: colors.black,
      fontWeight: 'bold',
      top: 60,
      margin: 20,
      position: 'absolute'
  }, 

})  
export default DetailsCancer;
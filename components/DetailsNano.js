import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, SectionList, StatusBar } from 'react-native';
import image from '../assets/images/Stem-cell-rafiki.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import nanoDData from '../assets/data/nanoDData';
import { render } from 'react-dom';

Entypo.loadFont();

const DetailsNano = ({navigation}) => {
    return (
      <View style={styles.container}>
      
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
          margin: 10,
          alignSelf: 'center',
          flex: 4,
          width: '95%',
        },
        ]}>
          <View style = {[styles.textWrapper, {
            top:20,            
            backgroundColor: colors.orange, 
          }
          ]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
               The prefix "nano" comes from Greek meaning "dwarf" describing very small size
              </Text>
          </View>
          <View style = {[styles.textWrapper, {
              top: 5,
              backgroundColor: colors.orange1,  
              }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
              Technology refers to methods, systems, and devices which are the result of scientific knowledge being used for practical purposes
              </Text>
          </View>
          <View style = {[styles.textWrapper, {
              top: -10,
              backgroundColor: colors.orange, 
              }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
              Nanotechnology is an application of extremely small particles (nanoparticles) which can be used across many science fields
              </Text>
          </View>
          <View style = {[styles.textWrapper, {
              top: -25,
              backgroundColor: colors.orange1, 
              }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
              Nanotechnology involved creation of materials, systems, and devices that are useful through manipulating nanoparticleswith size ranged between 1 to 100 nanometre
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

  },
  textWrapper: {    
    height: '30%',        
    borderRadius: 10,
    padding:10,
    marginBottom: 26,
    flex: 1,
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
export default DetailsNano;
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, StatusBar} from 'react-native';
import image from '../assets/images/Questions-pana.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsNano = ({navigation}) => {
return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor= '#FFFFFF' />
      <View style={{top: 1, }}>
        <ImageBackground source={image} style = {[{width: 200, height: 160, left:10, }]}>
          </ImageBackground>
             <Text style={styles.descriptionTitle}>Nanoparticles</Text> 
                <TouchableOpacity style={{left: 1, position: 'absolute', marginVertical: 5}}
                  onPress={() => navigation.navigate('DetailsNano')}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>     
         <View style={[{
          flexDirection:'column', 
          margin: 30,
          alignSelf: 'center',
          flex: 6,
          width: '95%',
        },
        ]}>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.blueish2,
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 26, 
              padding:10 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
                Material properties change as their size approaches the atomic scale.  The smaller the size of particle, the bigger ratio of the surface area to its volume.
              </Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:5,            
              backgroundColor: colors.blueish1,          
              borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
               padding:10 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
                This feature enables nanoparticles to possess different biological, physical and chemical properties compared to single atoms, molecule and its bulk material as they are small enough to confine their electrons.</Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:-10,            
              backgroundColor: colors.blueish2,
              borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
               padding:10 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
                 It enables the rearrangement of the atoms to be most efficient within a very limited space. 
                </Text>
            </View>
            <View style = {[styles.textWrapper, {
              bottom:25,            
              backgroundColor: colors.blueish1,
              borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
               padding:10 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
                The arranged molecules could produce the different outcomes in terms of ductility, strength, reactivity, capacity and conductivity. 
                </Text>
            </View>
            <View style = {[styles.textWrapper, {
              bottom:39,            
              backgroundColor: colors.blueish2,
              borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
               padding:10 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
                  The extremely small size of the particle enables it to penetrate the skin layer, blood circulation, lymphatic system and others.
                </Text>
            </View>
            <View style = {[styles.textWrapper, {     
              backgroundColor: colors.blueish1,
              borderRadius: 10,
               paddingHorizontal: 8,
               paddingVertical: 10,
               marginBottom: 26, 
               padding:10 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2,textAlign: 'center'}]}>
                This development helps create machines that will dominate inconceivably very small space and will generate novel functions and features as a result of their little size.          </Text>
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
  meaningWrapper: {
    backgroundColor: colors.white2,
    borderRadius: 10,
    width: '20%',
    height: '90%',
    top: 20,
    textAlign: 'center'
  },

  descriptionTitle: {
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    top: 60,
    right:20,
    position: 'absolute'
}, 
})
  
export default DetailsNano;
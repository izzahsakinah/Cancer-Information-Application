import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import image from '../assets/images/Breast-cancer.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsNano = ({navigation}) => {
return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{top: 10, alignSelf: 'center',}}>
        <ImageBackground source={image} style = {[{width: 200, height: 160, left:80, }]}>
          </ImageBackground>          
          <Text style={{fontFamily: 'sans-serif-medium',
                        fontSize: 20,
                        color: colors.black,
                        fontWeight: 'bold',
                        top:65,
                        right:120,
                        position: 'absolute'}}>Nanoparticles Properties</Text>
          <View>
                <TouchableOpacity style={{left: 10,}}
                  onPress={() => navigation.navigate('Home')}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
          </View>
        </View>

         <View style={[{
          flexDirection:'column', 
          margin: 10,
          alignSelf: 'center',
          flex: 6,
          width: '95%',
        },
        ]}>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.orange, 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                Material properties change as their size approaches the atomic scale.  The smaller the size of particle, the bigger ratio of the surface area to its volume.
              </Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.orange, 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                This feature enables nanoparticles to possess different biological, physical and chemical properties compared to single atoms, molecule and its bulk material as they are small enough to confine their electrons          </Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.orange, 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                 It enables the rearrangement of the atoms to be most efficient within a very limited space. 
                </Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.orange, 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                The arranged molecules could produce the different outcomes in terms of ductility, strength, reactivity, capacity and conductivity. 
                </Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.orange, 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                  The extremely small size of the particle enables it to penetrate the skin layer, blood circulation, lymphatic system and others.
                </Text>
            </View>
            <View style = {[styles.textWrapper, {
              top:20,            
              backgroundColor: colors.orange, 
            }]}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
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
  textWrapper: {    
    height: '30%',        
    borderRadius: 10,
    padding:10,
    marginBottom: 26,
    flex: 1,
  },
})
  
export default DetailsNano;
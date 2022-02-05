import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, SectionList, StatusBar } from 'react-native';
import image from '../assets/images/Breast-cancer.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import nanoDData from '../assets/data/nanoDData';
import { render } from 'react-dom';

Entypo.loadFont();

const DetailsNano = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
      
        <ImageBackground source={image} style = {[{width: 200, height: 160, alignSelf: 'center', top: 10,}]}>
             <Text style={styles.descriptionTitle}>Nanotechnology</Text>    
             <View style={{marginVertical: -28, flexDirection:"row",justifyContent:'space-between',}}>
              <TouchableOpacity style={{left: -75}}
                  onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>

              <TouchableOpacity style={{left: 250, position: 'absolute',}}
                  onPress={() => navigation.navigate('Nanoparticles')}>
                    <Entypo name="chevron-right" size={28} color={colors.black} />
              </TouchableOpacity>
              </View>
          </ImageBackground>
        </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDECEC',

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
      textAlign: 'center',
      top:70,
  },
  mainWrapper : {
    alignSelf: 'center',
    marginBottom: 10,
  },
  item: {
    backgroundColor: colors.white2,
    width: '90%',
    height: '20%',
    marginVertical: 8,
    merginHorizontal: 10,
  },
  description : {
    fontSize: 10,
    color: colors.black,
  }
})
  
export default DetailsNano;
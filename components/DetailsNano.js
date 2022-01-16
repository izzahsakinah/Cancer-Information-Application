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
              <TouchableOpacity style={{left: -65, top: 10,}}
                  onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
                <Text style={styles.descriptionTitle}>Nanotechnology</Text>
        </ImageBackground>

          <TouchableOpacity style={{right: 10,}}
                  onPress={() => navigation.navigate('Nanoparticles')}>
                    <Entypo name="chevron-right" size={28} color={colors.black} />
          </TouchableOpacity>
        </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDECEC',
    marginTop: StatusBar.currentHeight || 0,

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
      color: colors.white2,
      textAlign: 'center',
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
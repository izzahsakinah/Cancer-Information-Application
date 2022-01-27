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
  const renderNanoDescription = ({item}) => {
    return (
      <View style = {[styles.nanoItemWrapper,
      {
       //marginBottom: item.id === '1' ? 20:0,
       marginBottom : 10,
      },
      ]}>
      <Text style={styles.description}>{item.desc}</Text>
      </View>
    )
  }
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
        
          <View style = {styles.descriptionWrapper}>
            <View style = {styles.descriptionItemWrapper}>
              <FlatList
              scrollEnabled={false} 
              data = {nanoDData}
              renderItem={renderNanoDescription}
              keyExtractor={(item) => item.id}
              />
            </View>
            </View>

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
  }, 
  descriptionWrapper: {
    marginTop: 10,
  },
  descriptionItemWrapper: {
    paddingVertical: 10,
  },
  nanoItemWrapper: {
    width : 330,
    height: 50,
    alignSelf: 'center',
    backgroundColor: colors.white2,
    borderRadius: 10,
  },

})
  
export default DetailsNano;
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import image from '../assets/images/Breast-cancer.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsMed = ({navigation}) => {
return (
    <View style={styles.container}>
      <ScrollView>
      
      <ImageBackground source={image} style = {[{width: 200, height: 160, alignItems: 'center',}]}>
              <TouchableOpacity style={{left: 10,}}
                  onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
                <Text style = {{fontSize: 20, }}>Nanomedicine</Text>
      </ImageBackground>

        <View style={styles.oneNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {[{fontSize: 20, color: colors.black}]}>
            Nanotechnology’s application in the medical field is regarded as nanomedicine.
          </Text>
        </View>
        <View style={styles.twoNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>
            The aim of nanotechnology in the field of medicine is to develop innovative products and methods for detecting and treating diseases in an accurate, effective, targeted, and durable manner. The ultimate objective is to ensure medical practices and practitioners are safer and less risks.
          </Text>
        </View>
        </View>
        <View style={styles.threeNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}> 
            Nanoparticles possess potential applications in the field of medical sciences, such as targeted drug delivery (chemotherapy).
          </Text>
        </View>
        </View>
        <View style={styles.fourNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>
            Nanoparticles are emerging as an efficient tool to deliver therapies. They can carry drug molecules and be targeted to specific cells.          
            </Text>
        </View>
        </View>
        <View style={styles.fiveNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>      
            Large surface area to volume ratio of nanoparticles allows them to adsorb and contain various types of anticancer agents, such as chemotherapeutic drugs.
            </Text>
        </View>
        </View>
        <View style={styles.sixNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>      
            Drugs that are highly toxic like cancer chemotherapy, could be administered through the use of nanotechnology to ensure safety            </Text>
        </View>
        </View>
        <View style={styles.sevenNanoWrapper}>
        <View style = {styles.meaningWrapper}>
          <Text style = {{}}>      
            The technique involves storing a cancer drug inside tiny objects called nanoparticles.        
          </Text>
        </View>
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
    alignSelf: 'center',
    textAlign: 'center'
  }
})
  
export default DetailsMed;
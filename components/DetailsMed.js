import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import image from '../assets/images/cancer7.jpg';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();
const height = Dimensions.get('window').height;
const DetailsMed = ({navigation}) => {
return (
    <View style={styles.container}>
      <ScrollView>
      
      <ImageBackground source={image} style = {{width: '100%', height: 160,  }}>
        <View>
              <TouchableOpacity style={{right: -5,}}
                  onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.white} />
                </TouchableOpacity> 
                <Text style = {{fontSize: 20, color: colors.white2, top:28, textAlign: 'center' }}>Nanomedicine</Text>
        </View>              
      </ImageBackground>

        <View style={[{
          flexDirection:'column', 
          margin: 10,
          alignSelf: 'center',
          flex: 7,
          width: '95%',

        },
        ]}>
          <View style = {{
              top: 20,
              height: '30%',       
              backgroundColor: colors.orchid,  
              borderRadius: 10,
              padding:10,
              marginBottom: 26,
              flex: 1,
            }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                Nanotechnology’s application in the medical field is regarded as nanomedicine.
              </Text>
          </View>
          <View style = {{ 
              top: 5,
              height: '30%',          
              backgroundColor: colors.mediumorchid,  
              borderRadius: 10,
              padding:10,
              flex: 1,
              }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                The aim of nanotechnology in the field of medicine is to develop innovative products and methods for detecting and treating diseases in an accurate, effective, targeted, and durable manner. The ultimate objective is to ensure medical practices and practitioners are safer and less risks.
              </Text>
          </View>
          <View style = {{ 
              top: 20,
              height: '30%',
              backgroundColor: colors.orchid,  
              borderRadius: 10,
              padding:10,      
              marginBottom: 26,
              flex: 1,
              }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                Nanoparticles possess potential applications in the field of medical sciences, such as targeted drug delivery (chemotherapy).
              </Text>
          </View>
          <View style = {{
              top: 5 ,
              height: '30%',
              backgroundColor: colors.mediumorchid,  
              borderRadius: 10,
              padding:10, 
              marginBottom: 26,
              flex: 1,
              }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                Nanoparticles are emerging as an efficient tool to deliver therapies. They can carry drug molecules and be targeted to specific cells.          
                </Text>
          </View>
          <View style = {{ 
              top: -10,
              height: '30%',
              backgroundColor: colors.orchid, 
              borderRadius: 10,
              padding:10, 
              marginBottom: 26,
              flex: 1,
              }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                Large surface area to volume ratio of nanoparticles allows them to adsorb and contain various types of anticancer agents, such as chemotherapeutic drugs.
              </Text>
          </View>
          <View style = {{ 
              top: -20,
              height: '30%',
              backgroundColor: colors.mediumorchid, 
              borderRadius: 10,
              padding:10,
              flex: 1,     
              marginBottom: 26,

              }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                Drugs that are highly toxic like cancer chemotherapy, could be administered through the use of nanotechnology to ensure safety            
              </Text>
          </View>
          <View style = {{ 
              top: -30,
              height: '30%',
              backgroundColor: colors.orchid, 
              borderRadius: 10,
              padding:10,
              flex: 1,     
              marginBottom: 26,
              }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2}]}>
                The technique involves storing a cancer drug inside tiny objects called nanoparticles.        
              </Text>
          </View>        
        </View>
        </ScrollView>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDECEC',
    height: 'height',
  }
})
  
export default DetailsMed;
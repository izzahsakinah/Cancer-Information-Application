import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import image from '../assets/images/Doctors-pana.png';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsMed = ({navigation}) => {
return (
    <View style={styles.container}>
      
      <View style={{top: 1, }}>
        <ImageBackground source={image} style = {[{width: 200, height: 160, right:-5, }]}>
          </ImageBackground>
             <Text style={styles.descriptionTitle}>Nanomedicine</Text> 
                <TouchableOpacity style={{left: 1, position: 'absolute', marginVertical: 5}}
                  onPress={() => navigation.goBack('Home')}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} >     
        <View style={[{
         flexDirection:'column', 
         margin: 30,
         alignSelf: 'center',
         flex: 7,
         width: '95%',
         height: '90%',
         top: -45,
        },
        ]}>
          <View style = {{
              top:20,            
              backgroundColor: colors.orchid,   
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 16,
              marginBottom: 26,
            }}>
              <Text style = {[{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}]}>
                Nanotechnology’s application in the medical field is regarded as nanomedicine.
              </Text>
          </View>
          <View style = {{ 
              top:5,            
              backgroundColor: colors.mediumorchid,   
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 16,
              marginBottom: 26,
              }}>
              <Text style = {{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}}>
                The aim of nanotechnology in the field of medicine is to develop innovative products and methods for detecting and treating diseases in an accurate, effective, targeted, and durable manner. The ultimate objective is to ensure medical practices and practitioners are safer and less risks.
              </Text>
          </View>
          <View style = {{ 
              top:-10,
              backgroundColor: colors.orchid, 
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 26, 
              }}>
              <Text style = {{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}}> 
                Nanoparticles possess potential applications in the field of medical sciences, such as targeted drug delivery (chemotherapy).
              </Text>
          </View>
          <View style = {{ 
              top: -25,
              backgroundColor: colors.mediumorchid, 
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 26, 
              }}>
              <Text style = {{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}}>
                Nanoparticles are emerging as an efficient tool to deliver therapies. They can carry drug molecules and be targeted to specific cells.          
                </Text>
          </View>
          <View style = {{ 
              top: -40,
              backgroundColor: colors.orchid, 
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 26, 
              }}>
              <Text style = {{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}}>      
                Large surface area to volume ratio of nanoparticles allows them to adsorb and contain various types of anticancer agents, such as chemotherapeutic drugs.
              </Text>
          </View>
          <View style = {{ 
              top: -55,
              backgroundColor: colors.mediumorchid, 
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 26, 
              }}>
              <Text style = {{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}}>      
                Drugs that are highly toxic like cancer chemotherapy, could be administered through the use of nanotechnology to ensure safety.       
              </Text>
          </View>
          <View style = {{ 
              top: -65,
              backgroundColor: colors.orchid, 
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: -20,
              }}>
              <Text style = {{fontSize: 15, fontFamily: 'Roboto', color: colors.white2, textAlign: 'center'}}>      
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
    backgroundColor: colors.white2,
    height: '100%',
  },
  descriptionTitle: {
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    top: 60,
    right:18,
    position: 'absolute'
}, 

})
  
export default DetailsMed;
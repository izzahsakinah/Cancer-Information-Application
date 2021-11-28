import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import profile from '../assets/images/blackwidow.png';
import colors from '../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import profileData from '../assets/data/profileData';
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';


Entypo.loadFont();

const Profile = () => {
  const renderProfile = ({item}) => {
    return (
        <View style={styles.container}>          
          <SafeAreaView>
            <View>
              <Image source={profile} style={styles.profileImage} />  
            </View>  
          </SafeAreaView>
        <View style={styles.detailsNameWrapper}>
            <Text style = {styles.detailsName}>
              {item.name}
            </Text>
            </View>

          <View style={styles.detailsCountryWrapper}>
          <Entypo style={styles.locationImage} name="location-pin" size={25} color={colors.black} />
            <Text style = {styles.detailsCountry}>
              {item.country}
            </Text>
            </View>

          {/*<View style={styles.detailsDescriptionWrapper}>
            <Text style = {styles.detailsDescription}>
              {item.description}
            </Text>
    </View>*/}
        </View>

   );
    };

  return (
    <View >
       <View style={styles.infoWrapper}>
                        <FlatList
                            data={profileData}
                            renderItem={renderProfile}
                            keyExtractor={(item) => item.id}
                        />
       </View> 
    </View>
  );
};

const styles = StyleSheet.create({

  container: {     
    backgroundColor:'#ba55d3',
    height:550,
    alignItems:'center', 
    borderRadius: 25,
    marginTop: 200,
    //marginBottom: 10,
  },
  menuWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 220,
    borderWidth: 3,
    borderColor: colors.white,
    marginTop: -120,
    position: 'absolute',
    right: -110,
    //alignItems: 'center',
    //shadowColor: '#000',
    //shadowOffset: {
      //width: 0,
      //height: 2,
    //},
    //shadowOpacity: 0.25,
    //shadowRadius: 3.84,
  },
  detailsName: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    color: colors.white,
    paddingLeft: 5,
    textAlign: 'center',

  },
  detailsNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 150,
  },
  
  detailsCountry: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    color: colors.white,
    paddingLeft: 5,
  },
  detailsCountryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 150,
  },
});

export default Profile;
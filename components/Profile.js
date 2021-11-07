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
import name from '../assets/images/name.png';
import status from '../assets/images/status.png';
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';


Entypo.loadFont();

const Profile = () => {
  const renderProfile = ({item}) => {
    return (
      <View style={styles.body}>
        <View style={styles.item}>
        <View style={styles.detailsNameWrapper}>
        <Image source={status} style={styles.statusImage} />
            <Text style = {styles.detailsName}>
              {item.name}
            </Text>
            </View>

          <View style={styles.detailsCountryWrapper}>
          <Entypo style={styles.locationImage} name="location-pin" size={35} color={colors.black} />
            <Text style = {styles.detailsCountry}>
              {item.country}
            </Text>
            </View>

          <View style={styles.detailsDescriptionWrapper}>
          <Image source={name} style={styles.nameImage} />
            <Text style = {styles.detailsDescription}>
              {item.description}
            </Text>
            </View>
        </View>
      </View>

   );
    };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <Image source={profile} style={styles.profileImage} />
        </View>
      </SafeAreaView>
       <View style={styles.discoverItemsWrapper}>
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
    backgroundColor: '#E8DFDF',
  },
  body:{    
    backgroundColor: '#4527A0',
    height:300,
    alignItems:'center', 
    borderRadius: 25,
    marginTop: 30,
  },
  item:{
    alignItems:'flex-start',
    paddingLeft:15,    
    textAlign: 'center',
  },
  menuWrapper: {
    padding:60,
    alignItems: 'center',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    marginBottom:10,
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
    marginTop: 15,
  },
  nameImage: {
    width: 30,
    height: 35,
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
    marginTop: 15,
  },
  locationImage: {
    left: -3,
  },
  detailsDescription: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    color: colors.white,
    paddingLeft: 5,
    textAlign: 'center',

  },
  detailsDescriptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  statusImage: {
    width: 30,
    height: 35,
  },
});

export default Profile;
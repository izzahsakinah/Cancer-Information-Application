import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import colors from '../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';


class Profile extends Component {

  constructor(props)
  {
    super(props);
    this.state = {username:'', useremail:''};
  }

  render(){
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor= '#0b2c54' />
        <View style={styles.container}>
          <SafeAreaView>
          <Text style = {{fontSize: 20, color: colors.black, fontWeight: 'bold', margin: 10, }}>
              Profile
            </Text>
        <View style={styles.detailsNameWrapper}>
            <Text style = {styles.details}>
              Name
            </Text>
            </View>
      
        <View style={styles.detailsUsernameWrapper}>
            <Text style = {styles.details}>
              Username
            </Text>
            </View>

        <View style={styles.detailsEmailWrapper}>
            <Text style = {styles.details}>
              Email
            </Text>
            </View>

        <View style={styles.detailsGenderWrapper}>
            <Text style = {styles.details}>
              Gender
            </Text>
            </View>

        <View style={styles.detailsLocationWrapper}>
            <Text style = {styles.details}>
              Location
            </Text>
            </View>

          </SafeAreaView>
        </View>
        </View> 

   );
  };
}
  //return (
    //<View >
      // <View style={styles.infoWrapper}>
                       // <FlatList
                         //   data={profileData}
                        //    renderItem={renderProfile}
                         //   keyExtractor={(item) => item.id}
                        ///>
      // </View> 
    //</View>
  //);
//};

const styles = StyleSheet.create({

  container: { 
    backgroundColor:'#EDECEC',  
  },
  detailsNameWrapper: {
    width: 340,
    height: 40,
    top: 30,
    left: 10,
    marginBottom: 5,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 3,
  },
  detailsUsernameWrapper: {
    width: 340,
    height: 40,
    top: 30,
    left: 10,
    marginBottom: 5,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 3,
  },
  detailsEmailWrapper: {
    width: 340,
    height: 40,
    top: 30,
    left: 10,
    marginBottom: 5,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 3,
  },
  detailsGenderWrapper: {
    width: 340,
    height: 40,
    top: 30,
    left: 10,
    marginBottom: 5,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 3,
  },
  detailsLocationWrapper: {
    width: 340,
    height: 40,
    top: 30,
    left: 10,
    marginBottom: 5,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 3,
  },  
  details: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    color: colors.black,
    paddingLeft: 10,
  },
});

export default Profile;
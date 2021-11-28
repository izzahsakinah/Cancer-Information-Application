import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground,  Platforms } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { FlatList } from 'react-native-gesture-handler';
import profile from '../assets/images/blackwidow.png';
import cancer1 from '../assets/images/cancer1.jpg';
import cancer2 from '../assets/images/cancer2.jpg';
import cancer3 from '../assets/images/cancer6.jpg';
import firebase from 'react-native-firebase';

Feather.loadFont();
Entypo.loadFont();

const height = Dimensions.get('window').height;

export default class Home extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }
  render() {
    const {currentUser} = this.state;

       return (
         <View style={styles.container}>
          <ScrollView>
              {/*Header*/}
              <SafeAreaView>
                  <View style={styles.menuWrapper}>
                  <Text style={styles.discoverTitle}> MyNanoria </Text>
                      <View style={styles.homeWrapper}>
                      {/*<Feather name="menu" size={32} color={colors.gray} style={styles.menuIcon} />*/}
                      <Text style={styles.homeTitle}>
                           Hello, {currentUser && currentUser.email}
                      </Text>
                      <Image source={profile} style={styles.profileImage} />
                      </View>
                      <Text style={styles.recentTitle}>Recent Activity</Text>
                      <View style = {{   width: 280, height: 110, top: 50, left: 40, borderRadius: 15, overflow: 'hidden'}}>
                          <ImageBackground source={cancer1} style={styles.recentImageWrapper}>
                          <Text style={styles.recentText}>Introduction to Cancer</Text>
                          </ImageBackground>
                      </View>
                 </View>
              </SafeAreaView>

              {/*Discover*/}
              <View style={styles.discoverWrapper}>
                  <View style={styles.discoverCategoriesWrapper}>
                      <Text style={styles.discoverCategoryText}> 
                     Choose Topic
                      </Text>
                  </View>              
              </View>

            <View style={styles.itemsWrapper}>              
            <TouchableOpacity onPress= {()=>  this.props.navigation.navigate("Details")
                }>
                <ImageBackground source={cancer1}
                    style={[
                        styles.discoverItem , {
                            marginLeft: 20 
                        }]} 
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle }>
                    Cancer
                    </Text>
                    <View style={styles.discoverItemDetailsWrapper}>
                    <Text style={styles.discoverItemDetails }>
                       Introduction to Cancer
                    </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity onPress= {()=>  this.props.navigation.navigate("DetailsNano")
                }>
                <ImageBackground source={cancer2}
                    style={[
                        styles.discoverItem , {
                            marginLeft: 20 
                        }]} 
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle }>
                    Nanotechnology
                    </Text>
                    <View style={styles.discoverItemDetailsWrapper}>
                    <Text style={styles.discoverItemDetails }>
                    Application of Nanotechnology
                    </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>            

            <TouchableOpacity onPress= {()=>  this.props.navigation.navigate("DetailsDrugs")
                }>
                <ImageBackground source={cancer3}
                    style={[
                        styles.discoverItem , {
                            marginLeft: 20 
                        }]} 
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle }>
                    Nano Drugs Targetting Cancer Therapy 
                    </Text>
                    <View style={styles.discoverItemDetailsWrapper}>
                    <Text style={styles.discoverItemDetails }>
                    Greatest Technology in Cancer Therapy
                    </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>

        </ScrollView>
    </View>
            );
     };
};

     //const renderActivitiesItem = ({item}) => {
         //return (
            //<View style={[styles.activitiesItemWrapper, {
                //marginLeft: item.id === 1 ? 20 : 0
            //}]}>
                //<Image source={item.image} style={styles.activitiesItemImage}
                //>
               // <Text style = {styles.activitiesItemText}>
                   // {item.title}
               // </Text>
       // </View>
   
        // );
    // };*/

//return (
      
                /* Activities */
                /*<View style={styles.activitiesWrapper}>
                   <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivitiesItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>*/

const styles = StyleSheet.create({

    container: {
        flex: 1,
        color: colors.black,
        backgroundColor: '#E8DFDF',
        height: height,
        
    },
    menuWrapper: {
        backgroundColor: '#4527A0',
        width: 360,
        height: 180,
    },
    homeWrapper: {
        top: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 62,
        height: 62,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: colors.white,
        marginTop: 5,        
        marginHorizontal: 50,
      },
    homeTitle: {
        fontFamily: 'Roboto',
        color: colors.orchid,
        fontSize: 30,
        marginRight: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    recentTitle: {
        fontFamily: 'Roboto',
        color: colors.white,
        fontSize: 12,
        left: 20,
        top: 30,
    },
    recentImageWrapper: {
        width: 280, 
        height: 110,
    },
    recentText: {
        fontFamily: 'Roboto',
        color: colors.white,
        fontSize: 15,
        left: 20,
        top: 20,
    },
    discoverWrapper: {
        //marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
        //marginRight: 80,
        color: colors.white,
        top: 10,
        left: 15,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 30,
        //flexDirection: 'column',
        marginTop: 30,
    },
    discoverCategoryText: {
        marginRight: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        color: colors.black,
        top: 60,
    },
    discoverItemsWrapper: {
        paddingVertical: 70,
    },
    discoverItem:{
        width: 200,
        height: 210,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginRight : 20,
        //marginBottom: 15,
    },
    discoverItemImage:{
        borderRadius: 20,
        top: 0,
    },
    discoverItemTitle:{
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        color: colors.white,
        left: 20,
    },
    discoverItemDetailsWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemDetails:{
        marginLeft: 20,
        fontFamily: 'sans-serif-light',
        fontSize: 12,
        color: colors.white,
    },
    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: colors.black,
    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activitiesItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    activitiesItemImage: {
        width: 50,
        height: 49,
        marginLeft: 20,
    },
    activitiesItemText: {
        marginTop: 5,
        fontFamily: 'sans-serif-light',
        fontSize: 10,
        color: colors.black,
        marginLeft: 20,
    }, 
    itemsWrapper: {
        flexDirection: 'row',
    },
}
)

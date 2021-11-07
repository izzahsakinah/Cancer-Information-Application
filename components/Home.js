import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground, SectionList } from 'react-native';
import colors from '../assets/colors/colors';
import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import profile from '../assets/images/blackwidow.png';

Feather.loadFont();
Entypo.loadFont();

const height = Dimensions.get('window').height;

const Home = ({ navigation }) => {

    const renderDiscoverItem = ({item}) => {
       return (
          <View>
                <TouchableOpacity onPress= {()=> navigation.navigate("Details", {
                    item: item  
                    })
                }>
                <ImageBackground source={item.image}
                    style={
                        styles.discoverItem
                        }
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle }>
                        {item.title }
                    </Text>
                    <View style={styles.discoverItemDetailsWrapper}>
                    <Text style={styles.discoverItemDetails }>
                        {item.details }
                    </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            </View>
            );
     };

     {/*const renderActivitiesItem = ({item}) => {
         return (
            <View style={[styles.activitiesItemWrapper, {
                marginLeft: item.id === 1 ? 20 : 0
            }]}>
                <Image source={item.image} style={styles.activitiesItemImage}
                />
                <Text style = {styles.activitiesItemText}>
                    {item.title}
                </Text>
        </View>
   
         );
     };*/}

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
                            Hi, Corrienna
                        </Text>
                        <Image source={profile} style={styles.profileImage} />
                        </View>
                        <Text style={styles.recentTitle}>Recent Activity</Text>
                        <View style={styles.recentTitleWrapper}></View>
                    </View>
                </SafeAreaView>

                {/*Discover*/}
                <View style={styles.discoverWrapper}>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={styles.discoverCategoryText}> 
                       Choose Topic
                        </Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            //ListFooterComponent={renderDiscoverItem}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Activities */}
                {/*<View style={styles.activitiesWrapper}>
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
                </View>*/}
            </ScrollView>
        </View>
        );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        color: colors.black,
        backgroundColor: '#E8DFDF',
        height: height,
        
    },
    menuWrapper: {
        backgroundColor: '#4527A0',
        width: 326,
        height: 180,
    },
    homeWrapper: {
        top: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: colors.white,
        marginTop: 5,        
        marginHorizontal: 20,
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
    recentTitleWrapper: {
        width: 280,
        height: 110,
        backgroundColor: colors.white,
        top: 50,
        left: 20,
        borderRadius: 15,
    },
    discoverWrapper: {
        //marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 50,
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
        fontSize: 15,
        color: colors.black,
        top: 60,
    },
    discoverItemsWrapper: {
        paddingVertical: 70,
    },
    discoverItem:{
        width: 270,
        height: 150,
        //justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginBottom: 15,
    },
    discoverItemImage:{
        borderRadius: 20,
        top: 0,
        left: 25,
    },
    discoverItemTitle:{
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        color: colors.white,
    },
    discoverItemDetailsWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemDetails:{
        marginLeft: 0,
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
});

export default Home;
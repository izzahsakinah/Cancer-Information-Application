import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import colors from '../assets/colors/colors';
import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';


Feather.loadFont();
Entypo.loadFont();

const Home = ({ navigation }) => {

    const renderDiscoverItem = ({item}) => {
      return (
          <View>
                <TouchableOpacity onPress= {()=> navigation.navigate("Details", {
                    item: item  
                    })
                }>
                <ImageBackground source={item.image}
                    style={[styles.discoverItem, 
                        {marginLeft: item.id === 'options1' ? 20 : 0},
                ]}
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

     const renderActivitiesItem = ({item}) => {
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
     };

    return (
        <View style={styles.container}>
            <ScrollView>

                {/*Header*/}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        {/*<Feather name="menu" size={32} color={colors.gray} style={styles.menuIcon} />*/}
                        <Text style={styles.homeTitle}>
                            Welcome to MyNanoria
                        </Text>
                    </View>
                </SafeAreaView>

                {/*Discover*/}
                <View style={styles.discoverWrapper}>
                    {/*<Text style={styles.discoverTitle}> MyNanoria App gives you related information about cancer
                    </Text>*/}
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={styles.discoverCategoryText}> 
                        Choose one of these options to learn 
                        </Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Take a simple task here!</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivitiesItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
        );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        color: colors.black,
        backgroundColor: colors.orange,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    homeTitle: {
        fontFamily: 'Lato-Black',
        color: colors.white,
        fontSize: 20,
    },
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 15,
        color: colors.white,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    discoverCategoryText: {
        marginRight: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        color: colors.white,
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem:{
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage:{
        borderRadius: 20,
    },
    discoverItemTitle:{
        fontFamily: 'Lato-Bold',
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
        fontFamily:'Lato-Thin',
        fontSize: 12,
        color: colors.white,
    },
    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        color: colors.white,
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
        fontFamily: 'Lato-Regular',
        fontSize: 10,
        color: colors.white,
        marginLeft: 20,
    }, 
});

export default Home;
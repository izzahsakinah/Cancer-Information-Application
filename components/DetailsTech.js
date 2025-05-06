import React from 'react';
import { View , TouchableOpacity, Text, StyleSheet, ImageBackground, StatusBar, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';
import image from '../assets/images/Stem-cell-bro.png';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const DetailsTech = ({navigation}) => {
    
    return (        
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor= '#FFFFFF' />
        <View style={{top:1, backgroundColor: colors.white2, }}>
        <ImageBackground source={image} style = {{width: 170, height: 160, right:-25, }}>
          </ImageBackground>
             <Text style={styles.descriptionTitle}>What is Cancer</Text> 
                <TouchableOpacity style={{left: 1, position: 'absolute', marginVertical: 5}}
                  onPress={() => navigation.goBack('Home')}>
                    <Entypo name="chevron-left" size={28} color={colors.black} />
                </TouchableOpacity>
        </View>            
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={{justifyContent: 'center', paddingBottom : 20, alignItems: 'center',}}>
            {/*Definition*/}
            <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionTitleMeaning}>
                    What is Cancer
                    </Text>
                <Text style={styles.descriptionMeaning}>
                    Cancer is a process happens when a normal cell become mutated and divides rapidly during the process of mitosis (cell division).
                    This causes the number of cells increase rapidly that cause accumulation of cell in the form of tumor.
                </Text>
            </View>

            {/*Types*/}
            <View style={styles.descriptionSecondWrapper}>
                <Text style={styles.descriptionTitleTypes}>
                    Types of Cancer
                    </Text>
                <Text style={styles.descriptionTypes}>
                    Carcinoma, Sarcoma, Leukaemia, Lymphoma, Multiple Myeloma, Melanoma, Brain and Spiral Cord Tumors etc.
                </Text>
            </View>

            {/*Spreading*/}
            <View style={styles.descriptionThirdWrapper}>
                <Text style={styles.descriptionTitleSpreading}>
                    Spreading of Cancer
                    </Text>
                <Text style={styles.descriptionSpreading}>
                   Cancer can be spread from one organ to another. When cancer cells grow and invades the blood vessel,
                   cancer cell can travel all over the body via blood vessels. And this cells can deposits at any part of the 
                   body and start to grow, multiply and forms cancer there. This process called as metastasis.
                </Text>
            </View>

            {/*Treatment*/}
            <View style={styles.descriptionForthWrapper}>
                <Text style={styles.descriptionTitleTreatment}>
                    Treatments of Cancer
                </Text>
                <Text style={styles.descriptionTreatment}>
                    Chemotherapy, Radiotherapy, Surgery, Targeted therapy, Immunotherapy, Hormone therapy.
                </Text>
            </View>
            </ScrollView>  
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white2,
    },
    scrollView: {
        margin: 20,
    },
    backgroundImage: {
        height: 130,
        width: '100%',
    },
    descriptionTitle: {
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
        top: 60,
        right:25,
        position: 'absolute'
    },   
    descriptionWrapper:{
       backgroundColor: colors.cream,
       width: '100%',
       height: '25%',
       borderRadius: 20,
       paddingVertical: 20,
       alignSelf: 'center',
       marginTop: 20,
    },
    backBackgroundImage: {
        color: colors.white,
        fontSize: 10,
        left: 1,
        top: 5,
    },
    descriptionTitleMeaning:{
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 17,
        textAlign: 'center',
        //textDecorationLine: 'underline'
    },
    descriptionMeaning:{
        color: colors.black,
        fontFamily: 'Roboto',
        fontSize: 17,        
        marginTop: 15,
        textAlign: 'center',

    },
    descriptionSecondWrapper: {
        backgroundColor: colors.gray,        
        width: '100%',
        height: '20%',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        alignSelf: 'center',
        
     },
    descriptionTitleTypes:{
        color: colors.black,
        fontFamily: 'Roboto',  
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 15,
        textAlign: 'center',
        //textDecorationLine: 'underline'

     },
    descriptionTypes: {
        color: colors.black,
        fontFamily: 'Roboto',
        fontSize: 17,
        marginTop: 30,
        textAlign: 'center',
    },
    descriptionThirdWrapper: {
        backgroundColor: colors.cream,        
        width: '100%',
        height: '28%',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        alignSelf: 'center',
    },
    descriptionTitleSpreading:{
        color: colors.black,
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 5,
        textAlign: 'center',
        //textDecorationLine: 'underline'
    },
    descriptionSpreading: {
        color: colors.black,
        fontFamily: 'notoserif',
        fontSize: 17,
        marginTop: 30,
        textAlign: 'center',

    },
    descriptionForthWrapper: {
        backgroundColor: colors.gray,        
        width: '100%',
        height: '20%',   
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        alignSelf: 'center', 
    },
    descriptionTitleTreatment: {
        color: colors.black,
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 15,
        textAlign: 'center',
        //textDecorationLine: 'underline'

    },
    descriptionTreatment: {
        color: colors.black,
        fontFamily: 'notoserif',
        fontSize: 17,
        marginTop: 30,
        textAlign: 'center',
    },
    bg: {
        width: '40%',
        height: '25%', 
        Opacity:0.15,
        backgroundColor: 'rgba(255,255,355,0.4)',
        alignSelf: 'center',
        top: 10,
        borderRadius: 5,
    }, 
});

export default DetailsTech;
import React from 'react';
import { View , TouchableOpacity, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';
import image from '../assets/images/cancer7.jpg';
import Entypo from 'react-native-vector-icons/Entypo';


Entypo.loadFont();


const Details = ({navigation}) => {
    
    return (        
        <View style={styles.container}>
            <ScrollView style={{height: 300}}>
            <ImageBackground source={image} style={styles.backgroundImage}>            
                <TouchableOpacity style={styles.backBackgroundImage}
                onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={28} color={colors.white} />
                </TouchableOpacity>
           
            <Text style={styles.descriptionTitle}>Get To Know About Cancer</Text>
             </ImageBackground>

            {/*Definition*/}
            <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionTitleMeaning}>
                    What is Cancer
                    </Text>
                <Text style={styles.descriptionMeaning}>
                    Cancer is a process happens when a normal cell become mutated and divides rapidly during the process of mitosis (cell division).
                    This causes the numver of cells increase rapidly that cause accumulation of cell in the form of tumor.
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
                   cancer cell can travel all over the body via thr blood vessels. And this cells can deposits at any part of the body and start
                   to grow, multiply and forms cancer there. This process called as metastasis.
                </Text>
            </View>

            {/*Treatment*/}
            <View style={styles.descriptionForthWrapper}>
                <Text style={styles.descriptionTitleTreatment}>
                    Treatments of Cancer
                </Text>
                <Text style={styles.descriptionTreatment}>
                    Chemotherapy, Radiotherapy, Surgery, Targeted therapy, Immunotherapy, Hormone therapy
                </Text>
            </View>
            </ScrollView>            
            </View>

           

        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDECEC',
    },
    backgroundImage: {
        height: 130,
    },
    descriptionTitle: {
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        color: colors.white2,
        textAlign: 'center',
    },
    descriptionWrapper:{
       backgroundColor: colors.white2,
       width: '90%',
       height: '20%',
       borderRadius: 20,
       paddingVertical: 20,
       alignSelf: 'center',
       marginTop: 20,
    },
    backBackgroundImage: {
        color: colors.white,
        fontSize: 10,
        marginLeft: 20,
        marginTop: 20,
    },
    descriptionTitleMeaning:{
        color: colors.black,
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
        backgroundColor: colors.white2,        
        width: '90%',
        height: '20%',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        alignSelf: 'center',
        
     },
    descriptionTitleTypes:{
        color: colors.black,
        fontFamily: 'Roboto',
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
        backgroundColor: colors.white2,        
        width: '90%',
        height: '25%',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        alignSelf: 'center',
    },
    descriptionTitleSpreading:{
        color: colors.black,
        fontFamily: 'notoserif',
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
        backgroundColor: colors.white2,        
        width: '90%',
        height: '20%',   
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        alignSelf: 'center', 
    },
    descriptionTitleTreatment: {
        color: colors.black,
        fontFamily: 'notoserif',
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
});

export default Details;
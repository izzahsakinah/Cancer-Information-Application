import React from "react";
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch  } from "react-native-paper";

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{ }}>
                    <View style={[styles.userSection, {flexDirection: 'row'}]}>
                        <View style ={{
                            marginTop: 15,
                        }}>
                            <Avatar.Image source={require('../assets/images/blackwidow.png')}/>
                        </View>
                        <View style={{marginLeft: 15, marginTop: 15}}>
                            <Title style={{}}>MyNanoria</Title>
                        </View>
                    </View>      
                    <Drawer.Section style={{flex:1, marginTop: 15}}>
                        <DrawerItem 
                            label="About" 
                            onPress={() => {props.navigation.navigate('About');
                        }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {/*LOGOUT*/}
            <Drawer.Section style={{marginBottom: 15, borderTopColor: '#f4f4f4', borderTopWidth:1}}>
                <Drawer.Item label="Logout" onPress= {() => {}}/>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create ({

});
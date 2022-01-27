import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Home from './components/Home';
import Note from './components/Note';
//import Splash from './components/Splash';
//import Register from './components/Register';
//import Login from './components/Login';
import Details from './components/Details';
import DetailsNano from './components/DetailsNano';
import Nanoparticles from './components/Nanoparticles';
import DetailsMed from './components/DetailsMed';
import Profile from './components/Profile';
import Quiz from './components/Quiz';
import QuizIntro from './components/QuizIntro';
import QuizNano from './components/QuizNano';
import QuizMed from './components/QuizMed';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

Entypo.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0b2c54',
        tabBarInactiveTintColor: '#9e9e9e',
        // tabBarShowLabel: false,
        // headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={Note}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Note',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="note-text" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Quiz',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="brain" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="contact-page" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown : false,
          }}
        /> 
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown : false,
          }}
        /> 
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown : false,
          }}
        />*/}
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          //options={{title: 'My home'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsNano"
          component={DetailsNano}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nanoparticles"
          component={Nanoparticles}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsMed"
          component={DetailsMed}
          options={{headerShown: false}}
       />
         {/*<Stack.Screen
          name="QuizIntro"
          component={QuizIntro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizNano"
          component={QuizNano}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizMed"
          component={QuizMed}
          options={{headerShown: false}}
        />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    backgroundColor: colors.orchid,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  Image: {
    width: 20,
    height: 20,
  },
});

export default App;
